import { Compass, Layout, Rocket, Cpu, Boxes, LucideIcon } from "lucide-react";
import { portfolioData, CapabilityCategory } from "@/data/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  layout: Layout,
  rocket: Rocket,
  cpu: Cpu,
  boxes: Boxes,
};

function CapabilityCard({ category }: { category: CapabilityCategory }) {
  const IconComponent = iconMap[category.icon] || Compass;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
      <CardHeader className="pb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="font-display text-xl">{category.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 text-sm rounded-full bg-tag-bg text-tag-text font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Capabilities() {
  const { capabilities } = portfolioData;

  return (
    <section id="capabilities" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning product strategy, execution, and deep technical expertise
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((category, index) => (
            <CapabilityCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
