import { Globe, Facebook, Users, FileText, MessageSquare, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const LearnBusiness = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const connectionPoints = [
    {
      id: 1,
      title: "Brand website",
      subtitle: "eCommerce, 2+ pages",
      icon: Globe,
      position: "top-center",
      className: "top-4 sm:top-8 left-1/2 transform -translate-x-1/2"
    },
    {
      id: 2,
      title: "Facebook Insights", 
      subtitle: "Trustpilot, 43 reviews",
      icon: Facebook,
      position: "left",
      className: "top-32 sm:top-1/4 left-4 sm:left-8"
    },
    {
      id: 3,
      title: "Team Photos",
      subtitle: "Company retreat 2024",
      icon: Users,
      position: "right", 
      className: "top-32 sm:top-1/4 right-4 sm:right-8"
    },
    {
      id: 4,
      title: "Services pricing",
      subtitle: "sintra.ai, +2 more",
      icon: DollarSign,
      position: "bottom-left",
      className: "bottom-32 sm:bottom-1/4 left-4 sm:left-8"
    },
    {
      id: 5,
      title: "Team handbook",
      subtitle: "18 pages, guidelines",
      icon: FileText,
      position: "bottom-left-inner",
      className: "bottom-4 sm:bottom-8 left-4 sm:left-8"
    },
    {
      id: 6,
      title: "Conversation with Julia",
      subtitle: "Follow-up scheduled",
      icon: MessageSquare,
      position: "bottom-right",
      className: "bottom-32 sm:bottom-1/4 right-4 sm:right-8"
    },
    {
      id: 7,
      title: "Client proposal",
      subtitle: "$25k budget",
      icon: FileText,
      position: "bottom-right-inner",
      className: "bottom-4 sm:bottom-8 right-4 sm:right-8"
    }
  ];

  return (
    <section ref={ref} className="hidden sm:block py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${isVisible ? 'animate-slide-right' : 'opacity-0 translate-x-20'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300">They learn your business.</span>
            <br />
            <span className="text-gray-400 inline-block hover:text-white transition-colors duration-300">Just like real employees.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Answer questions about your brand, add files, instructions, and your website for more
            <br className="hidden sm:block" />
            unique results. The more information they have, the better the outcome.
          </p>
        </div>

        {/* Interactive diagram */}
        <div className={`relative h-[700px] sm:h-[700px] lg:h-[800px] max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-left' : 'opacity-0 -translate-x-20'}`}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            <path d="M 500 80 Q 500 200 500 350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 120 200 Q 300 250 500 350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 880 200 Q 700 250 500 350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 120 500 Q 300 450 500 350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 120 620 Q 300 500 500 350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 880 500 Q 700 450 500 350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 880 620 Q 700 500 500 350" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
          </svg>

          {/* Information cards */}
          {connectionPoints.map((point, index) => (
            <div
              key={point.id}
              className={`absolute ${point.className}`}
              style={{ zIndex: 2 }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 p-3 sm:p-4 min-w-[160px] sm:min-w-[240px] hover:bg-gray-800/80 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 group">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                    <point.icon className="w-3 h-3 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-xs sm:text-sm group-hover:text-purple-300 transition-colors duration-300">{point.title}</div>
                    <div className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">{point.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Central AI character */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 3 }}>
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
              
              <a 
                href="https://playosinc.pxf.io/sintraaustralia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <img 
                  src="/lovable-uploads/75d9a478-e8c1-44fd-b80b-e735216ec05c.png" 
                  alt="Robot Astronaut" 
                  className="w-24 sm:w-48 md:w-64 h-auto hover:scale-110 transition-all duration-500 cursor-pointer" 
                />
              </a>
              
              {/* Connection points */}
              <div className="hidden sm:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="hidden sm:block absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="hidden sm:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="hidden sm:block absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
              <div className="hidden sm:block absolute bottom-0 right-1/4 transform translate-x-1/2 translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
