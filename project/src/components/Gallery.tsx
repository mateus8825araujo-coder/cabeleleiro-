import React from 'react';

const galleryImages = [
  'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/3065175/pexels-photo-3065175.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400'
];

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 via-rose-50/30 to-pink-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-100 to-pink-100 px-6 py-3 rounded-full shadow-lg mb-6">
            <Sparkles className="h-5 w-5 text-rose-500 mr-2" />
            <span className="text-sm font-semibold text-rose-600 uppercase tracking-wide">Nossos Trabalhos</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Nossa <span className="text-rose-400 font-semibold">Galeria</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Confira alguns dos nossos trabalhos e transformações incríveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image} 
                alt={`Trabalho ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-125 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90 font-medium">{image.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <Heart className="h-5 w-5 text-white" />
                </div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-l-rose-400/80 border-t-[30px] border-t-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};