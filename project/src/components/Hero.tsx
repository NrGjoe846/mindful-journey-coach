import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoplayPlugin from "embla-carousel-autoplay";
import { useRef } from "react";

const backgroundImages = [
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop"
];

export const Hero = () => {
  const navigate = useNavigate();
  const plugin = useRef(AutoplayPlugin({ delay: 4000, stopOnInteraction: false }));

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-secondary/10 to-primary/10 pt-16 overflow-hidden">
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
            {backgroundImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
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
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg"
            >
              Transform Your Life With Professional Coaching
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
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
                className="text-lg bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                onClick={() => navigate('/booking')}
              >
                <span className="relative z-10">Book Free Consultation</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg bg-white/10 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-white/30 text-white group relative overflow-hidden"
                onClick={() => navigate('/services')}
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative w-full max-w-lg"
          >
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
