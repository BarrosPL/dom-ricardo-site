import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const openWhatsApp = () => {
    const phoneNumber = "5583993916982"; 
    const message = "Olá! Vim pelo site e quero saber mais."; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); 
  };

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex space-x-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-8">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4">
              <MapPin className="text-accent" size={40} />
              <h3 className="font-serif text-xl font-bold">Localização</h3>
              <p className="text-primary-foreground/90">
                <a href="https://maps.app.goo.gl/MSTAxsKdnsadgsW68">Clique Aqui</a><br />

              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <Phone className="text-accent" size={40} />
              <h3 className="font-serif text-xl font-bold">Telefone</h3>
              <p className="text-primary-foreground/90">
                (83) 99391-6982
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <Instagram className="text-accent" size={40} />
              <h3 className="font-serif text-xl font-bold">Instagram</h3>
              <p className="text-primary-foreground/90">
                @domricardohospedaria
              </p>
            </div>
          </div>
          
          <Button onClick={openWhatsApp}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg px-8 py-6 transition-transform duration-700 hover:scale-110"
          >
            Reserve Sua Experiência
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
