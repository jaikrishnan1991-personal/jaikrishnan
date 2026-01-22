import { motion } from "framer-motion";
import { Cpu, ChefHat, Globe, Compass, Boxes, Brain, GraduationCap, Award, Lightbulb } from "lucide-react";

const journeyPhases = [
  {
    year: "2010",
    endYear: "2017",
    title: "Foundational Systems Engineering",
    description: "Developed deep grounding in electro-mechanical systems across India and Germany.",
    icon: Cpu,
    color: "from-cyan-500 to-teal-500",
  },
  {
    year: "2018",
    endYear: "2023",
    title: "Entrepreneurship & Deep-Tech Founding",
    description: "Founded Rakaka Food Tech, designing an autonomous IoT cooking system from scratch.",
    icon: ChefHat,
    color: "from-orange-400 to-rose-500",
  },
  {
    year: "2023",
    endYear: "Present",
    title: "Strategic Product Leadership",
    description: "Leading AI-native architecture and robotics systems as CTO and Solution Leader.",
    icon: Globe,
    color: "from-violet-500 to-purple-600",
  },
];

const coreCapabilities = [
  {
    title: "Product Architecture & First-Principles",
    description: "Specializing in hardware-software co-design and modular, scalable system architectures.",
    icon: Boxes,
  },
  {
    title: "Technology Enablement (AI & Robotics)",
    description: "Integrating AI, Computer Vision, and RAG systems into high-constraint physical environments.",
    icon: Brain,
  },
  {
    title: "Discovery & Strategy Expertise",
    description: "Leveraging Jobs-to-be-Done and user research to translate ambiguity into clear roadmaps.",
    icon: Compass,
  },
];

const academicFoundation = [
  {
    label: "EDUCATION",
    value: "PGDM (Duke) & M.S. Mechatronics (Sweden)",
    icon: GraduationCap,
  },
  {
    label: "PATENTS",
    value: "Granted: Automated Food Processor (IN 365893)",
    icon: Award,
  },
  {
    label: "INNOVATION",
    value: "CV-based QR Recognition for Smart Dispensers",
    icon: Lightbulb,
  },
];

export function JourneyInfographic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          A Decade of First-Principles Product Innovation
        </h3>
        <p className="text-muted-foreground">The Professional Evolution (2010 – Present)</p>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Journey Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30 hidden md:block" />

            <div className="space-y-8">
              {journeyPhases.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex gap-4 md:gap-6"
                  >
                    {/* Icon */}
                    <div className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                          {phase.year} – {phase.endYear}
                        </span>
                      </div>
                      <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                        {phase.title}
                      </h4>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {phase.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Core Capabilities */}
        <div className="space-y-6">
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">
            Core Product Capabilities
          </h4>

          {coreCapabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground text-sm mb-1">
                    {capability.title}
                  </h5>
                  <p className="text-muted-foreground text-xs">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom: Academic & Innovation Foundation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-card via-card to-card border border-border/50"
      >
        <h4 className="font-display text-lg font-semibold text-foreground text-center mb-6">
          Academic & Innovation Foundation
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {academicFoundation.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-start gap-3 text-center md:text-left">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {item.label}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
