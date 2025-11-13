import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experiences = [
    {
      title: "Chalés",
      description: "Explore a serenidade de nossa hospedagem, onde cada instante é uma jornada para a tranquilidade. Desfrute da liberdade de sua própria piscina privativa e entregue-se à calma das alturas com uma vista deslumbrante.",
      image: "https://domricardo.com/images/chale_bw_card.jpg",
    },
    {
      title: "Café da Serra",
      description: "Descubra o sabor das montanhas em nossa cafeteria na serra. Uma pausa para saborear momentos únicos.",
      image: "https://domricardo.com/images/cafedaserra_card.jpg",
    },
    {
      title: "Jantar Romântico",
      description: "Em um cenário encantador, convidaremos você a apreciar a deslumbrante beleza de uma linda paisagem ao seu redor em um jantar cuidadosamente elaborado.",
      image: "https://domricardo.com/images/jantar_romantico_bw.jpg",
    },
    {
      title: "Mini Wedding",
      description: "Um cenário encantador para dizer 'sim' aos seus sonhos.",
      image: "https://domricardo.com/images/wedding_card_bw.jpg",
    },
    {
      title: "Sessão de Fotos",
      description: "O cenário perfeito para capturar momentos eternos.",
      image: "https://domricardo.com/images/sessaofotos_bw_card.jpg",
    },
    {
      title: "Passeio de Quadriciclo",
      description: "Explore aventuras sem limites sobre um quadriciclo.",
      image: "https://domricardo.com/images/quadriciclo_wb_card.jpg",
    },
    {
      title: "Tour de Jeep",
      description: "Embarque em uma jornada emocionante para explorar a riqueza natural e cultural da região com nossos empolgantes passeios de jeep! Descubra paisagens deslumbrantes e encantadores engenhos de cachaça em uma aventura inesquecível.",
      image: "https://domricardo.com/images/jeep_wb_card.jpg",
    },
    {
      title: "Trilha Ecológica",
      description: "Descubra paisagens deslumbrantes, respire ar puro e deixe-se envolver pela serenidade da vida selvagem. Uma experiência única aguarda por você a cada passo.",
      image: "https://domricardo.com/images/trekking_bw_card.jpg",
    },
    {
      title: "Day Use",
      description: "Desfrute de um dia de relaxamento absoluto em nosso paraíso tropical.",
      image: "https://domricardo.com/images/dayuse_card_bw.jpg",
    },
  ];

  return (
    <section id="experiences" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nossas Experiências
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              description={experience.description}
              image={experience.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
