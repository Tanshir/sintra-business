import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/lovable-uploads/3d8ba123-789d-4596-93a2-d9ecb67e88a0.png" 
              alt="10X AI Business Solutions" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg" 
            />
            <span className="text-white font-bold text-lg sm:text-xl">
              Sintra Business
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-white hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className="text-white hover:text-primary transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};