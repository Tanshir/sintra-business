
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
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
        <Features />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
