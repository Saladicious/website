import React, { useRef, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SaladCard from "../components/SaladCard";
import MenuModal from "../components/MenuModal";
import { getFeaturedSalads, getAllSalads, getSignatureSalads } from "../utils/saladData";
import SignatureSalads from "../components/SignatureSalads";

export default function App() {
  // State for menu modal
  const [isModalOpen, setModalOpen] = useState(false);
  // References for scroll targets
  const homeRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const orderRef = useRef<HTMLDivElement>(null);

  // Generic scroll handler function
  const scrollToSection = (sectionId: string) => {
    switch (sectionId) {
      case 'home':
        homeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 'menu':
        menuRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 'order':
        orderRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };
  
  // For the hero section's menu button
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-sans bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar scrollToSection={scrollToSection} />
      {/* Hero Section */}
      <div ref={homeRef} id="home">
        <HeroSection scrollToMenu={scrollToMenu} />
      </div>
      
      {/* Menu Section */}
      <div ref={menuRef} id="menu" className="py-14 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-saladicious-dark-green mb-4 sm:mb-6">
            Our Delicious <span className="text-saladicious-orange">Menu</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            Discover our selection of fresh, Indian-inspired salads that bring together the best of health and flavor.
          </p>
          
          {/* Featured Salads - Show 3 featured salads on the main screen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {getFeaturedSalads().map((salad) => (
              <SaladCard key={salad.id} salad={salad} />
            ))}
          </div>
          
          {/* Signature Salads Showcase - Show all 5 signature salads in a special format */}
          <div className="mb-16">
            <SignatureSalads 
              salads={getSignatureSalads()} 
              onViewAllClick={() => setModalOpen(true)} 
            />
          </div>
          
          {/* View All Button */}
          <div className="text-center">
            <button 
              onClick={() => setModalOpen(true)}
              className="bg-saladicious-dark-green hover:bg-saladicious-dark-green/90 text-white px-6 py-3 rounded-md font-medium transition-all hover:shadow-md w-full sm:w-auto"
            >
              View Complete Menu
            </button>
          </div>
          
          {/* Menu Modal */}
          <MenuModal 
            isOpen={isModalOpen} 
            onClose={() => setModalOpen(false)} 
            salads={getAllSalads()}
          />
        </div>
      </div>
      
      {/* About Us Section */}
      <div ref={aboutRef} id="about" className="py-14 sm:py-16 md:py-20 bg-saladicious-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-saladicious-dark-green mb-10 sm:mb-16">
            About <span className="text-saladicious-orange">Saladicious</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-700">
              Saladicious is a foodtech startup that provides organic fresh and healthy indianized salads for the everyday customer and beyond. We believe that healthy food doesn't have to be boring!             
            </p>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-700">
              Our chefs combine traditional Indian flavors with fresh, organic ingredients to create salads that are not just nutritious but deliciously satisfying.              
            </p>
            <div className="h-32 sm:h-40 bg-gray-100 rounded-lg flex items-center justify-center mt-6 sm:mt-8">
              <p className="text-gray-500">About Us Image Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div ref={contactRef} id="contact">
        <ContactSection />
      </div>

      {/* Order Now Section */}
      <div ref={orderRef} id="order" className="py-14 sm:py-16 md:py-20 bg-saladicious-green/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-center text-saladicious-dark-green mb-10 sm:mb-16">
            Order <span className="text-saladicious-orange">Online</span>
          </h2>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-700">
              Ready to enjoy our delicious salads? Order online and get fresh, healthy meals delivered to your doorstep!
            </p>
            <button className="bg-saladicious-orange hover:bg-saladicious-orange/90 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full sm:w-auto max-w-xs mx-auto">
              Order Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
