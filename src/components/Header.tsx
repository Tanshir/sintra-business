
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 animate-slide-up">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a 
            href="https://playosinc.pxf.io/sintraaustralia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-all duration-300 group"
          >
            <img 
              src="/lovable-uploads/3d8ba123-789d-4596-93a2-d9ecb67e88a0.png" 
              alt="10X AI Business Solutions" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg transition-all duration-300 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-purple-500/25" 
            />
            <span className="text-white font-bold text-lg sm:text-xl transition-all duration-300 group-hover:text-purple-300">
              Sintra Business
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
