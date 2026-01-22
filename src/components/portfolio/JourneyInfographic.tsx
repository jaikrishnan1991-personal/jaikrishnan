import { motion } from "framer-motion";
import careerInfographic from "@/assets/career-infographic.png";

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
          Professional Evolution
        </h3>
        <p className="text-muted-foreground">A Decade of First-Principles Product Innovation</p>
      </div>

      {/* Infographic Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
      >
        <img
          src={careerInfographic}
          alt="Career evolution infographic showing journey from Mechatronics to AI Systems - featuring Foundational Engineering, Frshly, Rakaka, Deep Tech Robotics, and Product Leadership phases"
          className="w-full h-auto"
          loading="lazy"
        />
        
        {/* Subtle overlay gradient for dark theme integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
