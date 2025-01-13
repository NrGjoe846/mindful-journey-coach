const coaches = [
  {
    name: "Sarah Johnson",
    specialty: "Leadership Coach",
    image: "/photo-1649972904349-6e44c42644a7",
    rating: "4.9",
  },
  {
    name: "Michael Chen",
    specialty: "Career Coach",
    image: "/photo-1581091226825-a6a2a5aee158",
    rating: "4.8",
  },
  {
    name: "Emma Davis",
    specialty: "Life Coach",
    image: "/photo-1721322800607-8c38375eef04",
    rating: "4.7",
  },
  {
    name: "James Wilson",
    specialty: "Business Coach",
    image: "/photo-1649972904349-6e44c42644a7",
    rating: "4.9",
  },
];

export const TopCoaches = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
          Top Coaches
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-xl p-4 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-white/15 cursor-pointer"
            >
              <img
                src={coach.image}
                alt={coach.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary"
              />
              <h3 className="text-xl font-bold text-white text-center mb-2">{coach.name}</h3>
              <p className="text-gray-400 text-center mb-2">{coach.specialty}</p>
              <p className="text-primary text-center">⭐ {coach.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
