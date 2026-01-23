import { motion } from "framer-motion";
import { Cpu, ChefHat, Globe, Compass, Boxes, Brain, GraduationCap, Award, Lightbulb, MapPin, Flag } from "lucide-react";

const journeyMilestones = [
  {
    year: "2010",
    title: "Engineering Foundation",
    subtitle: "India & Sweden",
    description: "Deep grounding in electro-mechanical systems",
    icon: Cpu,
    side: "left" as const,
  },
  {
    year: "2014",
    title: "M.S. Mechatronics",
    subtitle: "Sweden",
    description: "Advanced robotics & automation",
    icon: GraduationCap,
    side: "left" as const,
  },
  {
    year: "2018",
    title: "Founded Rakaka",
    subtitle: "Deep-Tech Startup",
    description: "Autonomous IoT cooking system from scratch",
    icon: ChefHat,
    side: "left" as const,
  },
  {
    year: "2021",
    title: "Patent Granted",
    subtitle: "IN 365893",
    description: "Automated Food Processor innovation",
    icon: Award,
    side: "left" as const,
  },
  {
    year: "Present",
    title: "CTO & Product Architect",
    subtitle: "Strategic Leadership",
    description: "AI-native architecture & robotics systems",
    icon: Globe,
    side: "right" as const,
  },
];

const coreCapabilities = [
  {
    title: "Product Architecture",
    description: "Hardware-software co-design & modular systems",
    icon: Boxes,
  },
  {
    title: "AI & Robotics",
    description: "CV, RAG systems in physical environments",
    icon: Brain,
  },
  {
    title: "Discovery & Strategy",
    description: "JTBD & user research to clear roadmaps",
    icon: Compass,
  },
];

function RoadwayPath() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 400 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Road shadow */}
      <motion.path
        d="M 200 0 
           C 200 50, 100 80, 100 130
           C 100 180, 300 220, 300 280
           C 300 340, 100 380, 100 440
           C 100 500, 300 540, 300 600
           C 300 660, 100 700, 100 760
           C 100 790, 200 800, 200 800"
        fill="none"
        stroke="hsl(var(--muted))"
        strokeWidth="50"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Main road */}
      <motion.path
        d="M 200 0 
           C 200 50, 100 80, 100 130
           C 100 180, 300 220, 300 280
           C 300 340, 100 380, 100 440
           C 100 500, 300 540, 300 600
           C 300 660, 100 700, 100 760
           C 100 790, 200 800, 200 800"
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="40"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Road center dashes */}
      <motion.path
        d="M 200 0 
           C 200 50, 100 80, 100 130
           C 100 180, 300 220, 300 280
           C 300 340, 100 380, 100 440
           C 100 500, 300 540, 300 600
           C 300 660, 100 700, 100 760
           C 100 790, 200 800, 200 800"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="20 15"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}

function MilestoneMarker({ milestone, index }: { milestone: typeof journeyMilestones[0]; index: number }) {
  const IconComponent = milestone.icon;
  const isLeft = milestone.side === "left";
  
  // Position calculations for the winding road (5 milestones)
  const positions = [
    { top: "8%", left: isLeft ? "5%" : "auto", right: isLeft ? "auto" : "5%" },
    { top: "22%", left: isLeft ? "5%" : "auto", right: isLeft ? "auto" : "5%" },
    { top: "40%", left: isLeft ? "5%" : "auto", right: isLeft ? "auto" : "5%" },
    { top: "58%", left: isLeft ? "5%" : "auto", right: isLeft ? "auto" : "5%" },
    { top: "78%", left: isLeft ? "5%" : "auto", right: isLeft ? "auto" : "5%" },
  ];

  const pos = positions[index] || positions[0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
      className={`absolute flex items-center gap-3 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      style={{ top: pos.top, left: pos.left, right: pos.right }}
    >
      {/* Milestone content card */}
      <div className={`max-w-[180px] p-3 rounded-xl bg-card border border-border/50 shadow-lg ${isLeft ? "text-left" : "text-right"}`}>
        <div className={`flex items-center gap-2 mb-1 ${isLeft ? "" : "flex-row-reverse"}`}>
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-primary/20 text-primary">
            {milestone.year}
          </span>
        </div>
        <h4 className="font-display text-sm font-bold text-foreground leading-tight">
          {milestone.title}
        </h4>
        <p className="text-[10px] text-primary font-medium">{milestone.subtitle}</p>
        <p className="text-[10px] text-muted-foreground mt-1 leading-tight">
          {milestone.description}
        </p>
      </div>

      {/* Connector line */}
      <div className={`w-8 h-0.5 bg-gradient-to-r ${isLeft ? "from-primary to-transparent" : "from-transparent to-primary"}`} />

      {/* Milestone pin */}
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="relative"
      >
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
          <IconComponent className="w-5 h-5 text-white" />
        </div>
        <MapPin className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 text-primary" />
      </motion.div>
    </motion.div>
  );
}

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
      <div className="text-center mb-8">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
          A Decade of First-Principles Product Innovation
        </h3>
        <p className="text-muted-foreground">The Professional Journey (2010 – Present)</p>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
        {/* Left: Roadway Timeline */}
        <div className="lg:col-span-2">
          <div className="relative h-[700px] md:h-[750px]">
            {/* Roadway SVG */}
            <RoadwayPath />

            {/* Milestone markers */}
            {journeyMilestones.map((milestone, index) => (
              <MilestoneMarker key={index} milestone={milestone} index={index} />
            ))}

            {/* Start indicator */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
                <Flag className="w-4 h-4 text-white" />
              </div>
              <span className="text-[10px] font-semibold text-green-500 mt-1">START</span>
            </motion.div>
          </div>
        </div>

        {/* Right: Core Capabilities */}
        <div className="space-y-4">
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
                className="flex gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
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

          {/* Innovation highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-primary" />
              <h5 className="font-semibold text-foreground text-sm">Innovation Highlights</h5>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>Patent: Automated Food Processor (IN 365893)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>CV-based QR Recognition for Smart Dispensers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span>PGDM (Duke) & M.S. Mechatronics (Sweden)</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
