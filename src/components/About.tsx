const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Bem-Vindo!
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A DomRicardo é um verdadeiro oásis de plenitude e relaxamento. Localizado em um local 
            privilegiado, entre os municípios de Alagoa Grande e Areia na Paraíba, este lugar 
            encantador oferece uma vista de tirar o fôlego, combinada com uma belíssima piscina, 
            chalés, bar, jacuzzi e lounge.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubra um refúgio onde a natureza encontra o conforto, e cada momento se transforma 
            em uma experiência inesquecível.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
