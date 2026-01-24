import { BlogNavbar } from "@/components/BlogNavbar";
import { Footer } from "@/components/Footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-concrete-950">
      <BlogNavbar />
      {children}
      <Footer />
    </div>
  );
}
