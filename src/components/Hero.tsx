

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your employees
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                that never sleep,
              </span>
              <br />
              never complain
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Meet your AI workforce - employees that work 24/7, handle any task, and scale with your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => window.open('https://www.10xsocialmedia.agency/sintra', '_blank')}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => window.open('https://www.10xsocialmedia.agency/sintra', '_blank')}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right side - Images */}
          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col items-center space-y-6">
              <a 
                href="https://www.10xsocialmedia.agency/sintra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <img 
                  src="/lovable-uploads/30aec08f-8570-42c8-ad55-434d4b25c17b.png" 
                  alt="AI Robot Characters" 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto hover:scale-105 transition-transform duration-300 cursor-pointer animate-float" 
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-12 sm:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-400">Always Working</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">99.9%</div>
              <div className="text-sm sm:text-base text-gray-400">Accuracy Rate</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">50K+</div>
              <div className="text-sm sm:text-base text-gray-400">Tasks Completed</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">0</div>
              <div className="text-sm sm:text-base text-gray-400">Sick Days</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
