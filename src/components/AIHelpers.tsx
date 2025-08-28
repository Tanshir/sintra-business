
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const aiHelpers = [
  {
    name: "Emmie",
    role: "Email Marketing Specialist",
    description: "From crafting engaging emails to generating effective win-back flows, Emmie uses her AI-powered solutions to turn your subscriber list into revenue.",
    image: "/lovable-uploads/08846ad7-808f-48b3-955c-1775f1340046.png"
  },
  {
    name: "Gigi",
    role: "Personal Growth Coach", 
    description: "Boost productivity with AI—whether you need help planning meals, organizing study sessions, or building workout routines, Gigi is here to support your journey to a better self.",
    image: "/lovable-uploads/5580b1ec-5bc4-45c7-90be-5b2392dc4a60.png"
  },
  {
    name: "Penn",
    role: "Copywriter",
    description: "Dedicated to writing compelling copy for your ads, blog posts, websites, advertorials and other marketing campaigns that convert readers into customers.",
    image: "/lovable-uploads/37eeee79-c761-44c5-94cd-92294d63272d.png"
  },
  {
    name: "Scouty",
    role: "Recruiter",
    description: "Turning hiring challenges into opportunities, crafting magnetic job posts, and guiding smooth team onboarding. For any recruitment-related topics, this is your go-to employee to ask AI questions.",
    image: "/lovable-uploads/08846ad7-808f-48b3-955c-1775f1340046.png"
  },
  {
    name: "Seomi", 
    role: "SEO Specialist",
    description: "Streamline business processes with Seomi's proven SEO strategies, SEO-optimized blog posts, and AI-powered solutions to boost your website rankings.",
    image: "/lovable-uploads/5580b1ec-5bc4-45c7-90be-5b2392dc4a60.png"
  },
  {
    name: "Soshie",
    role: "Social Media Manager", 
    description: "Boost Productivity with AI social media manager by using business automation tools—generate content, plan strategies, schedule posts, find trends, and more.",
    image: "/lovable-uploads/37eeee79-c761-44c5-94cd-92294d63272d.png"
  },
  {
    name: "Vizzy",
    role: "Virtual Assistant",
    description: "A trustworthy AI for business owners and busy entrepreneurs to handle calendars, schedule meetings, plan trips, or simply ask AI questions about daily challenges.",
    image: "/lovable-uploads/08846ad7-808f-48b3-955c-1775f1340046.png"
  },
  {
    name: "Milli",
    role: "Sales Manager",
    description: "Milli uses your business insights to craft compelling cold call scripts, design persuasive cold emails, and build pitches that help you close deals with confidence.",
    image: "/lovable-uploads/5580b1ec-5bc4-45c7-90be-5b2392dc4a60.png"
  }
];

export const AIHelpers = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-black overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slide-up">
            <span className="inline-block">Sintra.</span>{" "}
            <span className="inline-block">World's first AI helpers,</span><br />
            <span className="inline-block">personalised for your business.</span><br />
            <span className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Making work feel like play.
            </span>
          </h2>
        </div>

        <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {aiHelpers.map((helper, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <a 
                    href="https://playosinc.pxf.io/sintraaustralia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center hover:scale-105 transition-all duration-300 ease-out cursor-pointer group"
                  >
                    <div className="relative mb-6 transform transition-all duration-300">
                      <div className="w-80 h-80 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-6 backdrop-blur-sm border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                        <img 
                          src={helper.image}
                          alt={helper.name}
                          className="w-full h-full object-cover rounded-2xl transition-all duration-300 group-hover:brightness-110"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-300 group-hover:text-purple-300">
                      {helper.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed transition-all duration-300 group-hover:text-gray-300">
                      {helper.role}. {helper.description}
                    </p>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 bg-gray-800/80 border-gray-600 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 bg-gray-800/80 border-gray-600 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
