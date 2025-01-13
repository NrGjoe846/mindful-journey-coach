import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-secondary to-white pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-50"
          poster="/photo-1649972904349-6e44c42644a7"
        >
          <source src="https://player.vimeo.com/external/459389137.sd.mp4?s=956afb3529c59a559f29f19afd06366f7b4a36f3&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Transform Your Life With Professional Coaching
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl drop-shadow">
              Unlock your full potential and achieve your dreams with personalized coaching sessions designed to empower your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="text-lg bg-primary hover:bg-primary/90">
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};