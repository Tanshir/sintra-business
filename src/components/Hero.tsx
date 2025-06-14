
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm mb-8">
              <span className="mr-2">✨</span>
              Your employees that never sleep, never complain
              <img 
                src="/lovable-uploads/30aec08f-8570-42c8-ad55-434d4b25c17b.png" 
                alt="AI Robot Characters"
                className="ml-3 h-8 w-auto"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your employees
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                that never sleep,
              </span>
              <br />
              never complain
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Meet your AI workforce - employees that work 24/7, handle any task, and scale with your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right side - Video */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
              <div className="flex items-center justify-center mb-4">
                <img 
                  src="/lovable-uploads/30aec08f-8570-42c8-ad55-434d4b25c17b.png" 
                  alt="AI Robot Characters"
                  className="h-16 w-auto"
                />
              </div>
              <video 
                className="w-full h-auto rounded-2xl"
                autoPlay 
                muted 
                loop
                playsInline
              >
                <source src="/lovable-uploads/bb6ed5a9-a764-4c02-9823-a30c53f2d19e.png" type="video/mp4" />
                <img 
                  src="/lovable-uploads/bb6ed5a9-a764-4c02-9823-a30c53f2d19e.png" 
                  alt="AI Workforce Demo"
                  className="w-full h-auto rounded-2xl"
                />
              </video>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Always Working</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Tasks Completed</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6">
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-gray-400">Sick Days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
