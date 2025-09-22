import React, { useState } from 'react';
import { Calendar, Clock, User, CreditCard, Scissors } from 'lucide-react';

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
}

export const Booking: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });

  const [step, setStep] = useState(1);

  const services = [
    { name: 'Corte & Modelagem', price: 80 },
    { name: 'Coloração', price: 120 },
    { name: 'Tratamentos', price: 100 },
    { name: 'Penteados', price: 150 }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30', '18:00'
  ];

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Here you would integrate with your payment processor (Stripe)
    alert('Agendamento realizado com sucesso! Em breve você receberá a confirmação.');
    setStep(1);
    setBookingData({ service: '', date: '', time: '', name: '', email: '', phone: '' });
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Agendar <span className="text-rose-400 font-semibold">Consulta</span>
          </h2>
          <p className="text-xl text-gray-600">
            Reserve seu horário em poucos passos simples
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Progress Steps */}
          <div className="bg-gradient-to-r from-rose-400 to-pink-500 p-6">
            <div className="flex items-center justify-between max-w-md mx-auto">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= stepNum ? 'bg-white text-rose-500' : 'bg-rose-300 text-white'
                  }`}>
                    {stepNum}
                  </div>
                  {stepNum < 3 && (
                    <div className={`w-20 h-1 mx-2 ${
                      step > stepNum ? 'bg-white' : 'bg-rose-300'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Scissors className="h-6 w-6 text-rose-400 mr-2" />
                  Selecione o Serviço
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                        bookingData.service === service.name
                          ? 'border-rose-400 bg-rose-50'
                          : 'border-gray-200 hover:border-rose-300'
                      }`}
                      onClick={() => handleInputChange('service', service.name)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-800">{service.name}</span>
                        <span className="text-rose-500 font-semibold">R$ {service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                  disabled={!bookingData.service}
                  onClick={() => setStep(2)}
                >
                  Continuar
                </button>
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Calendar className="h-6 w-6 text-rose-400 mr-2" />
                  Data & Horário
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                    <input
                      type="date"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      value={bookingData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                    <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          className={`p-2 text-sm rounded border transition-all duration-200 ${
                            bookingData.time === time
                              ? 'bg-rose-400 text-white border-rose-400'
                              : 'border-gray-300 hover:border-rose-300 hover:bg-rose-50'
                          }`}
                          onClick={() => handleInputChange('time', time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setStep(1)}
                  >
                    Voltar
                  </button>
                  <button
                    className="flex-1 bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                    disabled={!bookingData.date || !bookingData.time}
                    onClick={() => setStep(3)}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Info & Payment */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <User className="h-6 w-6 text-rose-400 mr-2" />
                  Dados Pessoais
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      value={bookingData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      value={bookingData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <input
                      type="tel"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Resumo do Agendamento</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Serviço:</span>
                      <span className="font-medium">{bookingData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data:</span>
                      <span className="font-medium">{bookingData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Horário:</span>
                      <span className="font-medium">{bookingData.time}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="font-semibold">Valor:</span>
                      <span className="font-semibold text-rose-500">
                        R$ {services.find(s => s.name === bookingData.service)?.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    onClick={() => setStep(2)}
                  >
                    Voltar
                  </button>
                  <button
                    className="flex-1 bg-gradient-to-r from-rose-400 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                    disabled={!bookingData.name || !bookingData.email || !bookingData.phone}
                    onClick={handleSubmit}
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Confirmar & Pagar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};