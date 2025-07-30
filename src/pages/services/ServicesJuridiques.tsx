import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Shield, Clock, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ServicesJuridiques() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full py-6 px-4 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à l'accueil</span>
          </Link>
          <h1 className="text-2xl font-bold text-orange">DJOSSI</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container mx-auto text-center text-white">
          <Scale className="w-16 h-16 mx-auto mb-6 text-orange" />
          <h2 className="text-5xl font-bold mb-6">Services Juridiques</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Accédez à des avocats, notaires et conseillers juridiques certifiés par le 
            Système de Vérification de Confiance Certifié Djossi pour tous vos besoins légaux.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Certification Badge */}
        <div className="text-center mb-16">
          <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">
            <Shield className="w-5 h-5 mr-2" />
            Certifié par le Système de Vérification Djossi
          </Badge>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="w-6 h-6 mr-2 text-primary" />
                Avocats Spécialisés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Droit civil, pénal, commercial, famille, immobilier. 
                Tous nos avocats sont vérifiés et certifiés.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-primary" />
                Notaires Certifiés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Actes notariés, successions, contrats de mariage, 
                transactions immobilières sécurisées.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-primary" />
                Conseil Juridique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Consultations, conseils stratégiques, assistance 
                dans vos démarches administratives et légales.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Verification Process */}
        <section className="bg-card rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Processus de Vérification Djossi
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Vérification d'Identité</h4>
              <p className="text-sm text-muted-foreground">Contrôle des pièces d'identité officielles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Casier Judiciaire</h4>
              <p className="text-sm text-muted-foreground">Vérification du casier judiciaire vierge</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Diplômes & Licences</h4>
              <p className="text-sm text-muted-foreground">Validation des qualifications professionnelles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h4 className="font-semibold mb-2">Références</h4>
              <p className="text-sm text-muted-foreground">Contrôle des références professionnelles</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Besoin d'aide juridique ?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour être mis en relation avec un professionnel 
            juridique certifié près de chez vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Trouver un Avocat
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </main>
    </div>
  );
}