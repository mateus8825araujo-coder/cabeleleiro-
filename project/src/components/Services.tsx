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
    <section id="services" className="py-20 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-pink-100 px-6 py-3 rounded-full shadow-lg mb-6">
            <Sparkles className="h-5 w-5 text-rose-500 mr-2" />
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-wide">Nossos Especialidades</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Nossos <span className="text-rose-400 font-semibold">Serviços</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Oferecemos uma gama completa de serviços para realçar sua beleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white via-rose-50/50 to-pink-50/80 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-rose-100/50 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="mb-4">
                <div className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="text-rose-500 font-bold text-xl mb-6 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">{service.price}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center font-medium">
                    <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mr-3 animate-pulse" style={{ animationDelay: `${idx * 0.2}s` }}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white text-rose-500 border border-rose-200 py-2 rounded-lg hover:bg-rose-400 hover:text-white transition-all duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">
                Agendar Serviço
                </span>
                className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white border-0 py-3 rounded-xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 font-semibold relative overflow-hidden group"
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};