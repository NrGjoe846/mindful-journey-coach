import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Contact = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Contact Us</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with us for any questions or inquiries about our coaching services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl"
              >
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-white">First Name</label>
                      <Input className="bg-white/5 border-white/10 text-white" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-white">Last Name</label>
                      <Input className="bg-white/5 border-white/10 text-white" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white">Email</label>
                    <Input className="bg-white/5 border-white/10 text-white" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white">Message</label>
                    <Textarea 
                      className="bg-white/5 border-white/10 text-white min-h-[150px]" 
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Email",
                  info: "contact@example.com",
                  description: "We'll respond within 24 hours"
                },
                {
                  title: "Phone",
                  info: "+1 (555) 123-4567",
                  description: "Monday to Friday, 9am to 6pm"
                },
                {
                  title: "Office",
                  info: "123 Coaching Street",
                  description: "New York, NY 10001"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-primary font-bold mb-2">{item.info}</p>
                  <p className="text-gray-300">{item.description}</p>
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

export default Contact;