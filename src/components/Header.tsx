import { Home, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange">DJOSSI</h1>
        <div className="flex items-center space-x-4">
          <Home className="w-5 h-5 text-foreground hover:text-primary cursor-pointer transition-colors" />
          <Phone className="w-5 h-5 text-foreground hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
};