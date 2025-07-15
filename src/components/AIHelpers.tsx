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
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Sintra.
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            World's first AI helpers, personalized for your business. Making work feel like play.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {aiHelpers.map((helper, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border-gray-700/50 backdrop-blur-sm h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="relative mb-6 mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                        <img 
                          src={helper.image}
                          alt={helper.name}
                          className="relative z-10 w-32 h-32 object-cover rounded-2xl mx-auto"
                        />
                      </div>
                      
                      <div className="text-center flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {helper.name}
                        </h3>
                        <p className="text-purple-300 font-semibold mb-4">
                          {helper.role}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed flex-1">
                          {helper.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700/50" />
            <CarouselNext className="bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700/50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};