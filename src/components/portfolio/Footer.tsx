import { Mail, Linkedin, Phone, MapPin, ArrowUp, FileDown, Presentation, Github } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-secondary/50 border-t border-border">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* CTA Section */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Interested in discussing product strategy, startup ideas, or collaboration opportunities? I'd love to hear from you.
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 font-medium"
                >
                  <a href={`mailto:${personal.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Send me an email
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
                    View LinkedIn
                  </a>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="rounded-full px-8 font-medium"
                >
                  <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileDown className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 font-medium border-primary/50 hover:bg-primary/10"
                >
                  <a href={personal.portfolioUrl} target="_blank" rel="noopener noreferrer">
                    <Presentation className="w-4 h-4 mr-2" />
                    Download Portfolio
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 font-medium"
                >
                  <a href={personal.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {personal.email}
            </a>
            <a
              href={`tel:${personal.phone}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              {personal.phone}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {personal.location}
            </span>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personal.name}. All rights reserved.
            </p>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="gap-2"
            >
              Back to top
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
