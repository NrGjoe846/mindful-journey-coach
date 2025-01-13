import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { PopularCoaching } from "@/components/PopularCoaching";
import { TopCoaches } from "@/components/TopCoaches";
import { ExploreCategories } from "@/components/ExploreCategories";
import { JoinCommunity } from "@/components/JoinCommunity";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C1F3C]">
      <Navbar />
      <Hero />
      <Stats />
      <PopularCoaching />
      <TopCoaches />
      <ExploreCategories />
      <JoinCommunity />
      <Footer />
    </div>
  );
};

export default Index;