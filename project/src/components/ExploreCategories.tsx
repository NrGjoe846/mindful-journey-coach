const categories = [
  {
    title: "Career Development",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2940&auto=format&fit=crop",
    count: "50 Programs",
  },
  {
    title: "Personal Growth",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop",
    count: "45 Programs",
  },
  {
    title: "Leadership",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
    count: "35 Programs",
  },
  {
    title: "Life Balance",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
    count: "40 Programs",
  },
  {
    title: "Business Coaching",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2940&auto=format&fit=crop",
    count: "30 Programs",
  },
  {
    title: "Mindfulness",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2931&auto=format&fit=crop",
    count: "25 Programs",
  },
];

export const ExploreCategories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center animate-fadeIn">
          Explore Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform transition-all duration-300 group-hover:from-primary/80">
                <h3 className="text-xl font-bold text-white mb-2 transform transition-all duration-300 group-hover:translate-y-0 translate-y-4">{category.title}</h3>
                <p className="text-gray-300 transform transition-all duration-300 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};