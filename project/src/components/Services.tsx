import { Lightbulb, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Lightbulb,
    title: "Personal Development",
    description: "Discover your strengths and overcome limitations with personalized coaching sessions.",
  },
  {
    icon: Target,
    title: "Goal Achievement",
    description: "Create actionable plans and stay accountable to reach your personal and professional goals.",
  },
  {
    icon: Users,
    title: "Group Coaching",
    description: "Join like-minded individuals in transformative group sessions focused on growth.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the coaching program that best fits your needs and start your journey to success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fadeIn"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button variant="outline" className="w-full">Learn More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};