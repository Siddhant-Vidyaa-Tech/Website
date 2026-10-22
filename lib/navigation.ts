export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export const navigation: NavItem[] = [
  {
    label: "What We Do",
    href: "/services",
    children: [
      { label: "Curriculum Design", href: "/services/curriculum-design", description: "Standards-aligned curriculum frameworks" },
      { label: "Content Development", href: "/services/content-development", description: "High-quality educational content at scale" },
      { label: "Custom Assessment Creation", href: "/services/custom-assessment-creation", description: "Rigorous, validated assessment items" },
      { label: "E-Learning Solutions", href: "/services/e-learning-solutions", description: "Engaging digital learning experiences" },
      { label: "Editorial & Production", href: "/services/editorial-production", description: "End-to-end editorial workflows" },
      { label: "Digital Accessibility", href: "/services/digital-accessibility", description: "WCAG-compliant accessible content" },
      { label: "Interactive Content", href: "/services/interactive-content", description: "Engaging interactive learning objects" },
      { label: "Educational Video", href: "/services/educational-video-production", description: "Professional educational video production" },
      { label: "TDX / Content Migration", href: "/services/tdx-migration", description: "Seamless content transformation" },
      { label: "Quality Assurance", href: "/services/quality-assurance", description: "Rigorous QA and testing processes" },
      { label: "IT Solutions", href: "/services/it-solutions", description: "Technology infrastructure and support" },
      { label: "Talent & Staffing", href: "/services/talent-staffing", description: "Specialist education talent" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Educational Publishers", href: "/industries/educational-publishers", description: "Supporting leading publishers" },
      { label: "K–12 Schools", href: "/industries/k12-schools", description: "Curriculum and content for schools" },
      { label: "EdTech Companies", href: "/industries/edtech", description: "Technology-enabled EdTech solutions" },
      { label: "Universities", href: "/industries/universities", description: "Higher education content and services" },
      { label: "Corporate Learning", href: "/industries/corporate-learning", description: "Digital learning and assessment for workforces" },
      { label: "Training Organisations", href: "/industries/training-providers", description: "Course content and learning delivery support" },
    ],
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Resources",
    href: "/resources",
  },
];
