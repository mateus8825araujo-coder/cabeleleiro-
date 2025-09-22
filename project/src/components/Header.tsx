import React from 'react';
import { Scissors, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg border-b border-rose-100/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">E&C Studio</span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 bg-gray-50/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-500 transition-all duration-300 font-medium hover:scale-105">Início</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-500 transition-all duration-300 font-medium hover:scale-105">Serviços</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-rose-500 transition-all duration-300 font-medium hover:scale-105">Sobre</button>
            <button onClick={() => scrollToSection('anamnese')} className="text-gray-700 hover:text-rose-500 transition-all duration-300 font-medium hover:scale-105">Anamnese</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-500 transition-all duration-300 font-medium hover:scale-105">Galeria</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-500 transition-all duration-300 font-medium hover:scale-105">Contato</button>
          </nav>

          <button className="hidden md:block bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
            Agendar
            className="hidden md:block bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 font-semibold relative overflow-hidden group"

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            <span className="relative">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </span>
          </button>
        </div>
          <nav className="md:hidden mt-4 pb-4 space-y-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-rose-100/50">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-rose-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-rose-50">Início</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-gray-700 hover:text-rose-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-rose-50">Serviços</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-rose-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-rose-50">Sobre</button>
            <button onClick={() => scrollToSection('anamnese')} className="block w-full text-left text-gray-700 hover:text-rose-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-rose-50">Anamnese</button>
            <button onClick={() => scrollToSection('gallery')} className="block w-full text-left text-gray-700 hover:text-rose-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-rose-50">Galeria</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-rose-500 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-rose-50">Contato</button>
            <a href="#anamnese" className="block text-gray-600 hover:text-rose-400 transition-colors">Anamnese</a>
            <a href="#gallery" className="block text-gray-600 hover:text-rose-400 transition-colors">Galeria</a>
              className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold mt-4"
            <button className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
              Agendar
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};