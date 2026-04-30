import { Navbar, Footer } from "@/components/layout";
import { LatestArticles } from "@/components/sections/blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 flex flex-col">
      <Navbar />

      <div className="flex-grow pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
            CardsFlow Blog
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Insights, updates, and deep dives on building modern payment products.
          </p>
        </div>

        {/* We can reuse the LatestArticles component to populate the blog for now */}
        <LatestArticles />
      </div>

      <Footer />
    </main>
  );
}
