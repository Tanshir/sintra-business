
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/3d8ba123-789d-4596-93a2-d9ecb67e88a0.png" 
                alt="10X AI Business Solutions" 
                className="h-6 w-6 sm:h-8 sm:w-8 rounded-lg" 
              />
              <span className="text-white font-bold text-lg sm:text-xl">
                <span className="hidden sm:inline">10X AI Business Solutions</span>
                <span className="sm:hidden">10X AI</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Transform your business with cutting-edge AI technology. 
              Automate processes, gain insights, and scale like never before.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Documentation</a></li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">© 2025 10X AI Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
