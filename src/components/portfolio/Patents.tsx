import { FileText, Lightbulb } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

export function Patents() {
  const { patents, innovations } = portfolioData;

  return (
    <section id="patents" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Patents & Innovation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Intellectual property and technical innovations developed during my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Patents */}
          {patents.map((patent, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-xs font-semibold bg-primary text-primary-foreground rounded">
                        PATENT
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {patent.number}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {patent.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {patent.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Innovations */}
          {innovations.map((innovation, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 text-xs font-semibold bg-accent text-accent-foreground rounded">
                        INNOVATION
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {innovation.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
