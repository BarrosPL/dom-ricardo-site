import logo from "../assets/logo-dom.png"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
          </div>
          
          <div className=" text-center justify-center items-center">
            <p className="text-sm text-background/80">
              © 2024 DomRicardo. Todos os direitos reservados.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
