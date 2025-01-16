import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { motion } from "framer-motion";

const Booking = () => {
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Book a Session</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Take the first step towards achieving your goals by booking a coaching session.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form */}
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
                    <label className="text-white">Phone</label>
                    <Input className="bg-white/5 border-white/10 text-white" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white">Service Type</label>
                    <Select>
                      <option value="">Select a service</option>
                      <option value="1:1">1:1 Coaching</option>
                      <option value="group">Group Coaching</option>
                      <option value="career">Career Development</option>
                      <option value="life">Life Balance</option>
                      <option value="business">Business Coaching</option>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-white">Additional Notes</label>
                    <Textarea 
                      className="bg-white/5 border-white/10 text-white min-h-[150px]" 
                      placeholder="Tell us more about what you're looking to achieve..."
                    />
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Book Session
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;