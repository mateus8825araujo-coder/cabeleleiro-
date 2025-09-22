import React from 'react';
import { Scissors, Palette, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Corte & Modelagem',
    description: 'Cortes personalizados que realçam sua personalidade',
    price: 'A partir de R$ 80',
    features: ['Análise de rosto', 'Corte personalizado', 'Finalização']
  },
  {
    icon: Palette,
    title: 'Coloração',
    description: 'Cores vibrantes e naturais com produtos de alta qualidade',
    price: 'A partir de R$ 120',
    features: ['Consulta de cor', 'Coloração profissional', 'Tratamento pós-cor']
  },
  {
    icon: Sparkles,
    title: 'Tratamentos',
    description: 'Tratamentos capilares para revitalizar seus cabelos',
    price: 'A partir de R$ 100',
    features: ['Hidratação profunda', 'Reconstrução', 'Cauterização']
  },
  {
    icon: Heart,
    title: 'Penteados',
    description: 'Penteados elegantes para ocasiões especiais',
    price: 'A partir de R$ 150',
    features: ['Penteado personalizado', 'Teste de penteado', 'Fixação duradoura']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Nossos <span className="text-rose-400 font-semibold">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para realçar sua beleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="mb-4">
                <div className="bg-gradient-to-r from-rose-400 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className="text-rose-500 font-semibold text-lg mb-4">{service.price}</div>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white text-rose-500 border border-rose-200 py-2 rounded-lg hover:bg-rose-400 hover:text-white transition-all duration-300">
                Agendar Serviço
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};