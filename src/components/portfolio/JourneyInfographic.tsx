import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Cpu, ChefHat, Globe, Compass, Boxes, Brain, GraduationCap, Award, Lightbulb, MapPin, Flag } from "lucide-react";
import { usePathPositions } from "@/hooks/use-path-positions";

// Timeline spans from 2010 to 2024 (14 years)
// t values are year-proportional: (year - 2010) / 14
const journeyMilestones = [
  {
    year: "2010",
    title: "Engineering Foundation",
    subtitle: "India & Sweden",
    description: "Deep grounding in electro-mechanical systems",
    icon: Cpu,
    t: 0.05, // Slight offset from start for visual clarity
  },
  {
    year: "2014",
    title: "M.S. Mechatronics",
    subtitle: "Sweden",
    description: "Advanced robotics & automation",
    icon: GraduationCap,
    t: 4 / 14, // ~0.286
  },
  {
    year: "2018",
    title: "Founded Rakaka",
    subtitle: "Deep-Tech Startup",
    description: "Autonomous IoT cooking system from scratch",
    icon: ChefHat,
    t: 8 / 14, // ~0.571
  },
  {
    year: "2021",
    title: "Patent Granted",
    subtitle: "IN 365893",
    description: "Automated Food Processor innovation",
    icon: Award,
    t: 11 / 14, // ~0.786
  },
  {
    year: "2023",
    title: "Solution Leader",
    subtitle: "Strategic Role",
    description: "Enterprise product strategy & delivery",
    icon: Compass,
    t: 13 / 14, // ~0.929
  },
  {
    year: "Present",
    title: "CTO & Product Architect",
    subtitle: "Strategic Leadership",
    description: "AI-native architecture & robotics systems",
    icon: Globe,
    t: 0.98, // Slight offset from end for visual clarity
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

// The road path definition - used for both rendering and position calculations
const ROAD_PATH = `M 200 40 
   C 200 90, 80 120, 80 180
   C 80 240, 320 300, 320 380
   C 320 460, 80 520, 80 600
   C 80 680, 320 740, 320 760`;

const VIEWBOX_WIDTH = 400;
const VIEWBOX_HEIGHT = 800;

interface MilestoneMarkerProps {
  milestone: typeof journeyMilestones[0];
  position: { x: number; y: number };
  index: number;
}

function MilestoneMarker({ milestone, position, index }: MilestoneMarkerProps) {
  const IconComponent = milestone.icon;
  // Place card on opposite side of where the road curves
  const isCardLeft = position.x > 50;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      <div className={`flex items-center gap-2 ${isCardLeft ? "flex-row-reverse" : "flex-row"}`}>
        {/* Content card */}
        <div 
          className={`w-[140px] md:w-[160px] p-2.5 md:p-3 rounded-xl bg-card border border-border/50 shadow-lg ${
            isCardLeft ? "text-right" : "text-left"
          }`}
        >
          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-primary/20 text-primary">
            {milestone.year}
          </span>
          <h4 className="font-display text-xs md:text-sm font-bold text-foreground leading-tight mt-1">
            {milestone.title}
          </h4>
          <p className="text-[10px] text-primary font-medium">{milestone.subtitle}</p>
          <p className="text-[9px] md:text-[10px] text-muted-foreground mt-1 leading-tight">
            {milestone.description}
          </p>
        </div>

        {/* Connector line */}
        <div 
          className={`w-4 md:w-6 h-0.5 bg-gradient-to-r ${
            isCardLeft ? "from-transparent to-primary" : "from-primary to-transparent"
          }`} 
        />

        {/* Milestone pin - centered exactly on the road */}
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="relative z-10 flex-shrink-0"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
            <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <MapPin className="absolute -bottom-1.5 md:-bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function RoadwayPath({ pathRef }: { pathRef: React.RefObject<SVGPathElement> }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Road shadow */}
      <motion.path
        d={ROAD_PATH}
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
        d={ROAD_PATH}
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="40"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Road center dashes - this is the path we measure against */}
      <motion.path
        ref={pathRef}
        d={ROAD_PATH}
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

export function JourneyInfographic() {
  const pathRef = useRef<SVGPathElement>(null);
  
  // Extract t values from milestones
  const tValues = useMemo(() => journeyMilestones.map(m => m.t), []);
  
  // Get computed positions along the path
  const positions = usePathPositions(pathRef, tValues, VIEWBOX_WIDTH, VIEWBOX_HEIGHT);

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
          {/* Fixed aspect ratio container matching the viewBox */}
          <div 
            className="relative w-full"
            style={{ aspectRatio: `${VIEWBOX_WIDTH} / ${VIEWBOX_HEIGHT}` }}
          >
            {/* Roadway SVG */}
            <RoadwayPath pathRef={pathRef} />

            {/* Milestone markers - only render when positions are computed */}
            {positions.length > 0 && journeyMilestones.map((milestone, index) => (
              <MilestoneMarker
                key={index}
                milestone={milestone}
                position={positions[index]}
                index={index}
              />
            ))}

            {/* Start indicator */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute flex flex-col items-center"
              style={{ left: "50%", top: "2%", transform: "translateX(-50%)" }}
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
