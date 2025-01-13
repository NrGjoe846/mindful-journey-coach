import { Lightbulb, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Lightbulb,
    title: "Personal Growth",
    description: "One-on-one coaching sessions tailored to your unique journey and goals.",
    price: "$199/session"
  },
  {
    icon: Target,
    title: "Career Development",
    description: "Strategic guidance to advance your career and achieve professional success.",
    price: "$249/session"
  },
  {
    icon: Users,
    title: "Group Coaching",
    description: "Interactive group sessions for collaborative learning and networking.",
    price: "$99/person"
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
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
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