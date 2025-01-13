import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Life With Professional Coaching
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Unlock your full potential and achieve your dreams with personalized coaching sessions designed to empower your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-lg">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fadeIn">
            <img 
              src="/placeholder.svg" 
              alt="Life Coach"
              className="w-full max-w-lg mx-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};