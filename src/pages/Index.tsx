import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { FeaturedServices } from "@/components/FeaturedServices";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Index;