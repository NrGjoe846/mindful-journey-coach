import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const JoinCommunity = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Join Our Coaching Community
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with top coaches, access exclusive resources, and transform your life
            with our supportive community.
          </p>
          <Button 
            size="lg" 
            className="animate-bounce"
            onClick={() => navigate('/contact')}
          >
            Join Community
          </Button>
        </div>
      </div>
    </section>
  );
};