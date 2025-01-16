import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import AutoplayPlugin from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

const popularPrograms = [
  {
    title: "Leadership Mastery",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
    price: "$499",
    author: "John Smith",
    rating: "4.9",
  },
  {
    title: "Career Transformation",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    price: "$399",
    author: "Sarah Johnson",
    rating: "4.8",
  },
  {
    title: "Life Balance",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop",
    price: "$299",
    author: "Mike Wilson",
    rating: "4.7",
  },
  {
    title: "Business Growth",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop",
    price: "$599",
    author: "Emma Davis",
    rating: "4.9",
  },
];

export const PopularCoaching = () => {
  const navigate = useNavigate();
  const plugin = useRef(
    AutoplayPlugin({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center animate-fadeIn">
          Popular This Week
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {popularPrograms.map((program, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative group">
                  <div className="bg-white/10 rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 mt-4">{program.title}</h3>
                    <p className="text-gray-400 mb-2">by {program.author}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold">{program.price}</span>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="transform hover:scale-105 transition-all duration-300"
                        onClick={() => navigate('/booking')}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};