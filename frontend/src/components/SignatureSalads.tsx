import React from "react";
import { SaladProps } from "./SaladCard";
import { ChevronRight } from "lucide-react";

interface SignatureSaladsProps {
  salads: SaladProps[];
  onViewAllClick: () => void;
}

const SignatureSalads: React.FC<SignatureSaladsProps> = ({ salads, onViewAllClick }) => {
  return (
    <div className="w-full">
      {/* Header with view all button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8">
        <div>
          <h3 className="text-2xl font-display font-bold text-saladicious-dark-green mb-2">
            Our Signature Collection
          </h3>
          <p className="text-gray-600 max-w-2xl">
            Discover our chef-crafted signature salads, made with organic ingredients and packed with nutrition and flavor.
          </p>
        </div>
        <button 
          onClick={onViewAllClick}
          className="flex items-center justify-center sm:justify-start text-saladicious-orange font-medium mt-4 md:mt-0 hover:underline py-2 md:py-0"
        >
          View Complete Menu
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
      
      {/* Signature salads showcase */}
      <div className="space-y-6">
        {salads.map((salad, index) => (
          <div 
            key={salad.id}
            className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${index % 2 === 0 ? 'transform-gpu hover:-translate-y-1' : 'transform-gpu hover:translate-y-1'}`}
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/3 h-56 sm:h-48 md:h-auto relative overflow-hidden">
                {salad.image ? (
                  <img 
                    src={salad.image} 
                    alt={salad.name} 
                    className="w-full h-full object-cover md:absolute inset-0 transition-transform duration-500 hover:scale-105" 
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-saladicious-cream text-saladicious-green/50 font-medium">
                    Salad Image
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-5 sm:p-6 md:w-2/3 flex flex-col">
                {/* Tags */}
                {salad.tags && salad.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {salad.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-saladicious-green/10 text-saladicious-dark-green text-xs px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Title */}
                <h3 className="font-display font-bold text-xl text-saladicious-dark-green mb-2">
                  {salad.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {salad.description}
                </p>
                
                {/* Price and CTA */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-4 sm:mt-auto">
                  <span className="font-medium text-saladicious-dark-green text-lg">
                    ₹{salad.price.toFixed(0)}
                  </span>
                  <button className="bg-saladicious-orange hover:bg-saladicious-orange/90 text-white px-4 py-2 rounded-md transition-colors w-full sm:w-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignatureSalads;