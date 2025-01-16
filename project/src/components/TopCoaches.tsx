const coaches = [
  {
    name: "Sarah Johnson",
    specialty: "Leadership Coach",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2938&auto=format&fit=crop",
    rating: "4.9",
  },
  {
    name: "Michael Chen",
    specialty: "Career Coach",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2944&auto=format&fit=crop",
    rating: "4.8",
  },
  {
    name: "Emma Davis",
    specialty: "Life Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop",
    rating: "4.7",
  },
  {
    name: "James Wilson",
    specialty: "Business Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
    rating: "4.9",
  },
];

export const TopCoaches = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center animate-fadeIn">
          Top Coaches
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer group"
            >
              <div className="relative mb-4">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-24 h-24 rounded-full mx-auto border-2 border-primary object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">{coach.name}</h3>
              <p className="text-gray-400 text-center mb-2">{coach.specialty}</p>
              <p className="text-primary text-center flex items-center justify-center gap-1">
                ⭐ {coach.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};