// ============================================
// JAIKRISHNAN GANESHAN - PORTFOLIO DATA
// ============================================
// Edit this file to update all portfolio content.
// No code changes needed in components.
// ============================================

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
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
    title: "Product Leader & Founder",
    tagline: "Product-Centric Founder — First-Principles Thinker — Robotics · AI · Platform Products",
    location: "Hyderabad, India",
    phone: "+91 9840984314",
    email: "jaikrishnan1991@gmail.com",
    linkedin: "https://linkedin.com/in/jaikrishnanganeshan",
  },

  philosophy: [
    { text: "Products succeed when they do one thing exceptionally well for a clearly defined user." },
    { text: "Every worthwhile product starts with a problem statement validated through direct user observation.", highlight: true },
    { text: "Build the smallest thing that tests the riskiest assumption first." },
    { text: "Scalability is not a first-sprint concern—product-market fit is." },
    { text: "Good product managers own outcomes, not feature lists." },
  ],

  capabilities: [
    {
      title: "Problem Discovery & Strategy",
      icon: "compass",
      skills: [
        "User Research & Observation",
        "Jobs-to-be-Done Analysis",
        "Market Sizing & Opportunity Mapping",
        "Competitive Positioning",
        "Business Model Design",
      ],
    },
    {
      title: "Product Definition",
      icon: "layout",
      skills: [
        "PRDs & User Stories",
        "Wireframing & Prototyping",
        "Prioritization Frameworks",
        "MVP Scoping",
        "Feature Trade-off Analysis",
      ],
    },
    {
      title: "Delivery & Scaling",
      icon: "rocket",
      skills: [
        "Agile & Scrum Leadership",
        "Cross-functional Team Alignment",
        "Launch Planning & GTM",
        "Metrics & A/B Testing",
        "Post-launch Iteration",
      ],
    },
    {
      title: "Technology Enablement",
      icon: "cpu",
      skills: [
        "Robotics & Mechatronics",
        "Embedded Systems (ARM Cortex)",
        "Computer Vision & AI/ML",
        "Cloud Architecture (AWS)",
        "IoT & Edge Computing",
      ],
    },
  ],

  experience: [
    {
      id: "theknowledgehub",
      title: "CPO",
      company: "The Knowledge Hub",
      location: "Hyderabad",
      period: "Jul 2024 – Present",
      type: "founder",
      achievements: [
        "Building AI-driven EdTech platform to democratize quality education across tier-2/3 cities",
        "Defined product vision, roadmap, and GTM strategy from zero to pilot launch",
        "Led cross-functional team of 8 across engineering, content, and design",
        "Achieved 2,000+ early-access sign-ups within first 3 months of soft launch",
      ],
    },
    {
      id: "brane",
      title: "Associate Director – Product",
      company: "Brane Group",
      location: "Hyderabad",
      period: "Aug 2023 – Jul 2024",
      type: "leadership",
      achievements: [
        "Led product strategy for enterprise data-management SaaS serving Fortune 500 clients",
        "Drove 35% improvement in user activation through onboarding redesign",
        "Introduced OKR-based planning, reducing feature-cycle time by 25%",
        "Collaborated with sales to close 3 enterprise deals worth $1.2M ARR",
      ],
    },
    {
      id: "rakaka",
      title: "Founder & CEO",
      company: "Rakaka Food Technology",
      location: "Hyderabad",
      period: "Feb 2020 – Jul 2023",
      type: "founder",
      achievements: [
        "Invented patented autonomous cooking robot capable of preparing 200+ Indian dishes",
        "Secured $600K seed funding; scaled to 15-member engineering & ops team",
        "Deployed 12 commercial units across cloud-kitchen & QSR pilots",
        "Filed and obtained Indian Patent (IN 365893) for core machine design",
      ],
    },
    {
      id: "frshly",
      title: "Head of Innovations",
      company: "Frshly (Food-tech Startup)",
      location: "Hyderabad",
      period: "Jun 2017 – Jan 2020",
      type: "founder",
      achievements: [
        "Built IoT-enabled smart dispensers for fresh beverages in corporate cafeterias",
        "Developed end-to-end embedded firmware, cloud backend, and consumer app",
        "Scaled to 50+ dispenser deployments serving 10K+ daily transactions",
        "Pioneered computer-vision QR recognition system for contactless payments",
      ],
    },
    {
      id: "replicant",
      title: "Mechatronics Engineer",
      company: "Replicant Systems",
      location: "Sweden → India",
      period: "Aug 2015 – May 2017",
      type: "technical",
      achievements: [
        "Designed motion-control algorithms for industrial pick-and-place robots",
        "Developed embedded firmware on ARM Cortex-M platforms using C/C++",
        "Integrated ROS-based perception stack with 6-DOF manipulators",
        "Contributed to 2 successful product launches in European manufacturing sector",
      ],
    },
    {
      id: "prior",
      title: "Prior Experience",
      company: "Various",
      location: "India",
      period: "2010 – 2015",
      type: "prior",
      achievements: [
        "Engineering Intern – Mahindra & Mahindra (Automotive R&D)",
        "Research Assistant – SRM University Robotics Lab",
        "Freelance Embedded Developer – Smart-home prototyping projects",
      ],
    },
  ],

  patents: [
    {
      title: "Food Processor Machine",
      number: "IN 365893",
      description: "Autonomous cooking system with multi-station ingredient handling, precision thermal control, and recipe-driven automation for Indian cuisine preparation.",
    },
  ],

  innovations: [
    {
      title: "Computer Vision QR Recognition",
      description: "Proprietary low-latency QR detection system optimized for embedded hardware, enabling sub-100ms contactless payment authentication in high-throughput environments.",
    },
  ],

  education: [
    {
      degree: "Post Graduate Diploma in Product Management",
      institution: "Duke University (Online)",
      location: "USA",
      year: "2024",
    },
    {
      degree: "M.S. Mechatronics Engineering",
      institution: "Linköping University",
      location: "Sweden",
      year: "2015",
      highlight: "Swedish Institute Scholarship",
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
