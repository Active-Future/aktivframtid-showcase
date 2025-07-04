
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-6">Hoppsan! Vi kunde inte hitta sidan du letar efter.</p>
        <p className="text-muted-foreground mb-8">
          Sidan på <span className="font-mono bg-secondary px-2 py-1 rounded">{location.pathname}</span> finns inte eller kan ha flyttats.
        </p>
        <Button asChild className="flex items-center">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Återgå till Dashboard
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
