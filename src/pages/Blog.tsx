import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C1F3C]">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Our Blog</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Insights, tips, and stories about personal development and coaching.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Finding Your Purpose",
                  excerpt: "Discover the steps to uncover your life's true purpose and passion.",
                  date: "March 15, 2024",
                  image: "/photo-1581091226825-a6a2a5aee158"
                },
                {
                  title: "Building Better Habits",
                  excerpt: "Learn how to create and maintain positive habits that last.",
                  date: "March 12, 2024",
                  image: "/photo-1649972904349-6e44c42644a7"
                },
                {
                  title: "Mindfulness at Work",
                  excerpt: "Practical tips for staying present and focused in your professional life.",
                  date: "March 10, 2024",
                  image: "/photo-1721322800607-8c38375eef04"
                }
              ].map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/20 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-primary text-sm">{post.date}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3">{post.title}</h3>
                    <p className="text-gray-300">{post.excerpt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;