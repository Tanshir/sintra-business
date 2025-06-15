import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/3d8ba123-789d-4596-93a2-d9ecb67e88a0.png" alt="10X AI Business Solutions" className="h-8 w-8 rounded-lg" />
              <span className="text-white font-bold text-xl">
                10X AI
              </span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Transforming businesses worldwide with cutting-edge AI technology. 
              Automate processes, gain insights, and scale like never before.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@10xai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">AI Workforce</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Automation Suite</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Analytics Platform</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Integration Tools</a></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Enterprise</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Small Business</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Startups</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Developers</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">© 2025 10X AI Business Solutions. All rights reserved.</p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};