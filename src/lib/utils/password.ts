// ─── Password policy helpers ──────────────────────────────────────────
// Cheap, dependency-free heuristic. Final enforcement is the server's
// responsibility; this just shaves off the obviously-weak passwords client
// side and gives the user fast feedback.

export const PASSWORD_MIN_LENGTH = 12;

export interface PasswordCheck {
  ok: boolean;
  message?: string;
}

const COMMON_WEAK = new Set<string>([
  'password', 'password1', 'password123', 'qwerty', 'qwerty123',
  '123456', '12345678', '1234567890', 'letmein', 'welcome', 'admin',
  'iloveyou', 'cardsflow', 'cardsflow1', 'cardsflow123',
]);

/**
 * Validates a candidate password. Returns ok=true when the password passes
 * minimum length, character-class diversity, and is not in the small
 * common-weak list. We deliberately keep the rules conservative so the
 * server (which is authoritative) can apply stricter policy on top.
 */
export function checkPassword(password: string): PasswordCheck {
  if (typeof password !== 'string') {
    return { ok: false, message: 'Password is required.' };
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return { ok: false, message: `Password must be at least ${PASSWORD_MIN_LENGTH} characters.` };
  }
  if (password.length > 128) {
    return { ok: false, message: 'Password must be at most 128 characters.' };
  }

  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const classes = [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length;
  if (classes < 3) {
    return { ok: false, message: 'Password must include at least three of: lowercase, uppercase, digit, symbol.' };
  }

  if (COMMON_WEAK.has(password.toLowerCase())) {
    return { ok: false, message: 'That password is in a list of commonly-leaked passwords. Choose another.' };
  }

  return { ok: true };
}
