import React from "react";

export interface SaladProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
  isFeatured?: boolean;
}

interface SaladCardProps {
  salad: SaladProps;
  onClick?: () => void;
}

const SaladCard: React.FC<SaladCardProps> = ({ salad, onClick }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative h-52 sm:h-48 overflow-hidden bg-saladicious-cream">
        {salad.image ? (
          <img 
            src={salad.image} 
            alt={salad.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-saladicious-green/50 font-medium">
            Salad Image
          </div>
        )}
        
        {/* Featured badge */}
        {salad.isFeatured && (
          <div className="absolute top-3 right-3 bg-saladicious-orange text-white text-xs font-bold px-2 py-1 rounded">
            FEATURED
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-5 flex-grow flex flex-col">
        {/* Tags */}
        {salad.tags && salad.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {salad.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-saladicious-green/10 text-saladicious-dark-green text-xs px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Title */}
        <h3 className="font-display font-bold text-lg text-saladicious-dark-green mb-1">
          {salad.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {salad.description}
        </p>
        
        {/* Price and CTA */}
        <div className="flex justify-between items-center mt-auto">
          <span className="font-medium text-saladicious-dark-green">
            ₹{salad.price.toFixed(0)}
          </span>
          <button className="bg-saladicious-orange/90 hover:bg-saladicious-orange text-white text-sm px-3 py-1.5 rounded-md transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaladCard;