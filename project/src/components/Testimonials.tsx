import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this life coach has been transformative. I've achieved goals I never thought possible.",
    author: "Sarah Johnson",
    title: "Entrepreneur",
  },
  {
    quote: "The coaching sessions provided me with clarity and direction. Highly recommended!",
    author: "Michael Chen",
    title: "Marketing Director",
  },
  {
    quote: "A life-changing experience that helped me overcome my limitations.",
    author: "Emma Davis",
    title: "Creative Professional",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their coaching experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg animate-fadeIn">
            <Quote className="w-12 h-12 text-primary mb-6" />
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              {testimonials[currentIndex].quote}
            </p>
            <div>
              <p className="font-bold">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600">{testimonials[currentIndex].title}</p>
            </div>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};