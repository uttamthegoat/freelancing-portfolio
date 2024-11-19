import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { orgData } from "../../assets/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Set initial scroll state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Only run on mount

  // Handle mobile menu overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible"; // Changed from "unset" to "visible"
    }
  }, [isOpen]);

  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };

  const navItems = ["Home", "Services", "Skills", "Portfolio", "Contact"];

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 80;
      const elementTop = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed w-full top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-sm py-4"
            : "bg-transparent py-6"
        }`}
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <nav className="container mx-auto px-6 lg:px-12 flex justify-between items-center text-gray-100">
          <motion.h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            whileHover={{ scale: 1.05 }}
          >
            {orgData.name}
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors text-lg"
                  onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-100 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-lg md:hidden z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideIn}
            style={{ top: 0 }}
          >
            <div className="flex flex-col h-full justify-center items-center relative pt-16">
              <motion.button
                className="absolute top-4 right-4 text-gray-100 focus:outline-none"
                onClick={() => setIsOpen(false)}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>

              <div className="w-full overflow-y-auto">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-100 hover:text-blue-400 transition-colors text-lg py-4 block text-center"
                    onClick={(e) => handleLinkClick(e, item.toLowerCase())}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
