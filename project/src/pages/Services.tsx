import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C1F3C]">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coaching solutions designed to help you achieve your goals and transform your life.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "1:1 Coaching",
                  description: "Personalized coaching sessions tailored to your specific needs and goals.",
                  price: "$199/session",
                  image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
                },
                {
                  title: "Group Coaching",
                  description: "Interactive group sessions for collaborative learning and networking.",
                  price: "$99/session",
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2940&auto=format&fit=crop"
                },
                {
                  title: "Career Development",
                  description: "Strategic guidance to advance your career and achieve professional success.",
                  price: "$249/session",
                  image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2940&auto=format&fit=crop"
                },
                {
                  title: "Life Balance",
                  description: "Find harmony between work, personal life, and well-being.",
                  price: "$179/session",
                  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop"
                },
                {
                  title: "Business Coaching",
                  description: "Expert guidance for entrepreneurs and business leaders.",
                  price: "$299/session",
                  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop"
                },
                {
                  title: "Mindfulness Training",
                  description: "Learn techniques for stress management and mental clarity.",
                  price: "$149/session",
                  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-bold">{service.price}</span>
                      <Button 
                        onClick={() => navigate('/booking')}
                        className="bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
