const Gallery = () => {
  const images = [
    "https://domricardo.com/images/slider-4.jpg",
    "https://domricardo.com/images/slider-5.jpg",
    "https://domricardo.com/images/slider-6.jpg",
    "https://domricardo.com/images/slider-7.jpg",
    "https://domricardo.com/images/slider-1.jpg",
    "https://domricardo.com/images/slider-2.jpg",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Galeria
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl group cursor-pointer aspect-square"
            >
              <img
                src={image}
                alt={`Galeria ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
