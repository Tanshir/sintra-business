
import { Bot, Clock, Zap, Shield, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Co-workers",
    description: "Deploy AI employees that integrate seamlessly with your team and handle complex tasks autonomously."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Your AI workforce never sleeps, ensuring continuous productivity around the clock."
  },
  {
    icon: Zap,
    title: "Instant Scaling",
    description: "Scale your workforce instantly based on demand without recruitment delays or training time."
  },
  {
    icon: Shield,
    title: "Enterprise Ready",
    description: "Built with enterprise-grade security and compliance to protect your business data."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track productivity, monitor performance, and optimize your AI workforce in real-time."
  },
  {
    icon: Users,
    title: "Team Integration",
    description: "AI employees work alongside your human team, enhancing collaboration and productivity."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Meet Your New
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}AI Workforce
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Transform your business with AI employees that work tirelessly to grow your company
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:animate-float">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
