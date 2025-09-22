import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-rose-50/30 to-pink-50/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-to-r from-rose-200/30 to-pink-200/30 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float delay-1000">
        <div className="w-32 h-32 bg-gradient-to-r from-purple-200/20 to-rose-200/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-pink-100 px-6 py-3 rounded-full shadow-lg mb-6">
                <Heart className="h-5 w-5 text-rose-500 mr-2" />
                <span className="text-sm font-semibold text-rose-600 uppercase tracking-wide">Nossa História</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-light text-gray-800 mb-8">
                Sobre <span className="text-rose-400 font-semibold">E&C Studio</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Há mais de 8 anos, dedico minha paixão e expertise para realçar a beleza única de cada cliente. 
                  Acredito que um bom corte de cabelo não apenas transforma a aparência, mas também eleva a autoestima.
                </p>
                <p>
                  Especializada em cortes personalizados, colorações naturais e tratamentos capilares, trabalho com 
                  produtos de primeira qualidade para garantir os melhores resultados.
                </p>
                <p>
                  Cada cliente é único, por isso ofereço uma consulta personalizada para entender suas necessidades 
                  e criar um visual que reflita sua personalidade.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">200+</div>
                <div className="text-sm text-gray-600 font-medium">Clientes Satisfeitas</div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse delay-300">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">8+</div>
                <div className="text-sm text-gray-600 font-medium">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10 group">
              <img 
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Profissional" 
                className="w-full rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/10 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 shadow-2xl animate-bounce">
              <Award className="h-10 w-10 text-white mb-3" />
              <div className="text-white font-bold text-lg">Certificada</div>
              <div className="text-white/90 text-sm font-medium">Profissionalmente</div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl p-4 shadow-xl animate-pulse">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-1/3 -right-4 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full p-3 shadow-lg animate-bounce delay-500">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};