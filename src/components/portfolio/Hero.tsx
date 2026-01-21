import { ArrowDown, Mail, Linkedin, Phone } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay for light mode readability */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/60" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {personal.location}
          </div>

          {/* Name */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            {personal.name}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up delay-200 leading-relaxed">
            {personal.tagline.split(" — ").map((part, index) => (
              <span key={index}>
                {index > 0 && <span className="text-primary mx-2">·</span>}
                {part}
              </span>
            ))}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-300">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 font-medium"
            >
              <a href={`mailto:${personal.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-medium"
            >
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-8 font-medium"
            >
              <a href={`tel:${personal.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#philosophy" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
