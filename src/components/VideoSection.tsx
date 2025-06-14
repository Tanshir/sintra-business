
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const VideoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Employee
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}Visualization
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our AI employees work in real-time to transform your business operations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-gray-700 bg-gray-900/50 backdrop-blur-sm">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/Bc2q06VhKIs"
                title="AI Employee Visualization"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};
