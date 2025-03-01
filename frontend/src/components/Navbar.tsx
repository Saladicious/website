import React, { useState, useEffect } from "react";
import { Button } from "./Button";

interface Props {
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<Props> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu after clicking a link (mobile)
  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 sm:py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 mr-2">
              {/* Stylized leaf logo icon */}
              <div className="absolute inset-0 bg-saladicious-green rounded-full transform rotate-45"></div>
              <div className="absolute inset-1 bg-saladicious-light-green rounded-full transform rotate-[30deg]"></div>
              <div className="absolute inset-2 bg-white rounded-full"></div>
              <div className="absolute inset-[35%] bg-saladicious-orange rounded-full"></div>
            </div>
            <span className="font-display font-bold text-lg sm:text-2xl text-saladicious-dark-green">
              Salad<span className="text-saladicious-orange">icious</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="font-medium text-saladicious-dark-green hover:text-saladicious-orange transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="font-medium text-saladicious-dark-green hover:text-saladicious-orange transition-colors"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="font-medium text-saladicious-dark-green hover:text-saladicious-orange transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="font-medium text-saladicious-dark-green hover:text-saladicious-orange transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('order')} 
              className="bg-saladicious-green hover:bg-saladicious-green/90 text-white py-2 px-4 rounded-full"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-saladicious-dark-green focus:outline-none focus:ring-2 focus:ring-saladicious-green rounded-md p-2 h-11 w-11 flex items-center justify-center"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-xl mt-4 py-4 px-2 absolute left-4 right-4 border border-gray-100 z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => handleLinkClick('home')} 
                className="font-medium text-saladicious-dark-green hover:text-saladicious-orange px-4 py-3 rounded-md hover:bg-gray-50 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleLinkClick('menu')} 
                className="font-medium text-saladicious-dark-green hover:text-saladicious-orange px-4 py-3 rounded-md hover:bg-gray-50 transition-colors text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => handleLinkClick('about')} 
                className="font-medium text-saladicious-dark-green hover:text-saladicious-orange px-4 py-3 rounded-md hover:bg-gray-50 transition-colors text-left"
              >
                About Us
              </button>
              <button 
                onClick={() => handleLinkClick('contact')} 
                className="font-medium text-saladicious-dark-green hover:text-saladicious-orange px-4 py-3 rounded-md hover:bg-gray-50 transition-colors text-left"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <Button 
                  onClick={() => handleLinkClick('order')} 
                  className="bg-saladicious-green hover:bg-saladicious-green/90 text-white py-3 px-4 rounded-full w-full"
                >
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;