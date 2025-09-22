@@ .. @@
import React from 'react';

const galleryImages = [
-  'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
-  'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400',
-  'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400',
-  'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
-  'https://images.pexels.com/photos/3065175/pexels-photo-3065175.jpeg?auto=compress&cs=tinysrgb&w=400',
-  'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400'
+  {
+    url: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
+    title: 'Corte Moderno',
+    description: 'Corte personalizado com técnicas avançadas'
+  },
+  {
+    url: 'https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400',
+    title: 'Coloração Vibrante',
+    description: 'Coloração profissional com produtos premium'
+  },
+  {
+    url: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=400',
+    title: 'Tratamento Capilar',
+    description: 'Hidratação profunda e reconstrução'
+  },
+  {
+    url: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
+    title: 'Penteado Elegante',
+    description: 'Penteados para ocasiões especiais'
+  },
+  {
+    url: 'https://images.pexels.com/photos/3065175/pexels-photo-3065175.jpeg?auto=compress&cs=tinysrgb&w=400',
+    title: 'Estilo Clássico',
+    description: 'Cortes clássicos com toque moderno'
+  },
+  {
+    url: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
+    title: 'Transformação',
+    description: 'Antes e depois impressionante'
+  }
 ];

 export const Gallery: React.FC = () => {
   return (
     <section id="gallery" className="py-20 bg-gray-50">
       <div className="container mx-auto px-4">
         <div className="text-center mb-16">
           <h2 className="text-4xl font-light text-gray-800 mb-4">
             Nossa <span className="text-rose-400 font-semibold">Galeria</span>
           </h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Confira alguns dos nossos trabalhos e transformações incríveis
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
-          {galleryImages.map((image, index) => (
+          {galleryImages.map((image, index) => (
             <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
               <img 
-                src={image} 
-                alt={`Trabalho ${index + 1}`}
+                src={image.url} 
+                alt={image.title}
                 className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="absolute bottom-4 left-4 text-white">
-                  <h3 className="text-lg font-semibold">Transformação {index + 1}</h3>
-                  <p className="text-sm opacity-90">Ver detalhes</p>
+                  <h3 className="text-lg font-semibold">{image.title}</h3>
+                  <p className="text-sm opacity-90">{image.description}</p>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };