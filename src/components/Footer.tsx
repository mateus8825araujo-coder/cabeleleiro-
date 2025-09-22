@@ .. @@
import React from 'react';
import { Scissors, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
+  const scrollToSection = (sectionId: string) => {
+    const element = document.getElementById(sectionId);
+    if (element) {
+      element.scrollIntoView({ behavior: 'smooth' });
+    }
+  };
+
   return (
     <footer className="bg-gray-800 text-white py-12">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div>
             <div className="flex items-center space-x-2 mb-4">
               <Scissors className="h-6 w-6 text-rose-400" />
               <span className="text-xl font-semibold">E&C Studio</span>
             </div>
             <p className="text-gray-300 mb-4">
               Transformando sua beleza com paixão e expertise há mais de 8 anos.
             </p>
             <div className="text-sm text-gray-400">
               <p>Rua das Flores, 123</p>
               <p>Centro, São Paulo - SP</p>
               <p>(11) 9999-9999</p>
             </div>
           </div>
           
           <div>
             <h3 className="text-lg font-semibold mb-4">Serviços</h3>
             <ul className="space-y-2 text-gray-300">
-              <li><a href="#" className="hover:text-rose-400 transition-colors">Corte & Modelagem</a></li>
-              <li><a href="#" className="hover:text-rose-400 transition-colors">Coloração</a></li>
-              <li><a href="#" className="hover:text-rose-400 transition-colors">Tratamentos</a></li>
-              <li><a href="#" className="hover:text-rose-400 transition-colors">Penteados</a></li>
+              <li><button onClick={() => scrollToSection('services')} className="hover:text-rose-400 transition-colors">Corte & Modelagem</button></li>
+              <li><button onClick={() => scrollToSection('services')} className="hover:text-rose-400 transition-colors">Coloração</button></li>
+              <li><button onClick={() => scrollToSection('services')} className="hover:text-rose-400 transition-colors">Tratamentos</button></li>
+              <li><button onClick={() => scrollToSection('services')} className="hover:text-rose-400 transition-colors">Penteados</button></li>
             </ul>
           </div>
           
           <div>
             <h3 className="text-lg font-semibold mb-4">Horários</h3>
             <div className="space-y-2 text-gray-300">
               <p>Segunda a Sexta: 9h às 18h</p>
               <p>Sábado: 9h às 16h</p>
               <p>Domingo: Fechado</p>
             </div>
           </div>
         </div>
         
         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
           <p className="flex items-center justify-center">
             Feito com <Heart className="h-4 w-4 text-rose-400 mx-1" /> pela equipe E&C Studio
           </p>
           <p className="text-sm mt-2">© 2024 E&C Studio. Todos os direitos reservados.</p>
         </div>
       </div>
     </footer>
   );
 };