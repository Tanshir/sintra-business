
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AIHelpers } from "../components/AIHelpers";
import { Features } from "../components/Features";
import { LearnBusiness } from "../components/LearnBusiness";
import { BlogPreview } from "../components/BlogPreview";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Gradient background overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 -z-10"></div>
      
      {/* Content */}
      <div className="relative">
        <Header />
        <Hero />
        <AIHelpers />
        <LearnBusiness />
        <Features />
        <BlogPreview />
        <CTA />
        
        {/* Animated Image Section */}
        <section className="py-16 sm:py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
              <a 
                href="https://www.10xsocialmedia.agency/sintra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="/lovable-uploads/1f9e2528-31f3-48d9-9854-d7e820902cd9.png" 
                  alt="AI Team Characters" 
                  className="relative z-10 w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer mix-blend-screen opacity-90 contrast-110 brightness-90" 
                />
              </a>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
