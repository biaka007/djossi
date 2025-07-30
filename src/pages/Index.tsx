import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Header } from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Wrench,
  Zap,
  Home,
  Droplets,
  Scale,
  Brain,
  Sparkles,
  Shield,
  LogIn,
  User,
} from "lucide-react";

const Index = () => {
  const { user, loading } = useAuth();

  const services = [
    {
      icon: Scale,
      title: "Services Juridiques",
      description: "Avocats, notaires et conseillers juridiques certifiés",
      buttonText: "En savoir plus",
      link: "/services/juridiques",
      bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Stethoscope,
      title: "Services Médicaux",
      description: "Médecins généralistes, spécialistes et infirmiers vérifiés",
      buttonText: "En savoir plus",
      link: "/services/medicaux",
      bgImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Brain,
      title: "Psychologie",
      description: "Thérapeutes, psychologues et coachs professionnels",
      buttonText: "En savoir plus",
      link: "/services/psychologie",
      bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Wrench,
      title: "Mécanique",
      description: "Réparation automobile et moto par des experts",
      buttonText: "En savoir plus",
      link: "/services/mecanique",
      bgImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Droplets,
      title: "Plomberie",
      description: "Dépannage et installation de plomberie",
      buttonText: "En savoir plus",
      link: "/services/plomberie",
      bgImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Sparkles,
      title: "Nettoyage",
      description: "Services de nettoyage domicile et bureaux",
      buttonText: "En savoir plus",
      link: "/services/nettoyage",
      bgImage: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Home,
      title: "Immobilier Location",
      description: "Agents immobiliers et gestionnaires de biens",
      buttonText: "En savoir plus",
      link: "/services/immobilier",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Zap,
      title: "Services Électriques",
      description: "Dépannage et installation électrique",
      buttonText: "En savoir plus",
      link: "/services/electriques",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">DJOSSI</h1>
          <p className="text-muted-foreground mt-2">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header */}
      <header className="w-full py-6 px-4 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange">DJOSSI</h1>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-foreground" />
                <span className="text-sm">{user.email}</span>
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/auth'}>
                  Profil
                </Button>
              </div>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm" className="flex items-center">
                  <LogIn className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="px-4 py-2 mb-6 bg-primary/10 text-primary border-primary/20">
            <Shield className="w-4 h-4 mr-2" />
            Système de Vérification de Confiance Certifié Djossi
          </Badge>
          <h1 className="text-6xl font-bold mb-6 text-primary">DJOSSI</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            La première plateforme de services professionnels certifiés en Côte d'Ivoire. 
            Connectez-vous avec des experts vérifiés pour tous vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-3">
                Commencer maintenant
              </Button>
            </Link>
            <WhatsAppButton />
          </div>
        </div>

        {/* Trust Section */}
        <section className="bg-card rounded-lg p-8 mb-16 border border-primary/20">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Djossi ?</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <h3 className="font-semibold mb-2">🔒 Sécurité Garantie</h3>
                <p className="text-sm text-muted-foreground">Tous nos professionnels passent par un processus de vérification rigoureux</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">⚡ Service Rapide</h3>
                <p className="text-sm text-muted-foreground">Trouvez et contactez des experts en quelques clics</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">💎 Qualité Certifiée</h3>
                <p className="text-sm text-muted-foreground">Seuls les professionnels les plus qualifiés rejoignent notre plateforme</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <h2 className="text-4xl font-bold text-center mb-12">Nos Services Certifiés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              buttonText={service.buttonText}
              link={service.link}
              bgImage={service.bgImage}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
