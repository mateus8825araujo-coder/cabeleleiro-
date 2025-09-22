import React from 'react';
import { Scissors, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-rose-400" />
            <span className="text-2xl font-semibold text-gray-800">E&C Studio</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-rose-400 transition-colors">Início</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-rose-400 transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-rose-400 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('anamnese')} className="text-gray-600 hover:text-rose-400 transition-colors">Anamnese</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-600 hover:text-rose-400 transition-colors">Galeria</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-rose-400 transition-colors">Contato</button>
          </nav>

          <button 
            onClick={() => scrollToSection('booking')}
            className="hidden md:block bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Agendar
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block text-gray-600 hover:text-rose-400 transition-colors">Início</button>
            <button onClick={() => scrollToSection('services')} className="block text-gray-600 hover:text-rose-400 transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-600 hover:text-rose-400 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('anamnese')} className="block text-gray-600 hover:text-rose-400 transition-colors">Anamnese</button>
            <button onClick={() => scrollToSection('gallery')} className="block text-gray-600 hover:text-rose-400 transition-colors">Galeria</button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-600 hover:text-rose-400 transition-colors">Contato</button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Agendar
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};