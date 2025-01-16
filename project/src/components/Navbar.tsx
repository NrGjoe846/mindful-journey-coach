import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white/5 backdrop-blur-md z-50 border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white">Life Coach</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/services') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/blog') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              Contact
            </Link>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.location.href = '/booking'}
            >
              Book a Call
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col gap-4">
              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/services') ? 'text-primary' : 'text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/blog') ? 'text-primary' : 'text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive('/contact') ? 'text-primary' : 'text-gray-300'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button 
                variant="default" 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = '/booking'}
              >
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};