import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
          Your Amazing Product
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Discover the power of our innovative solutions.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-md">
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;