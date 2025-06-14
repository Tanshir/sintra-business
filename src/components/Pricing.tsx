
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams trying AI employees",
    features: [
      "1 AI employee",
      "Basic task automation",
      "Email support",
      "Standard integrations",
      "Performance analytics"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$199",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "5 AI employees",
      "Advanced automation",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
      "Team collaboration tools"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited AI employees",
      "Custom AI training",
      "Dedicated support",
      "On-premise deployment",
      "Custom workflows",
      "SLA guarantee"
    ],
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your new team
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}with infinite{" "}
            </span>
            knowledge
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the right plan to build your AI workforce. Scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-500/50 scale-105' 
                  : 'bg-gray-900/50 border-gray-700 hover:border-purple-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Additional info section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Employee of the month, every month.
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Your AI employees consistently deliver outstanding performance, never take sick days, and continuously improve their skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
