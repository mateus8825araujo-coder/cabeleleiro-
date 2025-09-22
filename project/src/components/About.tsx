import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-light text-gray-800 mb-6">
                Sobre <span className="text-rose-400 font-semibold">E&C Studio</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
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

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">200+</div>
                <div className="text-sm text-gray-600">Clientes Satisfeitas</div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800">8+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Profissional" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-xl">
              <Award className="h-8 w-8 text-white mb-2" />
              <div className="text-white font-semibold">Certificada</div>
              <div className="text-white/90 text-sm">Profissionalmente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};