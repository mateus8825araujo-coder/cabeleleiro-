@@ .. @@
   const handleSubmit = () => {
     // Here you would integrate with your payment processor (Stripe)
-    alert('Agendamento realizado com sucesso! Em breve você receberá a confirmação.');
+    const selectedService = services.find(s => s.name === bookingData.service);
+    const message = `Agendamento realizado com sucesso!
+    
+Detalhes:
+• Serviço: ${bookingData.service}
+• Data: ${new Date(bookingData.date).toLocaleDateString('pt-BR')}
+• Horário: ${bookingData.time}
+• Valor: R$ ${selectedService?.price}
+
+Em breve você receberá a confirmação por WhatsApp.`;
+    
+    alert(message);
     setStep(1);
     setBookingData({ service: '', date: '', time: '', name: '', email: '', phone: '' });
   };