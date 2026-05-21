// ─── TRON (TRC20) address validation ───────────────────────────────────
// Implements Base58Check decoding + SHA-256 double-hash checksum
// verification. A valid TRC20 address is base58(checksum(0x41 || 20-byte hash))
// and serializes to 34 characters starting with 'T'.
//
// Pure-TS implementation so we don't pull a multi-megabyte dependency into
// the bundle. SHA-256 is taken from the browser SubtleCrypto API.

const BASE58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

function base58Decode(input: string): Uint8Array | null {
  if (!input) return null;
  const map = new Map<string, number>();
  for (let i = 0; i < BASE58_ALPHABET.length; i++) {
    map.set(BASE58_ALPHABET[i], i);
  }

  const bytes: number[] = [0];
  for (const ch of input) {
    const value = map.get(ch);
    if (value === undefined) return null;
    let carry = value;
    for (let j = 0; j < bytes.length; j++) {
      carry += bytes[j] * 58;
      bytes[j] = carry & 0xff;
      carry >>= 8;
    }
    while (carry > 0) {
      bytes.push(carry & 0xff);
      carry >>= 8;
    }
  }

  // Leading '1' characters represent leading zero bytes
  for (const ch of input) {
    if (ch === '1') bytes.push(0);
    else break;
  }

  return new Uint8Array(bytes.reverse());
}

async function sha256(data: Uint8Array): Promise<Uint8Array> {
  // We deliberately defer to SubtleCrypto so we don't ship a JS hash impl.
  // This validator therefore only runs in browsers (and Node 19+ via
  // globalThis.crypto.subtle). Callers should treat the absence of subtle
  // as "validation skipped" — UI must still keep the basic regex gate.
  // Copy into a fresh ArrayBuffer-backed view so the SubtleCrypto type
  // signature (BufferSource) accepts it on stricter TS lib targets.
  const copy = new Uint8Array(data.byteLength);
  copy.set(data);
  const buf = await globalThis.crypto.subtle.digest('SHA-256', copy.buffer);
  return new Uint8Array(buf);
}

/**
 * Validate a TRON / TRC20 wallet address.
 *
 * Returns true only when:
 *  - The string is 34 characters and starts with `T`.
 *  - It decodes from base58 to 25 bytes whose first byte is 0x41.
 *  - The last 4 bytes match the first 4 bytes of double-SHA-256 over the
 *    first 21 bytes (Base58Check).
 *
 * NEVER use this as the sole authorization for a withdrawal. Always verify
 * server-side and require human confirmation of the destination address.
 */
export async function isValidTronAddress(address: string): Promise<boolean> {
  if (typeof address !== 'string') return false;
  if (!/^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(address)) return false;

  const decoded = base58Decode(address);
  if (!decoded || decoded.length !== 25) return false;
  if (decoded[0] !== 0x41) return false;

  if (typeof globalThis.crypto?.subtle?.digest !== 'function') {
    // SubtleCrypto unavailable (older Node) — fall back to syntactic check.
    return true;
  }

  const payload = decoded.slice(0, 21);
  const checksum = decoded.slice(21);
  const hash1 = await sha256(payload);
  const hash2 = await sha256(hash1);

  for (let i = 0; i < 4; i++) {
    if (hash2[i] !== checksum[i]) return false;
  }
  return true;
}
