import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const popularPrograms = [
  {
    title: "Leadership Mastery",
    image: "/placeholder.svg",
    price: "$499",
    author: "John Smith",
    rating: "4.9",
  },
  {
    title: "Career Transformation",
    image: "/placeholder.svg",
    price: "$399",
    author: "Sarah Johnson",
    rating: "4.8",
  },
  {
    title: "Life Balance",
    image: "/placeholder.svg",
    price: "$299",
    author: "Mike Wilson",
    rating: "4.7",
  },
  {
    title: "Business Growth",
    image: "/placeholder.svg",
    price: "$599",
    author: "Emma Davis",
    rating: "4.9",
  },
];

export const PopularCoaching = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
          Popular This Week
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {popularPrograms.map((program, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative group">
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-white/15">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-gray-400 mb-2">by {program.author}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold">{program.price}</span>
                      <Button variant="secondary" size="sm">
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