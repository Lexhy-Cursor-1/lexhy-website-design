import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      {/* Legal Disclaimer Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Important Legal Notice</h2>
            <div className="bg-card border border-border rounded-3xl p-8">
              <p className="text-red-600 text-sm leading-relaxed font-medium">
                <strong>LEXHY is not a law firm.</strong> We are a technology platform that provides AI-powered contract creation and guidance tools. When human legal review is requested by users, LEXHY connects users to licensed legal practitioners who conduct human-in-the-loop reviews to ensure accuracy and compliance. All legal advice and formal legal representations are provided by qualified, licensed attorneys through our network of legal professionals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
