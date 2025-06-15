
import { useState } from "react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/3d8ba123-789d-4596-93a2-d9ecb67e88a0.png" 
              alt="10X AI Business Solutions" 
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-white font-bold text-xl">10X AI Business Solutions</span>
          </div>
        </div>
      </div>
    </header>
  );
};
