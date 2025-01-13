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
                Discover the perfect coaching program to help you achieve your goals.
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
                  image: "/photo-1649972904349-6e44c42644a7"
                },
                {
                  title: "Group Coaching",
                  description: "Interactive group sessions for collaborative learning and networking.",
                  price: "$99/session",
                  image: "/photo-1721322800607-8c38375eef04"
                },
                {
                  title: "Career Development",
                  description: "Strategic guidance to advance your career and achieve professional success.",
                  price: "$249/session",
                  image: "/photo-1581091226825-a6a2a5aee158"
                },
                {
                  title: "Life Balance",
                  description: "Find harmony between work, personal life, and well-being.",
                  price: "$179/session",
                  image: "/photo-1649972904349-6e44c42644a7"
                },
                {
                  title: "Business Coaching",
                  description: "Expert guidance for entrepreneurs and business leaders.",
                  price: "$299/session",
                  image: "/photo-1721322800607-8c38375eef04"
                },
                {
                  title: "Mindfulness Training",
                  description: "Learn techniques for stress management and mental clarity.",
                  price: "$149/session",
                  image: "/photo-1581091226825-a6a2a5aee158"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
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
                        className="bg-primary hover:bg-primary/90"
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

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12 text-center backdrop-blur-sm"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Life?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your free consultation today and take the first step towards achieving your goals.
              </p>
              <Button 
                onClick={() => navigate('/booking')}
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;