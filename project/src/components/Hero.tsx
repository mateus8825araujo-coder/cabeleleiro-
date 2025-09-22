import React from 'react';
import { Star, Sparkles, Heart, Award } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 flex items-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <Sparkles className="h-6 w-6 text-rose-300 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Heart className="h-8 w-8 text-pink-300 opacity-40" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
          <Award className="h-5 w-5 text-purple-300 opacity-50" />
        </div>
        <div className="absolute top-60 right-40 animate-pulse delay-500">
          <Sparkles className="h-4 w-4 text-rose-400 opacity-30" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-4">
                <Sparkles className="h-4 w-4 text-rose-400 mr-2" />
                <span className="text-sm font-medium text-gray-700">Especialista em Beleza Capilar</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-light text-gray-800 leading-tight">
                Desperte sua
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 font-semibold animate-gradient">
                  Beleza Natural
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
                Mais que beleza, um cuidado que inspira confiança
              </p>
            </div>

            <div className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-800">4.9/5</div>
                <div className="text-sm text-gray-600">200+ clientes satisfeitas</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 font-semibold text-lg relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">
                Agendar Consulta
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-rose-400 text-rose-500 px-8 py-4 rounded-full hover:bg-gradient-to-r hover:from-rose-400 hover:to-pink-500 hover:text-white transition-all duration-500 transform hover:scale-105 font-semibold text-lg backdrop-blur-sm bg-white/80"
              >
                Ver Serviços
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
              <img 
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Salon Interior" 
                className="w-full h-96 object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-rose-500/10"></div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                <Heart className="h-5 w-5 text-rose-500 animate-pulse" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full p-8 shadow-2xl animate-pulse">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm font-medium">Anos</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl p-4 shadow-xl animate-bounce">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full p-3 shadow-lg animate-pulse delay-300">
              <Award className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};