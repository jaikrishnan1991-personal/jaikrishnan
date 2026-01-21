import { Quote } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export function Philosophy() {
  const { philosophy } = portfolioData;

  return (
    <section id="philosophy" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Philosophy
            </h2>
            <p className="text-muted-foreground">
              Principles that guide my approach to building products
            </p>
          </div>

          {/* Philosophy statements */}
          <div className="space-y-6">
            {philosophy.map((item, index) => (
              <div
                key={index}
                className={`relative pl-8 md:pl-12 py-4 ${
                  item.highlight
                    ? "bg-card border-l-4 border-primary rounded-r-lg shadow-sm"
                    : ""
                }`}
              >
                {/* Quote icon for highlighted */}
                {item.highlight && (
                  <Quote className="absolute left-3 md:left-4 top-4 w-5 h-5 text-primary" />
                )}
                
                {/* Bullet for non-highlighted */}
                {!item.highlight && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                )}

                <p
                  className={`text-lg md:text-xl leading-relaxed ${
                    item.highlight
                      ? "text-foreground font-medium pl-6"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
