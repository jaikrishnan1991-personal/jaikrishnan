import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Layout, Rocket, Cpu, Boxes, LucideIcon, RotateCcw } from "lucide-react";
import { portfolioData, CapabilityCategory } from "@/data/portfolio-data";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  layout: Layout,
  rocket: Rocket,
  cpu: Cpu,
  boxes: Boxes,
};

// Skill proficiency levels for visualization
const skillLevels: Record<string, number> = {
  "User Research": 95,
  "Problem Framing": 90,
  "Jobs-to-be-Done": 85,
  "Value Proposition Design": 88,
  "Opportunity Sizing": 82,
  "Product Vision": 92,
  "Product Lifecycle": 90,
  "PRDs": 95,
  "User Journeys": 90,
  "System Thinking": 88,
  "MVP Scoping": 92,
  "Trade-off Analysis": 85,
  "Roadmapping": 90,
  "Prioritization (RICE)": 88,
  "AI Product Management": 85,
  "GenAI Product Management": 82,
  "Technical Product Management": 90,
  "First-Principles Design": 95,
  "Modular Architectures": 88,
  "Hardware–Software Co-design": 90,
  "Platform Thinking": 85,
  "API-First Systems": 82,
  "Agile Product Delivery": 90,
  "Cross-functional Leadership": 92,
  "Feedback-driven Iteration": 88,
  "Design-for-Scale": 85,
  "Reliability & Maintainability": 88,
  "Scrum": 90,
  "Waterfall": 85,
  "Agile": 92,
  "Project Management": 88,
  "AI Application Integration": 85,
  "RAG-based Systems": 80,
  "Embedded Systems": 90,
  "Computer Vision": 85,
  "Cloud-Native Platforms": 82,
};

function SkillBar({ skill, delay }: { skill: string; delay: number }) {
  const level = skillLevels[skill] || 75;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay }}
      className="mb-3"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-foreground font-medium">{skill}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </motion.div>
  );
}

function FlipCard({ category, index }: { category: CapabilityCategory; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = iconMap[category.icon] || Compass;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 h-[400px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 rounded-2xl border border-border/50 bg-card p-6 flex flex-col items-center justify-center text-center shadow-lg backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6"
          >
            <IconComponent className="w-10 h-10 text-primary" />
          </motion.div>
          
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            {category.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-6">
            {category.skills.length} skills
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center max-h-24 overflow-hidden">
            {category.skills.slice(0, 4).map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs rounded-full bg-tag-bg text-tag-text font-medium"
              >
                {skill}
              </span>
            ))}
            {category.skills.length > 4 && (
              <span className="px-3 py-1.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                +{category.skills.length - 4} more
              </span>
            )}
          </div>
          
          <div className="absolute bottom-4 flex items-center gap-2 text-xs text-muted-foreground">
            <RotateCcw className="w-3 h-3" />
            Click to explore
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 rounded-2xl border border-border/50 bg-card shadow-lg backface-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center justify-between p-6 pb-2">
            <h3 className="font-display text-lg font-bold text-foreground">
              {category.title}
            </h3>
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <IconComponent className="w-4 h-4 text-primary" />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 pb-2">
            <AnimatePresence>
              {isFlipped && (
                <div className="space-y-1">
                  {category.skills.map((skill, idx) => (
                    <SkillBar key={skill} skill={skill} delay={idx * 0.05} />
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="p-4 bg-card border-t border-border/30 rounded-b-2xl flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <RotateCcw className="w-3 h-3" />
            Click to flip back
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Radar chart for overall skills overview
function SkillsRadar() {
  const categories = portfolioData.capabilities;
  const angleStep = (2 * Math.PI) / categories.length;
  const centerX = 150;
  const centerY = 150;
  const maxRadius = 120;

  // Calculate average skill level for each category
  const categoryLevels = categories.map((cat) => {
    const avg = cat.skills.reduce((sum, skill) => sum + (skillLevels[skill] || 75), 0) / cat.skills.length;
    return avg / 100;
  });

  // Generate polygon points
  const points = categoryLevels.map((level, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const radius = level * maxRadius;
    return `${centerX + radius * Math.cos(angle)},${centerY + radius * Math.sin(angle)}`;
  }).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center mb-12"
    >
      <h3 className="font-display text-xl font-semibold text-foreground mb-6">
        Skills Overview
      </h3>
      
      <div className="relative">
        <svg width="300" height="300" className="overflow-visible">
          {/* Grid circles */}
          {[0.25, 0.5, 0.75, 1].map((level, i) => (
            <circle
              key={i}
              cx={centerX}
              cy={centerY}
              r={level * maxRadius}
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              opacity={0.5}
            />
          ))}
          
          {/* Axis lines and labels */}
          {categories.map((cat, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x2 = centerX + maxRadius * Math.cos(angle);
            const y2 = centerY + maxRadius * Math.sin(angle);
            const labelX = centerX + (maxRadius + 30) * Math.cos(angle);
            const labelY = centerY + (maxRadius + 30) * Math.sin(angle);
            const IconComponent = iconMap[cat.icon] || Compass;
            
            return (
              <g key={i}>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={x2}
                  y2={y2}
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  opacity={0.5}
                />
                <foreignObject
                  x={labelX - 16}
                  y={labelY - 16}
                  width="32"
                  height="32"
                  className="overflow-visible"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-primary" />
                  </div>
                </foreignObject>
              </g>
            );
          })}
          
          {/* Data polygon */}
          <motion.polygon
            points={points}
            fill="hsl(var(--primary) / 0.2)"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          {/* Data points */}
          {categoryLevels.map((level, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + level * maxRadius * Math.cos(angle);
            const y = centerY + level * maxRadius * Math.sin(angle);
            
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="6"
                fill="hsl(var(--primary))"
                stroke="hsl(var(--background))"
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              />
            );
          })}
        </svg>
      </div>
      
      <p className="text-sm text-muted-foreground mt-4 text-center max-w-sm">
        Click any card below to explore detailed skill proficiencies
      </p>
    </motion.div>
  );
}

export function Capabilities() {
  const { capabilities } = portfolioData;

  return (
    <section id="capabilities" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Capabilities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning product strategy, execution, and deep technical expertise
          </p>
        </motion.div>

        {/* Skills Radar Chart */}
        <SkillsRadar />

        {/* Interactive Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((category, index) => (
            <FlipCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
