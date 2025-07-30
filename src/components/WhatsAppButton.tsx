import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "+524443113785";
  
  const locationPrompt = `¡Hola! Hello! Bonjour! 🌍

Para brindarle el mejor servicio, por favor indíqueme su ubicación:
To provide you with the best service, please indicate your location:
Pour vous offrir le meilleur service, veuillez indiquer votre localisation:

📍 ¿En qué ciudad/país se encuentra? / What city/country are you in? / Dans quelle ville/pays êtes-vous?`;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(locationPrompt);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      variant="whatsapp" 
      size="lg" 
      onClick={handleWhatsAppClick}
      className="text-lg px-8 py-3 shadow-lg"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Contacter par WhatsApp
    </Button>
  );
};