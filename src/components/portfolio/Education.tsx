import { GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation spanning three continents
          </p>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>

                {/* Year */}
                <span className="inline-block px-3 py-1 text-sm font-medium bg-secondary text-muted-foreground rounded-full mb-4">
                  {edu.year}
                </span>

                {/* Degree */}
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-primary font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {edu.location}
                </p>

                {/* Highlight/Scholarship */}
                {edu.highlight && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4" />
                    {edu.highlight}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
