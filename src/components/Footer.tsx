import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0F1B2D] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
               <span className="text-white font-bold text-lg tracking-tight">CardsFlow</span>
             </div>
              <p className="text-sm text-zinc-500 max-w-sm mt-5 leading-relaxed font-light">
                The world's first virtual card issuance platform built on absolute zero-knowledge protocols. Experience total financial privacy without compromising on our industry-leading 99.8% global merchant acceptance rate.
              </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Products</h4>
            <ul className="flex flex-col gap-4 text-sm text-zinc-500">
               <li><Link href="#" className="hover:text-white transition-colors">Marketplace</Link></li>
               <li><Link href="#" className="hover:text-white transition-colors">Wallets</Link></li>
               <li><Link href="#" className="hover:text-white transition-colors">Deposits</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-zinc-500">
               <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
               <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
               <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-zinc-500">
               <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
               <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
               <li><Link href="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-xs text-zinc-600">
             © {new Date().getFullYear()} CardsFlow. All rights reserved.
           </p>
        </div>

      </div>
    </footer>
  );
}
