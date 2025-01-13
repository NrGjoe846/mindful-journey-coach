const categories = [
  {
    title: "Career Development",
    image: "/placeholder.svg",
    count: "50 Programs",
  },
  {
    title: "Personal Growth",
    image: "/placeholder.svg",
    count: "45 Programs",
  },
  {
    title: "Leadership",
    image: "/placeholder.svg",
    count: "35 Programs",
  },
  {
    title: "Life Balance",
    image: "/placeholder.svg",
    count: "40 Programs",
  },
  {
    title: "Business Coaching",
    image: "/placeholder.svg",
    count: "30 Programs",
  },
  {
    title: "Mindfulness",
    image: "/placeholder.svg",
    count: "25 Programs",
  },
];

export const ExploreCategories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
          Explore Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};