
import { Bot, Zap, Shield, BarChart3, Code, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Automate repetitive tasks and workflows with intelligent AI agents that learn and adapt."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process data and generate insights in milliseconds with our optimized AI infrastructure."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance with global standards."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your business with AI-powered analytics and predictive modeling."
  },
  {
    icon: Code,
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows through our robust API."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together with your team using shared AI models and collaborative workspaces."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Modern Business
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform your business with AI-powered solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:animate-float">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
