import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoplayPlugin from "embla-carousel-autoplay";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

const backgroundImages = {
  desktop: [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2940&auto=format&fit=crop"
  ],
  mobile: [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1440&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1440&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1440&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1440&auto=format&fit=crop"
  ]
};

export const Hero = () => {
  const navigate = useNavigate();
  const plugin = useRef(AutoplayPlugin({ delay: 4000, stopOnInteraction: false }));

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('stats-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[100svh] relative flex items-center justify-center bg-white pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="h-full">
            {backgroundImages.desktop.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <picture>
                    <source
                      media="(max-width: 768px)"
                      srcSet={backgroundImages.mobile[index]}
                    />
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-white/80" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900"
            >
              Transform Your Life With Professional Coaching
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Unlock your full potential and achieve your dreams with personalized coaching sessions designed to empower your journey.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button 
                size="lg" 
                className="text-lg bg-gray-900 hover:bg-gray-800 text-white transform hover:scale-105 transition-all duration-300 group relative overflow-hidden shadow-lg"
                onClick={() => navigate('/booking')}
              >
                <span className="relative z-10">Book Free Consultation</span>
                <div className="absolute inset-0 bg-gray-700 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg border-gray-900 text-gray-900 hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/services')}
              >
                <span className="relative z-10">Learn More</span>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative w-full max-w-lg"
          >
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1440&auto=format&fit=crop"
                alt="Coach"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Start Your Journey Today</h3>
                <p className="text-gray-600">Book your first session and take the first step towards transformation.</p>
                <Button 
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  onClick={() => navigate('/booking')}
                >
                  Schedule Now
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </motion.button>
      </div>
    </div>
  );
};
