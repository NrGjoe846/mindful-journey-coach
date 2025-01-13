import { Lightbulb, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Lightbulb,
    title: "Personal Growth",
    description: "One-on-one coaching sessions tailored to your unique journey and goals.",
    price: "$199/session",
    image: "/photo-1581091226825-a6a2a5aee158"
  },
  {
    icon: Target,
    title: "Career Development",
    description: "Strategic guidance to advance your career and achieve professional success.",
    price: "$249/session",
    image: "/photo-1649972904349-6e44c42644a7"
  },
  {
    icon: Users,
    title: "Group Coaching",
    description: "Interactive group sessions for collaborative learning and networking.",
    price: "$99/person",
    image: "/photo-1721322800607-8c38375eef04"
  }
];

export const FeaturedServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your life with our specialized coaching programs designed to empower your journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <feature.icon className="w-12 h-12 text-white absolute bottom-4 right-4" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <p className="text-lg font-semibold text-primary mb-6">{feature.price}</p>
              <Button variant="outline" className="w-full">Book Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};