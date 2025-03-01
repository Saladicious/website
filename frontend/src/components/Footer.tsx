import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white relative overflow-hidden border-t border-gray-200 pt-16 pb-8">
      {/* Top border with Indian pattern */}
      <div className="absolute top-0 left-0 w-full h-3 overflow-hidden">
        <div className="absolute inset-0 bg-saladicious-orange" style={{
          maskImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"8\" viewBox=\"0 0 100 8\" xmlns=\"http://www.w3.org/2000/svg\",%3E%3Cpath d=\"M0 0C10 0 10 8 20 8C30 8 30 0 40 0C50 0 50 8 60 8C70 8 70 0 80 0C90 0 90 8 100 8V0H0Z\" fill=\"black\"/%3E%3C/svg%3E')",
          maskSize: "40px 8px",
          maskRepeat: "repeat-x"
        }}></div>
      </div>
      
      {/* Main footer section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-saladicious-dark-green mb-4">
            Fresh & Healthy <span className="text-saladicious-orange">Indian Salads</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:space-x-4 mt-6">
            <a 
              href="#" 
              className="bg-saladicious-orange text-white px-6 py-2.5 rounded-md font-medium hover:bg-saladicious-orange/90 transition-colors w-full sm:w-auto"
            >
              Order Now
            </a>
            <a 
              href="#contact" 
              className="bg-white text-saladicious-dark-green px-6 py-2.5 rounded-md font-medium border border-saladicious-green hover:bg-saladicious-green/5 transition-colors w-full sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
        
        {/* 4-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
          {/* Navigation Column */}
          <div>
            <h3 className="font-display font-semibold text-base uppercase tracking-wider text-saladicious-dark-green mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-600 hover:text-saladicious-orange transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-600 hover:text-saladicious-orange transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')} 
                  className="text-gray-600 hover:text-saladicious-orange transition-colors"
                >
                  Our Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('order')} 
                  className="text-gray-600 hover:text-saladicious-orange transition-colors"
                >
                  Order Online
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-600 hover:text-saladicious-orange transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* What We Do Column */}
          <div>
            <h3 className="font-display font-semibold text-base uppercase tracking-wider text-saladicious-dark-green mb-4">
              What We Do
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Fresh Ingredient Sourcing</li>
              <li className="text-gray-600">Indian Fusion Recipes</li>
              <li className="text-gray-600">Healthy Meal Preparation</li>
              <li className="text-gray-600">Corporate Catering</li>
              <li className="text-gray-600">Subscription Plans</li>
              <li className="text-gray-600">Nutritional Consulting</li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div>
            <h3 className="font-display font-semibold text-base uppercase tracking-wider text-saladicious-dark-green mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-saladicious-orange transition-colors">
                  General Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saladicious-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saladicious-orange transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saladicious-orange transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          
          {/* Talk To Us Column */}
          <div>
            <h3 className="font-display font-semibold text-base uppercase tracking-wider text-saladicious-dark-green mb-4">
              Talk To Us
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">support@saladicious.com</li>
              <li className="text-gray-600">+91 123 456 7890</li>
              <li className="text-gray-600">Indiranagar, Bengaluru</li>
              <li className="mt-4">
                <a href="#" className="text-gray-600 hover:text-saladicious-orange transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saladicious-orange transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-saladicious-orange transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom copyright section */}
      <div className="border-t border-gray-200 pt-8 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-display font-bold text-xl sm:text-2xl text-saladicious-dark-green">
              Saladicious<span className="text-saladicious-orange">.</span>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm text-center mb-4 md:mb-0">
            © {currentYear} Saladicious. All Rights Reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-saladicious-orange hover:text-white transition-colors" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-saladicious-orange hover:text-white transition-colors" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-saladicious-orange hover:text-white transition-colors" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;