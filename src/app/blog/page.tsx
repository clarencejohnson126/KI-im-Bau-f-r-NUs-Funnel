import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | KI für Nachunternehmer im Bau",
  description:
    "Praxis-Tipps wie KI und Automatisierung Nachunternehmern in der Baubranche Zeit und Geld sparen. Alle 2 Tage ein neuer Artikel.",
  keywords: [
    "KI Baubranche",
    "Automatisierung Nachunternehmer",
    "ChatGPT Bau",
    "Digitalisierung Handwerk",
    "KI Trockenbau",
    "KI Elektro",
  ],
  openGraph: {
    title: "Blog | KI für Nachunternehmer im Bau",
    description:
      "Praxis-Tipps wie KI und Automatisierung Nachunternehmern in der Baubranche Zeit und Geld sparen.",
    type: "website",
    locale: "de_DE",
  },
};

// Force static generation with revalidation
export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 text-orange-400 text-sm font-medium mb-6">
            Alle 2 Tage ein neuer Artikel
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            KI & AUTOMATISIERUNG
            <br />
            <span className="text-orange-500">FÜR NACHUNTERNEHMER</span>
          </h1>
          <p className="text-lg md:text-xl text-concrete-400 max-w-2xl mx-auto">
            Kein Marketing-Blabla. Konkrete Anleitungen, echte Zeitersparnisse,
            getestet von Nachunternehmern in Deutschland.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-concrete-400 text-lg">
                Noch keine Artikel vorhanden. Komm bald wieder!
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`group relative bg-concrete-900/50 border border-concrete-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 ${
                    index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <Link href={`/blog/${post.slug}`} className="block p-6 md:p-8">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-orange-500/10 text-orange-400 text-xs font-medium px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      {index === 0 && (
                        <span className="bg-green-500/10 text-green-400 text-xs font-medium px-3 py-1 rounded-full">
                          Neuester Artikel
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2
                      className={`font-heading font-bold text-white mb-3 group-hover:text-orange-400 transition-colors ${
                        index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                      }`}
                    >
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-concrete-400 mb-6 line-clamp-3">
                      {post.description}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-concrete-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("de-DE", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 text-xs text-concrete-500 bg-concrete-800/50 px-2 py-1 rounded"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More Arrow */}
                    <div className="flex items-center gap-2 mt-6 text-orange-400 font-medium">
                      <span>Weiterlesen</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 border-t border-concrete-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-6">
            WILLST DU DEN KOMPLETTEN
            <br />
            <span className="text-orange-500">KI-WERKZEUGKASTEN?</span>
          </h2>
          <p className="text-concrete-400 text-lg mb-8 max-w-2xl mx-auto">
            300+ Seiten E-Book, 50+ fertige Prompts, Tool-Vergleiche und
            Checklisten. Alles, was du brauchst, um mit KI Zeit zu sparen.
          </p>
          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Starter Kit ansehen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
