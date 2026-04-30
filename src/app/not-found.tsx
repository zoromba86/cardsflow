import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-slate-200 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-teal-400" />
        
        <h1 className="text-8xl font-black text-slate-100 mb-4 tracking-tighter">404</h1>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-3 -mt-16 relative z-10">Page not found</h2>
        <p className="text-slate-600 mb-8 relative z-10">
          We couldn&apos;t find the page you were looking for. It might have been moved or doesn&apos;t exist.
        </p>
        
        <div className="flex flex-col gap-3 relative z-10">
          <Link
            href="/"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/contact"
            className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-4 rounded-xl border border-slate-200 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
