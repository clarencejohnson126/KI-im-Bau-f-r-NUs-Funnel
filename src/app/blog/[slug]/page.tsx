import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
  Share2,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  const title = post.metaTitle || post.title;
  const description = post.metaDescription || post.description;

  return {
    title: `${title} | KI-Bauunternehmer Blog`,
    description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title,
      description,
      type: "article",
      locale: "de_DE",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.ogImage ? [post.ogImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://ki-bauunternehmer.de/blog/${slug}`,
    },
  };
}

// Simple markdown to HTML converter (basic)
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mt-12 mb-6">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mt-12 mb-6">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code blocks
    .replace(/```([\s\S]*?)```/g, '<pre class="bg-concrete-800 rounded-lg p-4 my-6 overflow-x-auto text-sm"><code class="text-concrete-300">$1</code></pre>')
    // Inline code
    .replace(/`(.*?)`/g, '<code class="bg-concrete-800 text-orange-400 px-1.5 py-0.5 rounded text-sm">$1</code>')
    // Blockquotes
    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-orange-500 pl-4 my-6 text-concrete-300 italic">$1</blockquote>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li class="ml-4 text-concrete-300">$1</li>')
    // Horizontal rules
    .replace(/^---$/gim, '<hr class="border-concrete-700 my-8" />')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-orange-400 hover:text-orange-300 underline">$1</a>')
    // Paragraphs (must be last)
    .replace(/^(?!<[hlupboa]|<\/|<pre|<code|<block|<hr|<li)(.*$)/gim, '<p class="text-concrete-300 leading-relaxed mb-4">$1</p>');

  // Wrap list items in ul
  html = html.replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc list-inside space-y-2 my-4">$&</ul>');

  // Clean empty paragraphs
  html = html.replace(/<p class="[^"]*"><\/p>/g, '');

  return html;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = markdownToHtml(post.content);

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "KI-Bauunternehmer",
      url: "https://ki-bauunternehmer.de",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ki-bauunternehmer.de/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
  };

  // FAQ JSON-LD for GEO
  const faqJsonLd = post.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <article className="min-h-screen">
        {/* Hero Section */}
        <header className="relative py-16 md:py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-concrete-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Alle Artikel</span>
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="bg-orange-500/10 text-orange-400 text-sm font-medium px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-concrete-400 mb-8">
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-concrete-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("de-DE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* TL;DR Section - Important for GEO */}
        {post.tldr && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <h2 className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-3">
                TL;DR - Die Kurzfassung
              </h2>
              <p className="text-white leading-relaxed">{post.tldr}</p>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div
            className="prose prose-invert prose-orange max-w-none"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>

        {/* FAQ Section - Critical for GEO */}
        {post.faq && post.faq.length > 0 && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="border-t border-concrete-800 pt-12">
              <h2 className="font-heading text-2xl font-bold text-white mb-8">
                Häufige Fragen
              </h2>
              <div className="space-y-6">
                {post.faq.map((item, index) => (
                  <div
                    key={index}
                    className="bg-concrete-900/50 border border-concrete-800 rounded-xl p-6"
                  >
                    <h3 className="text-white font-semibold mb-3">
                      {item.question}
                    </h3>
                    <p className="text-concrete-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="flex flex-wrap items-center gap-3">
              <Tag className="w-4 h-4 text-concrete-500" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-concrete-400 bg-concrete-800/50 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="border-t border-concrete-800 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
              BEREIT FÜR MEHR?
            </h2>
            <p className="text-concrete-400 mb-8">
              Das KI im Bau Starter Kit enthält 50+ fertige Prompts, die du
              sofort einsetzen kannst.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-colors"
              >
                Starter Kit holen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-concrete-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Mehr Artikel lesen
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
