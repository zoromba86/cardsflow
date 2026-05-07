"use client";

const LOGOS = [
  "APPLE PAY", "GOOGLE PAY", "ALIPAY", "WECHAT HK", "EBAY", "LAZADA", 
  "AMAZON", "SHOPIFY", "ALIEXPRESS", "TIKTOK", "FACEBOOK", "YANGO", 
  "WOLT", "STARBUCKS", "MCDONALDS", "GODADDY", "APPLE.COM", "MEITUAN", 
  "PINDUODUO", "EXPRESSVPN", "TELEGRAM PREMIUM", "FEDAFONE", 
  "CARVERTICAL", "DUBAI DUTY FREE", "PLAYSTATION NETWORK", "UBER", 
  "BOLT", "TACO BELL", "ZARA", "7-ELEVEN", "OZON", "DISCORD", "SHEIN", "CAREEM"
].map(name => ({ name, text: name }));

const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];

export function TrustMarquee() {
  return (
    <section className="w-full py-10 bg-transparent border-b border-slate-900/5 overflow-hidden">
      <div className="flex justify-center mb-10">
        <span className="inline-block text-slate-800 text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 bg-[#fbe7b6]">
          Powering over $50M in monthly spend across global platforms
        </span>
      </div>

      <div className="relative flex overflow-hidden w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center pl-16 md:pl-24 marquee-track"
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900/80">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        .marquee-track {
          animation: scroll-marquee 25s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
