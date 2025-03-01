import React from "react";
import { X } from "lucide-react";
import SaladCard, { SaladProps } from "./SaladCard";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  salads: SaladProps[];
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, salads }) => {
  if (!isOpen) return null;

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="bg-white rounded-xl w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col relative z-10 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 flex justify-between items-center p-3 sm:p-4 md:p-6 border-b bg-white z-20">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-saladicious-dark-green">
            Our Complete Menu
          </h2>
          <button 
            onClick={onClose}
            className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-3 sm:p-4 md:p-6 overflow-y-auto flex-grow">
          {/* Intro */}
          <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-center text-sm sm:text-base">
            Discover our complete selection of fresh, Indian-inspired salads made with organic ingredients and bold flavors.
          </p>
          
          {/* Salad Grid - 3x4 for desktop, 1 column for mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {salads.map((salad) => (
              <SaladCard key={salad.id} salad={salad} />
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 p-3 sm:p-4 md:p-6 border-t bg-white flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center">
          <span className="text-gray-600 text-sm sm:text-base order-2 sm:order-1">
            {salads.length} salads available
          </span>
          <button 
            onClick={onClose}
            className="bg-saladicious-dark-green hover:bg-saladicious-dark-green/90 text-white px-4 py-2.5 rounded-md transition-colors w-full sm:w-auto order-1 sm:order-2"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;