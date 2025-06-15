import { Globe, Facebook, Users, FileText, MessageSquare, DollarSign } from "lucide-react";

export const LearnBusiness = () => {
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
      className: "top-1/4 sm:top-1/3 left-2 sm:left-8"
    },
    {
      id: 3,
      title: "Team Photos",
      subtitle: "Company retreat 2024",
      icon: Users,
      position: "right",
      className: "top-1/4 sm:top-1/3 right-2 sm:right-8"
    },
    {
      id: 4,
      title: "Services pricing",
      subtitle: "sintra.ai, +2 more",
      icon: DollarSign,
      position: "bottom-left",
      className: "bottom-1/4 sm:bottom-1/3 left-4 sm:left-16"
    },
    {
      id: 5,
      title: "Team handbook",
      subtitle: "18 pages, guidelines",
      icon: FileText,
      position: "bottom-left-inner",
      className: "bottom-4 sm:bottom-8 left-2 sm:left-8"
    },
    {
      id: 6,
      title: "Conversation with Julia",
      subtitle: "Follow-up scheduled",
      icon: MessageSquare,
      position: "bottom-right",
      className: "bottom-1/4 sm:bottom-1/3 right-4 sm:right-16"
    },
    {
      id: 7,
      title: "Client proposal",
      subtitle: "$25k budget",
      icon: FileText,
      position: "bottom-right-inner",
      className: "bottom-4 sm:bottom-8 right-2 sm:right-8"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            They learn your business.
            <br />
            <span className="text-gray-400">Just like real employees.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Answer questions about your brand, add files, instructions, and your website for more
            <br className="hidden sm:block" />
            unique results. The more information they have, the better the outcome.
          </p>
        </div>

        {/* Interactive diagram */}
        <div className="relative h-[600px] sm:h-[700px] lg:h-[800px] max-w-6xl mx-auto">
          {/* Connection lines - rendered as SVG for better control */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Connection lines to center */}
            <path d="M 300 100 Q 400 200 500 400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 100 250 Q 200 300 500 400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 900 250 Q 800 300 500 400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 200 550 Q 300 500 500 400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 150 650 Q 300 550 500 400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 800 550 Q 700 500 500 400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
            <path d="M 850 650 Q 700 550 500 400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" />
          </svg>

          {/* Information cards */}
          {connectionPoints.map((point) => (
            <div
              key={point.id}
              className={`absolute ${point.className} animate-fade-in`}
              style={{ zIndex: 2 }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 p-3 sm:p-4 min-w-[180px] sm:min-w-[240px] hover:bg-gray-800/80 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-xs sm:text-sm">{point.title}</div>
                    <div className="text-gray-400 text-xs">{point.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Central AI character */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 3 }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl scale-150"></div>
              
              {/* AI Character container with robot astronaut */}
              <div className="relative flex items-center justify-center">
                <a 
                  href="https://www.10xsocialmedia.agency/sintra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img 
                    src="/lovable-uploads/75d9a478-e8c1-44fd-b80b-e735216ec05c.png" 
                    alt="Robot Astronaut" 
                    className="w-32 sm:w-48 md:w-64 h-auto animate-float hover:scale-105 transition-transform duration-300 cursor-pointer" 
                    style={{ animationDelay: '2s' }}
                  />
                </a>
              </div>
              
              {/* Connection points - hidden on mobile */}
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
