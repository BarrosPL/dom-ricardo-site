import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const openWhatsApp = () => {
    const phoneNumber = "5583993916982"; 
    const message = "Olá! Vim pelo site e quero saber mais."; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); 
  };

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://domricardo.com/images/hero_4.jpg"
          alt="Vista panorâmica da Serra de Areia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/40 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Experience Lounge & Inn
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 animate-fade-in">
            Serra de Areia
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in">
            Alagoa Grande/PB ~ Areia/PB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button onClick={openWhatsApp}
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg px-8 py-6 transition-transform duration-700 hover:scale-110"
            >
              Viva Essa Experiência
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-primary-foreground" size={40} />
      </div>
    </section>
  );
};

export default Hero;
