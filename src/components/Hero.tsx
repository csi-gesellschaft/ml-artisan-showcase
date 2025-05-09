
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-white to-portfolio-50">
      <div className="container-custom flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            <span className="gradient-text">Machine Learning</span> Engineer & Data Scientist
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:pr-12">
            Building intelligent solutions with data and algorithms that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-portfolio-700 hover:bg-portfolio-800"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-portfolio-600 text-portfolio-700 hover:bg-portfolio-50"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <div className="bg-accent-purple-500 text-white p-3 rounded-full">
                ML
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button 
          variant="ghost" 
          size="icon" 
          className="animate-bounce" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
