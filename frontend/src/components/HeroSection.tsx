import React from "react";
import { Button } from "./Button";

interface Props {
  scrollToMenu: () => void;
}

const HeroSection: React.FC<Props> = ({ scrollToMenu }) => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-10 -right-10 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-saladicious-orange opacity-20 blur-xl"></div>
      <div className="absolute top-1/3 -left-20 w-40 sm:w-60 h-40 sm:h-60 rounded-full bg-saladicious-green opacity-20 blur-xl"></div>
      
      <div className="container mx-auto px-4 py-20 pt-24 md:py-24 lg:py-28 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-saladicious-dark-green leading-tight mb-4">
            Fresh <span className="text-saladicious-orange">Indianized</span> Organic Salads
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-lg mx-auto md:mx-0">
            Discover the perfect fusion of traditional Indian flavors with fresh, organic ingredients. Healthy food that's bursting with taste!
          </p>
          <Button 
            onClick={scrollToMenu}
            className="bg-saladicious-green hover:bg-saladicious-green/90 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium transition-all hover:shadow-lg w-full sm:w-auto"
          >
            Explore Our Menu
          </Button>
        </div>
        
        {/* Image container */}
        <div className="flex-1 relative mt-6 md:mt-0">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <img 
              src="/public/be6922ba-7621-4583-86c5-a7dce40c986b/WhatsApp Image 2022-11-21 at 3.13.39 PM.jpeg" 
              alt="Vibrant Indian-inspired organic salad" 
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-24 sm:w-32 h-24 sm:h-32 bg-saladicious-yellow rounded-full opacity-40 z-0"></div>
          <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-16 sm:w-20 h-16 sm:h-20 bg-saladicious-orange rounded-full opacity-30 z-0"></div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg className="relative block" style={{ width: "calc(100% + 1.3px)", height: "50px", minHeight: "30px" }} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;