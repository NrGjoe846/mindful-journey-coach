import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80" : "bg-white/5"
      } backdrop-blur-md border-b border-white/10`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-white flex items-center gap-2">
            <img src="/favicon.ico" alt="Logo" className="w-8 h-8" />
            Life Coach
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive('/about') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              {isActive('/about') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-underline"
                />
              )}
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-gray-300 hover:text-primary flex items-center gap-1">
                Services <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/services#personal">Personal Coaching</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/services#business">Business Coaching</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/services#group">Group Sessions</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive('/blog') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              {isActive('/blog') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-underline"
                />
              )}
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary relative ${
                isActive('/contact') ? 'text-primary' : 'text-gray-300'
              }`}
            >
              {isActive('/contact') && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-underline"
                />
              )}
              Contact
            </Link>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
              onClick={() => window.location.href = '/booking'}
            >
              Book a Call
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black/20 backdrop-blur-lg rounded-b-xl border-t border-white/10"
            >
              <div className="flex flex-col gap-4 p-4">
                <Link 
                  to="/about" 
                  className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-lg ${
                    isActive('/about') ? 'text-primary bg-white/10' : 'text-gray-300'
                  }`}
                >
                  About
                </Link>
                <Link 
                  to="/services" 
                  className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-lg ${
                    isActive('/services') ? 'text-primary bg-white/10' : 'text-gray-300'
                  }`}
                >
                  Services
                </Link>
                <Link 
                  to="/blog" 
                  className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-lg ${
                    isActive('/blog') ? 'text-primary bg-white/10' : 'text-gray-300'
                  }`}
                >
                  Blog
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-sm font-medium transition-colors hover:text-primary p-2 rounded-lg ${
                    isActive('/contact') ? 'text-primary bg-white/10' : 'text-gray-300'
                  }`}
                >
                  Contact
                </Link>
                <Button 
                  variant="default" 
                  className="w-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                  onClick={() => window.location.href = '/booking'}
                >
                  Book a Call
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
