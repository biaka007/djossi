import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  link?: string;
  bgImage?: string;
}

export const ServiceCard = ({ icon: Icon, title, description, buttonText, link, bgImage }: ServiceCardProps) => {
  const cardContent = (
    <Card className="p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group overflow-hidden relative h-full">
      {bgImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4 h-full">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm flex-grow">{description}</p>
        <Button variant="orange" className="mt-4 w-full">
          {buttonText}
        </Button>
      </div>
    </Card>
  );

  if (link) {
    return <Link to={link} className="block h-full">{cardContent}</Link>;
  }

  return cardContent;
};