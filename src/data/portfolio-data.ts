// ============================================
// JAIKRISHNAN GANESHAN - PORTFOLIO DATA
// ============================================
// Edit this file to update all portfolio content.
// No code changes needed in components.
// ============================================

import resumeAsset from "@/assets/resume.pdf.asset.json";

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  portfolioUrl: string;
}

export interface PhilosophyItem {
  text: string;
  highlight?: boolean;
}

export interface CapabilityCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'founder' | 'leadership' | 'technical' | 'prior';
  summary: string;
  achievements: string[];
}

export interface Patent {
  title: string;
  number: string;
  description: string;
}

export interface Innovation {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  highlight?: string;
}

export interface Language {
  name: string;
  proficiency: 'native' | 'professional' | 'basic';
}

export interface PortfolioData {
  personal: PersonalInfo;
  philosophy: PhilosophyItem[];
  capabilities: CapabilityCategory[];
  experience: Experience[];
  patents: Patent[];
  innovations: Innovation[];
  education: Education[];
  languages: Language[];
}

// ============================================
// EDIT YOUR CONTENT BELOW
// ============================================

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jaikrishnan Ganeshan",
    title: "Product Architect",
    tagline: "Building AI-driven physical & digital systems from first principles — across Robotics, AI, and Platform Products",
    location: "Hyderabad, India",
    phone: "+91 9840984314",
    email: "jaikrishnan1991@gmail.com",
    linkedin: "https://linkedin.com/in/jaikrishnanganeshan",
    github: "https://github.com/jaikrishnan1991-personal",
    resumeUrl: resumeAsset.url,
    portfolioUrl: "https://docs.google.com/presentation/d/13UhZUHKB1PQhKN6eRoJE7jubAwtRd75e14L_6Z4uimU/export/pdf",
  },

  philosophy: [
    { text: "Product-centric leader with 10+ years of experience building complex technology products from first principles.", highlight: true },
    { text: "My approach begins with deep problem identification and user context, followed by structured product discovery, system architecture design, and iterative execution." },
    { text: "I specialize in converting ambiguous problem spaces into clear product narratives, scalable architectures, and intuitive user experiences — while remaining hands-on across technology, design, and delivery." },
  ],

  capabilities: [
    {
      title: "Problem Discovery & Strategy",
      icon: "compass",
      skills: [
        "User Research",
        "Problem Framing",
        "Jobs-to-be-Done",
        "Value Proposition Design",
        "Opportunity Sizing",
        "Product Vision",
        "Product Lifecycle",
      ],
    },
    {
      title: "Product Definition",
      icon: "layout",
      skills: [
        "PRDs",
        "User Journeys",
        "System Thinking",
        "MVP Scoping",
        "Trade-off Analysis",
        "Roadmapping",
        "Prioritization (RICE)",
        "AI Product Management",
        "GenAI Product Management",
        "Technical Product Management",
      ],
    },
    {
      title: "Product Architecture",
      icon: "boxes",
      skills: [
        "First-Principles Design",
        "Modular Architectures",
        "Hardware–Software Co-design",
        "Platform Thinking",
        "API-First Systems",
      ],
    },
    {
      title: "Delivery & Scaling",
      icon: "rocket",
      skills: [
        "Agile Product Delivery",
        "Cross-functional Leadership",
        "Feedback-driven Iteration",
        "Design-for-Scale",
        "Reliability & Maintainability",
        "Scrum",
        "Waterfall",
        "Agile",
        "Project Management",
      ],
    },
    {
      title: "Technology Enablement",
      icon: "cpu",
      skills: [
        "AI Application Integration",
        "RAG-based Systems",
        "Embedded Systems",
        "Computer Vision",
        "Cloud-Native Platforms",
      ],
    },
  ],

  experience: [
    {
      id: "evochef",
      title: "Head of Product",
      company: "EvoChef LLP",
      location: "India",
      period: "Apr 2026 – Present",
      type: "leadership",
      summary: "Owning an IP-led smart appliance portfolio and its connected-platform strategy.",
      achievements: [
        "Own the end-to-end lifecycle of an IP-led smart appliance portfolio — discovery, architecture, MVP validation, launch and scale-up — across mechanical, firmware, IoT, cloud, AI and UX layers.",
        "Leading the shift from standalone appliances to a connected smart-kitchen ecosystem, turning telemetry into analytics, remote diagnostics and subscription monetisation.",
        "Govern external engineering partners and the business-systems stack; support the founder on Series A positioning and international expansion.",
      ],
    },
    {
      id: "theknowledgehub",
      title: "Chief Technology Officer / Product Architect",
      company: "The Knowledge Hub",
      location: "Dubai / India (Remote)",
      period: "Mar 2025 – Present",
      type: "founder",
      summary: "Redesigning a legacy EdTech platform into an AI-native, outcome-driven learning ecosystem.",
      achievements: [
        "Reframed the product vision of a legacy EdTech platform by identifying core learner and educator pain points and realigning the platform around learning outcomes rather than features.",
        "Led end-to-end product discovery across learner journeys, content architecture, and platform modularity.",
        "Designed an AI-native product architecture enabling personalization while preserving pedagogical integrity.",
        "Established product-led execution practices, ensuring teams owned user outcomes instead of task delivery.",
      ],
    },
    {
      id: "brane",
      title: "Solution Leader (Product & Systems)",
      company: "Brane Group",
      location: "Hyderabad, India",
      period: "Sep 2023 – Apr 2025",
      type: "leadership",
      summary: "Led product definition for robotics and medical systems in high-constraint environments.",
      achievements: [
        "Owned product definition for robotics and medical systems operating in high-constraint physical environments.",
        "Translated real-world operational problems into system-level architectures spanning sensors, embedded control, AI perception, and user interfaces.",
        "Acted as the product bridge between clients, engineering teams, and regulatory requirements.",
      ],
    },
    {
      id: "rakaka",
      title: "Founder & Chief Executive Officer",
      company: "Rakaka Food Technology",
      location: "Chennai, India",
      period: "Dec 2018 – Aug 2023",
      type: "founder",
      summary: "Built and scaled a patented autonomous cooking platform from concept to pilot deployment.",
      achievements: [
        "Identified fundamental inefficiencies in commercial cooking workflows through ground-level observation and first-principles problem analysis.",
        "Conceived and built an autonomous cooking product from scratch — spanning mechanical design, embedded systems, software orchestration, and user experience.",
        "Led the complete product lifecycle: problem discovery → concept validation → MVP → iterative refinement → pilot-scale deployment.",
        "Designed a modular, scalable product architecture enabling rapid experimentation, evolution, and future extensibility.",
        "Personally owned product vision, system architecture, and key technical decisions while leading a multidisciplinary team.",
      ],
    },
    {
      id: "frshly",
      title: "Head of Innovation (Product & Design)",
      company: "Frshly",
      location: "Chennai, India",
      period: "Jul 2017 – Nov 2018",
      type: "technical",
      summary: "Pioneered smart food dispensing systems with computer vision-driven interactions.",
      achievements: [
        "Led product innovation for smart food dispensing systems, balancing reliability, speed, and intuitive user interaction.",
        "Designed computer-vision-driven interaction flows tightly coupled with embedded hardware behavior.",
      ],
    },
    {
      id: "replicant",
      title: "Technical Consultant (Product)",
      company: "Replicant Systems",
      location: "Hyderabad, India",
      period: "Sep 2024 – Oct 2024",
      type: "technical",
      summary: "Freelance product consulting for early-stage technology startups.",
      achievements: [
        "Provided freelance product management consulting for early-stage technology initiatives.",
        "Helped founders translate abstract ideas into structured problem statements, MVP definitions, and product roadmaps.",
        "Acted as a product sounding board across system architecture, feasibility analysis, and build sequencing.",
      ],
    },
    {
      id: "prior",
      title: "Foundational Engineering & Systems Roles",
      company: "Various Organizations",
      location: "India & Germany",
      period: "2010 – 2017",
      type: "prior",
      summary: "Built deep foundations in electro-mechanical systems and real-world manufacturing.",
      achievements: [
        "Built strong grounding in electro-mechanical systems, industrial design, and real-world manufacturing constraints — forming the basis for a first-principles product mindset.",
        "Worked across mechanical, electrical, and control systems, developing an intuitive understanding of how physical products behave outside ideal conditions.",
        "Collaborated with cross-functional teams in production, design, and field environments, shaping later strengths in system-level product architecture.",
        "Organizations: Consultant at Prikal Engineering; Electro-Mechanical Engineer at Gebr. Bode GmbH (Germany); Design Intern at Nutech Industrial; Trainee at SMA Railway Technology (Germany) and Ashok Leyland.",
      ],
    },
  ],

  patents: [
    {
      title: "Food Processor Machine with Ready-to-Cook Product",
      number: "IN 365893",
      description: "End-to-end productized electromechanical system integrating automated dispensing, heating, and cooking logic.",
    },
  ],

  innovations: [
    {
      title: "Computer Vision-based QR Recognition Systems",
      description: "Smart dispenser interaction system using computer vision for QR recognition.",
    },
  ],

  education: [
    {
      degree: "PGDM – Product Management",
      institution: "Duke University",
      location: "USA",
      year: "2024",
    },
    {
      degree: "M.S. Mechanical Engineering (Mechatronics)",
      institution: "Linköpings Universitet",
      location: "Sweden",
      year: "2015",
      highlight: "International Scholarship Finalist",
    },
    {
      degree: "B.Tech Mechatronics Engineering",
      institution: "SRM University",
      location: "India",
      year: "2013",
    },
  ],

  languages: [
    { name: "English", proficiency: "native" },
    { name: "Tamil", proficiency: "native" },
    { name: "Hindi", proficiency: "professional" },
    { name: "Swedish", proficiency: "basic" },
    { name: "German", proficiency: "basic" },
  ],
};
