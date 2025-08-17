import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 cultural-gradient rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🪷</span>
            </div>
            <span className="font-bold text-xl text-gray-800">South Asian Club</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("officers")}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Officers
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("officers")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Officers
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
