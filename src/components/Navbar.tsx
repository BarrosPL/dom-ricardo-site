import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-dom.png"

 const openWhatsApp = () => {
    const phoneNumber = "5583993916982"; 
    const message = "Olá! Vim pelo site e quero saber mais."; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); 
  };

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Sobre", href: "#about" },
    { label: "Experiências", href: "#experiences" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <img src={logo} alt="Logo Dom Ricardo" />
            </div>
            <span className="font-serif text-2xl font-bold text-foreground">DomRicardo Hospedaria</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors font-medium transition-transform duration-700 hover:scale-110"
              >
                {item.label}
              </a>
            ))}
            <Button  onClick={openWhatsApp} variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform duration-700 hover:scale-110">
              Reservar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Reservar Agora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
