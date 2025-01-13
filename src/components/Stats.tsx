import { Users, BookOpen, Award } from "lucide-react";

const stats = [
  {
    value: "27k+",
    label: "Clients",
    icon: Users,
  },
  {
    value: "20k+",
    label: "Sessions",
    icon: BookOpen,
  },
  {
    value: "7k+",
    label: "Reviews",
    icon: Award,
  },
];

export const Stats = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <stat.icon className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};