import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
}

const ExperienceCard = ({ title, description, image, comingSoon = true }: ExperienceCardProps) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {comingSoon && (
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
            Em Breve
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
        <h3 className="font-serif text-2xl font-bold mb-3">{title}</h3>
        <p className="text-sm text-primary-foreground/90 mb-4 line-clamp-3">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
        >
          {comingSoon ? "Em Breve" : "Saiba Mais"}
        </Button>
      </div>
    </Card>
  );
};

export default ExperienceCard;
