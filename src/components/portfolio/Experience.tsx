import { Briefcase, Lightbulb, Wrench, History } from "lucide-react";
import { portfolioData, Experience as ExperienceType } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

// Logo imports
import knowledgeHubLogo from "@/assets/logos/knowledge-hub-logo.png";
import braneLogo from "@/assets/logos/brane-logo.png";
import bodeLogo from "@/assets/logos/bode-logo.png";

const typeConfig = {
  founder: {
    icon: Lightbulb,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
  },
  leadership: {
    icon: Briefcase,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  technical: {
    icon: Wrench,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
  },
  prior: {
    icon: History,
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    borderColor: "border-muted",
  },
};

// Map company names to logos
const companyLogos: Record<string, string> = {
  "The Knowledge Hub": knowledgeHubLogo,
  "Brane Group": braneLogo,
  "Gebr. Bode GmbH": bodeLogo,
};

function ExperienceCard({ experience, index }: { experience: ExperienceType; index: number }) {
  const config = typeConfig[experience.type];
  const IconComponent = config.icon;
  const logo = companyLogos[experience.company];

  return (
    <div className="relative pl-8 md:pl-12 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[11px] md:left-[19px] top-8 bottom-0 w-px bg-timeline-line last:hidden" />
      
      {/* Timeline dot */}
      <div className={`absolute left-0 md:left-2 top-1 w-6 h-6 rounded-full ${config.bgColor} flex items-center justify-center ring-4 ring-background`}>
        <IconComponent className={`w-3 h-3 ${config.color}`} />
      </div>

      {/* Content */}
      <Card className={`border-l-4 ${config.borderColor} hover:shadow-md transition-shadow`}>
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="flex items-start gap-4">
              {/* Company Logo */}
              {logo && (
                <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/90 p-2 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <img 
                    src={logo} 
                    alt={experience.company} 
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {experience.title}
                </h3>
                <p className="text-primary font-medium">
                  {experience.company}
                </p>
              {experience.summary && (
                  <p className="text-sm text-foreground/90 mt-1 font-semibold italic border-l-2 border-primary/50 pl-2">
                    {experience.summary}
                  </p>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-muted-foreground">
                {experience.period}
              </span>
              <p className="text-sm text-muted-foreground">
                {experience.location}
              </p>
            </div>
          </div>

          {/* Achievements */}
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex gap-3 text-muted-foreground">
                <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey from hands-on engineering to product leadership and entrepreneurship
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
