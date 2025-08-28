
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { VideoModal } from "./VideoModal";

export const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-[slideInLeft_1s_ease-out] text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.2s_both]">Your employees</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent inline-block animate-[slideInRight_1s_ease-out_0.4s_both] hover:scale-105 transition-transform duration-300">
                that never sleep,
              </span>
              <br />
              <span className="inline-block animate-[fadeInUp_0.8s_ease-out_0.6s_both]">never complain</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-[fadeInUp_1s_ease-out_0.8s_both]">
              Meet your AI workforce - employees that work 24/7, handle any task, and scale with your business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start animate-[fadeInUp_1s_ease-out_1s_both]">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 animate-pulse hover:animate-none group" 
                onClick={() => window.open('https://playosinc.pxf.io/sintraaustralia', '_blank')}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-purple-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 group" 
                onClick={() => setVideoOpen(true)}
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right side - Images */}
          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl animate-pulse"></div>
            
            <div className="relative z-10 flex flex-col items-center space-y-6 animate-[slideInRight_1s_ease-out]">
              <a href="https://playosinc.pxf.io/sintraaustralia" target="_blank" rel="noopener noreferrer" className="block">
                <img 
                  src="/lovable-uploads/30aec08f-8570-42c8-ad55-434d4b25c17b.png" 
                  alt="AI Robot Characters" 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto hover:scale-110 transition-all duration-500 cursor-pointer animate-breathe hover:animate-none" 
                />
              </a>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-12 sm:mt-20 animate-[fadeInUp_1s_ease-out_1.2s_both]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-[slideInUp_0.8s_ease-out_1.4s_both]">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 animate-pulse">24/7</div>
              <div className="text-sm sm:text-base text-gray-400">Always Working</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-[slideInUp_0.8s_ease-out_1.6s_both]">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 animate-pulse">99.9%</div>
              <div className="text-sm sm:text-base text-gray-400">Accuracy Rate</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-[slideInUp_0.8s_ease-out_1.8s_both]">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 animate-pulse">50K+</div>
              <div className="text-sm sm:text-base text-gray-400">Tasks Completed</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700 p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 animate-[slideInUp_0.8s_ease-out_2s_both]">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 animate-pulse">0</div>
              <div className="text-sm sm:text-base text-gray-400">Sick Days</div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </section>
  );
};
