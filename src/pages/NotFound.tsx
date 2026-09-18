import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageMeta } from "@/components/lexhy/PageMeta";

export default function NotFound() {
  return (
    <section className="site-container flex min-h-[65vh] items-center py-24">
      <PageMeta title="Page not found | Lexhy" description="The requested page could not be found." path="/404" />
      <div>
        <p className="eyebrow">404</p>
        <h1 className="page-title mt-7">This page is not here.</h1>
        <Link to="/" className="quiet-link mt-8">Return home <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
