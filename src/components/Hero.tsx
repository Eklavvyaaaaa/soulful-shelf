import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-minimal-gradient flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-light text-foreground leading-tight tracking-tight">
            Craft
            <br />
            <span className="font-normal">Your Story</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            A minimal space for artisans to share their work and connect with those who appreciate handmade craftsmanship.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-clean px-8 py-4 text-lg font-normal"
            onClick={() => navigate('/auth')}
          >
            Begin
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Simple feature list */}
        <div className="pt-16 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-3">
              <h3 className="text-lg font-normal text-foreground">Share</h3>
              <p className="text-sm text-muted-foreground">
                Present your work with clarity
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-normal text-foreground">Connect</h3>
              <p className="text-sm text-muted-foreground">
                Build meaningful relationships
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-normal text-foreground">Grow</h3>
              <p className="text-sm text-muted-foreground">
                Expand your creative community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;