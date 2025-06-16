import { useState } from "react";
export const Header = () => {
  return <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-start">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <img src="/lovable-uploads/3d8ba123-789d-4596-93a2-d9ecb67e88a0.png" alt="10X AI Business Solutions" className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" />
            <span className="text-white font-bold text-lg sm:text-xl">
              <span className="hidden sm:inline">10x Social Media Agency</span>
              <span className="sm:hidden">10X AI Broker Tools</span>
            </span>
          </div>
        </div>
      </div>
    </header>;
};