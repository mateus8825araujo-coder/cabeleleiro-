@@ .. @@
import React from 'react';
import { Star } from 'lucide-react';

export const Hero: React.FC = () => {
+  const scrollToSection = (sectionId: string) => {
+    const element = document.getElementById(sectionId);
+    if (element) {
+      element.scrollIntoView({ behavior: 'smooth' });
+    }
+  };
+
   return (
     <section id="home" className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100 flex items-center">
       <div className="container mx-auto px-4 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
             <div className="space-y-4">
               <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
                 Desperte sua
                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600 font-semibold">
                   Beleza Natural
                 </span>
               </h1>
               <p className="text-xl text-gray-600 leading-relaxed">
                 Mais que beleza, um cuidado que inspira confiança
               </p>
             </div>

             <div className="flex items-center space-x-4">
               <div className="flex items-center space-x-1">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                 ))}
               </div>
               <span className="text-gray-600">4.9/5 - 200+ clientes satisfeitas</span>
             </div>

             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
-              <button className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
+              <button 
+                onClick={() => scrollToSection('booking')}
+                className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
+              >
                 Agendar Consulta
               </button>
-              <button className="border-2 border-rose-400 text-rose-500 px-8 py-3 rounded-full hover:bg-rose-400 hover:text-white transition-all duration-300">
+              <button 
+                onClick={() => scrollToSection('services')}
+                className="border-2 border-rose-400 text-rose-500 px-8 py-3 rounded-full hover:bg-rose-400 hover:text-white transition-all duration-300"
+              >
                 Ver Serviços
               </button>
             </div>
           </div>

           <div className="relative">
             <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
               <img 
                 src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600" 
                 alt="Salon Interior" 
                 className="w-full h-96 object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
             </div>
             <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-8 shadow-xl">
               <div className="text-white text-center">
                 <div className="text-2xl font-bold">8+</div>
                 <div className="text-sm">Anos</div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };