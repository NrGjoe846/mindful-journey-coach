import { Users, BookOpen, Award, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    value: "27k+",
    endValue: 27000,
    label: "Clients",
    icon: Users,
  },
  {
    value: "20k+",
    endValue: 20000,
    label: "Sessions",
    icon: BookOpen,
  },
  {
    value: "7k+",
    endValue: 7000,
    label: "Reviews",
    icon: Award,
  },
  {
    value: "95%",
    endValue: 95,
    label: "Success Rate",
    icon: TrendingUp,
  }
];

export const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000; // Animation duration in milliseconds
        const steps = 60; // Number of steps in the animation
        const stepValue = stat.endValue / steps;
        let currentStep = 0;

        const interval = setInterval(() => {
          if (currentStep < steps) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.min(
                Math.round(stepValue * currentStep),
                stat.endValue
              );
              return newCounts;
            });
            currentStep++;
          } else {
            clearInterval(interval);
          }
        }, duration / steps);

        return () => clearInterval(interval);
      });
    }
  }, [isInView]);

  return (
    <section id="stats-section" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-2">
                  {stat.label === "Success Rate" 
                    ? `${counts[index]}%`
                    : counts[index].toLocaleString() + "+"
                  }
                </p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
