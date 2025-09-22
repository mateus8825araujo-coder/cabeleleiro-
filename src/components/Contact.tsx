import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar um horário no E&C Studio.');
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Entre em <span className="text-rose-400 font-semibold">Contato</span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos aqui para tornar seus sonhos de beleza realidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600">Rua das Flores, 123<br />Centro, São Paulo - SP</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <button 
                      onClick={handleWhatsApp}
                      className="text-gray-600 hover:text-rose-400 transition-colors"
                    >
                      (11) 9999-9999
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a 
                      href="mailto:contato@ecstudio.com"
                      className="text-gray-600 hover:text-rose-400 transition-colors"
                    >
                      contato@ecstudio.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horário de Funcionamento</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 9h às 18h</p>
                      <p>Sábado: 9h às 16h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-800 mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/ecstudio" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com/ecstudio" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-rose-400 to-pink-500 w-10 h-10 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent">
                  <option>Selecione um serviço</option>
                  <option>Corte & Modelagem</option>
                  <option>Coloração</option>
                  <option>Tratamentos</option>
                  <option>Penteados</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                  placeholder="Conte-nos sobre o que você gostaria..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};