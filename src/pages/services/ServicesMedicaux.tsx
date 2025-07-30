import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Shield, Heart, Clock, UserCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ServicesMedicaux() {
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="container mx-auto text-center text-white">
          <Stethoscope className="w-16 h-16 mx-auto mb-6 text-orange" />
          <h2 className="text-5xl font-bold mb-6">Services Médicaux</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Consultez des médecins généralistes, spécialistes et infirmiers certifiés 
            disponibles 24h/24 avec la garantie Djossi.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Certification Badge */}
        <div className="text-center mb-16">
          <Badge className="px-6 py-3 text-lg bg-primary/10 text-primary border-primary/20">
            <Shield className="w-5 h-5 mr-2" />
            Professionnels de Santé Certifiés Djossi
          </Badge>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="w-6 h-6 mr-2 text-primary" />
                Médecins Généralistes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Consultations générales, diagnostics, prescriptions médicales.
                Disponibles pour visites à domicile.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="w-6 h-6 mr-2 text-primary" />
                Spécialistes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Cardiologues, dermatologues, gynécologues, pédiatres
                et autres spécialistes médicaux certifiés.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-6 h-6 mr-2 text-primary" />
                Infirmiers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Soins à domicile, injections, pansements,
                suivi post-opératoire par des professionnels qualifiés.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Section */}
        <section className="bg-orange/10 border border-orange/20 rounded-lg p-8 mb-16">
          <div className="text-center">
            <Clock className="w-12 h-12 mx-auto mb-4 text-orange" />
            <h3 className="text-2xl font-bold mb-4 text-orange">Service d'Urgence 24h/24</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Nos médecins certifiés sont disponibles pour les urgences médicales à toute heure.
            </p>
            <Button variant="orange" size="lg">
              Urgence Médicale
            </Button>
          </div>
        </section>

        {/* Verification Process */}
        <section className="bg-card rounded-lg p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-primary">
            Certification Médicale Djossi
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Diplôme Médical</h4>
              <p className="text-sm text-muted-foreground">Vérification des diplômes universitaires</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Ordre des Médecins</h4>
              <p className="text-sm text-muted-foreground">Inscription à l'ordre professionnel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold mb-2">Expérience</h4>
              <p className="text-sm text-muted-foreground">Validation de l'expérience professionnelle</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h4 className="font-semibold mb-2">Assurance</h4>
              <p className="text-sm text-muted-foreground">Assurance responsabilité civile professionnelle</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Besoin de soins médicaux ?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous avec un professionnel de santé certifié près de chez vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Consulter un Médecin
            </Button>
            <WhatsAppButton />
          </div>
        </div>
      </main>
    </div>
  );
}