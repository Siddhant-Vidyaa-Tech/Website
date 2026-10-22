export interface IndustryData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  overview: string;
  challenges: { title: string; description: string }[];
  howWeHelp: { title: string; description: string }[];
  relevantServices: string[];
  faq: { question: string; answer: string }[];
}

export const industriesData: IndustryData[] = [
  {
    slug: "educational-publishers",
    title: "Educational Publishers",
    metaTitle: "Services for Educational Publishers | Vidyaa Tech",
    metaDescription:
      "Vidyaa Tech supports educational publishers with content development, editorial production, digital conversion, assessment creation and accessibility compliance at scale.",
    heroHeadline: "The Partner Educational Publishers Trust",
    heroSubtitle:
      "End-to-end content services for educational publishers—from manuscript to digital delivery—at the scale and quality your programmes demand.",
    overview:
      "Educational publishers face constant pressure to deliver more content, in more formats, more quickly—whilst maintaining the accuracy and quality that schools and learners depend on. Vidyaa Tech works alongside publishers as a trusted delivery partner, providing the specialist expertise, capacity and technology-enabled workflows to meet those demands.",
    challenges: [
      { title: "Scale & Capacity", description: "Major publishing programmes require significant human and technical resources that are difficult to staff permanently." },
      { title: "Digital Conversion", description: "Converting large legacy content libraries into modern XML, HTML5 and e-book formats is complex and time-consuming." },
      { title: "Accessibility Compliance", description: "Meeting WCAG 2.2 AA and ADA requirements across digital assets requires specialist expertise." },
      { title: "Quality at Volume", description: "Maintaining editorial and pedagogical quality across large-scale programmes demands rigorous processes." },
    ],
    howWeHelp: [
      { title: "Content at Scale", description: "We provide experienced content teams—writers, editors, subject-matter experts—who deliver to your style guide and standards." },
      { title: "Digital Production", description: "We manage XML, DITA, HTML5 and EPUB conversion with expert post-migration editorial QA." },
      { title: "Assessment Development", description: "We develop custom item banks and assessment content aligned to your content programmes." },
      { title: "Accessibility Services", description: "We audit, remediate and produce accessible content that meets regulatory requirements." },
    ],
    relevantServices: ["content-development", "editorial-production", "custom-assessment-creation", "tdx-migration", "digital-accessibility", "quality-assurance"],
    faq: [
      { question: "Can you work to our in-house style guide?", answer: "Yes. We align with your organisation's editorial style, voice and brand standards. We can also support the development of style guidelines." },
      { question: "Can you manage the full production workflow?", answer: "Yes. We can take responsibility for end-to-end production management, or integrate into your existing workflows at any stage." },
      { question: "How do you handle confidentiality?", answer: "We operate under standard NDA and confidentiality agreements, and our processes are designed to protect unpublished content." },
    ],
  },
  {
    slug: "k12-schools",
    title: "K–12 Schools & Districts",
    metaTitle: "Services for K–12 Schools & Districts | Vidyaa Tech",
    metaDescription:
      "Vidyaa Tech helps K–12 schools and districts with curriculum design, accessible educational content, e-learning development and assessment creation across all subjects and grade levels.",
    heroHeadline: "Supporting Schools With Content That Works in Classrooms",
    heroSubtitle:
      "Curriculum-aligned content, assessments and digital learning resources—created by experienced educators and designed for real classrooms.",
    overview:
      "Schools and districts need content that is standards-aligned, teacher-friendly and genuinely useful in classrooms. Vidyaa Tech works with K–12 education organisations to develop curriculum frameworks, instructional materials, assessments and digital learning resources that support teaching and improve student outcomes.",
    challenges: [
      { title: "Standards Alignment", description: "Keeping instructional materials aligned to evolving state and national standards requires constant review and updating." },
      { title: "Differentiation", description: "Classrooms include learners with widely varying needs—content must support differentiation and accessibility." },
      { title: "Assessment Quality", description: "Developing valid, reliable assessment tools that inform instruction is technically demanding without specialist expertise." },
      { title: "Digital Transition", description: "Moving from print to digital learning requires instructional design expertise alongside technical capability." },
    ],
    howWeHelp: [
      { title: "Curriculum & Content", description: "We design curriculum frameworks and develop standards-aligned instructional materials across all subjects and grade levels." },
      { title: "Assessment Creation", description: "We develop formative and summative assessment tools—from exit tickets to comprehensive unit tests." },
      { title: "Accessible Materials", description: "We ensure all educational content meets WCAG and accessibility requirements, supporting all learners." },
      { title: "Digital Learning Resources", description: "We build e-learning modules, interactive activities and educational video content for blended and online learning." },
    ],
    relevantServices: ["curriculum-design", "content-development", "custom-assessment-creation", "e-learning-solutions", "digital-accessibility", "interactive-content"],
    faq: [
      { question: "Which standards frameworks do you work with?", answer: "We work with Common Core, NGSS, state-specific standards and other US and international frameworks. We adapt to your district's requirements." },
      { question: "Can you support diverse learner needs?", answer: "Yes. We create differentiated materials and accessible content that supports learners across the full range of learning needs." },
      { question: "Do you work with existing curriculum?", answer: "Yes. We can review, update and supplement existing curriculum materials, or develop new programmes from scratch." },
    ],
  },
  {
    slug: "edtech",
    title: "EdTech Companies",
    metaTitle: "Services for EdTech Companies | Vidyaa Tech",
    metaDescription:
      "Vidyaa Tech helps EdTech companies build, scale and optimise their educational content, platforms and products—from interactive content and e-learning to accessibility compliance and specialist talent.",
    heroHeadline: "The Specialist Partner EdTech Companies Scale With",
    heroSubtitle:
      "Content, technology and specialist talent—everything EdTech companies need to build and scale high-quality digital learning products.",
    overview:
      "EdTech companies operate in a demanding environment—needing to move fast, maintain quality and comply with an expanding range of accessibility and regulatory requirements. Vidyaa Tech provides the specialist content, technical and talent services that enable EdTech companies to build better products, scale faster and maintain the quality their users expect.",
    challenges: [
      { title: "Content at Speed", description: "EdTech platforms require large volumes of high-quality educational content quickly and consistently." },
      { title: "Accessibility Compliance", description: "WCAG compliance, Section 508 and other accessibility requirements demand specialist expertise and ongoing attention." },
      { title: "Specialist Talent", description: "Finding experienced instructional designers, content specialists and EdTech developers is consistently challenging." },
      { title: "Platform QA", description: "Ensuring digital products work correctly across devices, browsers and accessibility tools requires rigorous testing." },
    ],
    howWeHelp: [
      { title: "Content Production", description: "We provide scalable content production services—subject experts, writers and instructional designers—to fuel platform growth." },
      { title: "Accessibility Compliance", description: "We audit, remediate and build accessible content and interfaces that meet WCAG 2.2 AA requirements." },
      { title: "Interactive & Video", description: "We design and develop interactive learning objects, simulations and educational video for digital platforms." },
      { title: "Specialist Staffing", description: "We place experienced EdTech professionals—content specialists, designers and developers—on contract or project bases." },
    ],
    relevantServices: ["e-learning-solutions", "interactive-content", "digital-accessibility", "educational-video-production", "quality-assurance", "talent-staffing"],
    faq: [
      { question: "Can you work within our existing platform and workflows?", answer: "Yes. We integrate with your existing tools, platforms and processes. We adapt to your workflow, not the other way around." },
      { question: "Do you support fast-turnaround content needs?", answer: "Yes. We maintain flexible capacity to support rapid content production requirements without sacrificing quality." },
      { question: "Can you help with our accessibility certification?", answer: "Yes. We support organisations in achieving VPAT documentation, accessibility audits and remediation to meet procurement requirements." },
    ],
  },
  {
    slug: "universities",
    title: "Universities & Higher Education",
    metaTitle: "Services for Universities & Higher Education | Vidyaa Tech",
    metaDescription:
      "Vidyaa Tech supports universities with online programme development, instructional design, accessibility compliance and e-learning solutions—helping institutions deliver quality digital education at scale.",
    heroHeadline: "Helping Universities Deliver Quality at Scale",
    heroSubtitle:
      "Online programme development, instructional design, accessibility compliance and digital learning solutions for universities and higher education institutions.",
    overview:
      "Universities are under growing pressure to deliver high-quality online and blended learning programmes that meet the expectations of modern students—whilst managing constrained budgets and complex institutional requirements. Vidyaa Tech provides the specialist expertise that higher education institutions need to develop, produce and maintain quality digital learning at scale.",
    challenges: [
      { title: "Online Programme Development", description: "Developing quality online programmes requires specialist instructional design alongside subject expertise." },
      { title: "Accessibility & Legal Compliance", description: "Higher education institutions face significant legal obligations around digital accessibility." },
      { title: "LMS Integration", description: "Integrating content with Canvas, Blackboard, Moodle and Brightspace requires both technical and pedagogical expertise." },
      { title: "Content Scale", description: "Large universities need to update and maintain vast libraries of digital learning content." },
    ],
    howWeHelp: [
      { title: "Instructional Design", description: "We design online courses and programmes applying evidence-based pedagogy and modern learner experience principles." },
      { title: "Accessibility Compliance", description: "We audit and remediate university digital content to meet WCAG 2.2 AA and institutional accessibility policies." },
      { title: "E-Learning Production", description: "We build SCORM-compliant, device-responsive e-learning modules for LMS delivery." },
      { title: "Content & Editorial", description: "We develop and edit academic and instructional content for online programmes across disciplines." },
    ],
    relevantServices: ["e-learning-solutions", "digital-accessibility", "curriculum-design", "content-development", "editorial-production", "it-solutions"],
    faq: [
      { question: "Which LMS platforms do you support?", answer: "We work with Canvas, Moodle, Blackboard, Brightspace, Sakai and other major LMS platforms." },
      { question: "Can you support accessibility audits for existing content?", answer: "Yes. We provide detailed WCAG 2.2 AA audits with prioritised remediation plans for existing digital content libraries." },
      { question: "Can you work to our institution's academic standards?", answer: "Yes. We adapt our processes to align with your institution's quality assurance frameworks, academic standards and brand guidelines." },
    ],
  },
  {
    slug: "corporate-learning",
    title: "Corporate Learning",
    metaTitle: "Corporate Learning Services | Vidyaa Tech",
    metaDescription: "Curriculum, digital learning, assessment and accessibility services for corporate learning teams.",
    heroHeadline: "Learning Experiences for a Changing Workplace",
    heroSubtitle: "Build clear, engaging and accessible learning for professional audiences.",
    overview: "Corporate learning teams need learning experiences that fit real work, meet different learner needs and connect to organisational goals. Vidyaa Tech supports programme design, learning content, assessment and digital delivery.",
    challenges: [
      { title: "Relevant Learning", description: "Translate complex workplace knowledge into focused, practical learning experiences." },
      { title: "Digital Delivery", description: "Design content that works across devices and learning platforms." },
      { title: "Measuring Progress", description: "Connect learning objectives with meaningful assessment and feedback." },
      { title: "Inclusive Experiences", description: "Make learning accessible to people with different needs and preferences." },
    ],
    howWeHelp: [
      { title: "Learning Design", description: "Plan learning pathways that align with audience needs and programme goals." },
      { title: "Digital Content", description: "Create clear learning materials, courses and interactive experiences." },
      { title: "Assessment", description: "Develop purposeful checks for understanding and practical application." },
      { title: "Accessibility & QA", description: "Review digital learning for usability, accessibility and quality." },
    ],
    relevantServices: ["curriculum-design", "content-development", "e-learning-solutions", "custom-assessment-creation", "digital-accessibility", "quality-assurance"],
    faq: [
      { question: "Can you support existing learning programmes?", answer: "Yes. We can review and improve existing materials or develop new learning experiences." },
      { question: "Can learning be delivered through our LMS?", answer: "We can prepare digital learning content for your platform and delivery requirements." },
      { question: "Do you support accessibility reviews?", answer: "Yes. Accessibility can be included in content design, production and quality review." },
    ],
  },
  {
    slug: "training-providers",
    title: "Training Organisations",
    metaTitle: "Services for Training Organisations | Vidyaa Tech",
    metaDescription: "Educational content, digital learning, assessment and quality services for training organisations.",
    heroHeadline: "Training That Moves Learners Forward",
    heroSubtitle: "Connect structured content, practice and assessment across in-person and digital delivery.",
    overview: "Training organisations balance consistent programme delivery with the needs of different learners and subjects. Vidyaa Tech supports the design and production of learning content, digital experiences and assessments for training programmes.",
    challenges: [
      { title: "Consistent Delivery", description: "Keep learning materials clear and consistent across courses and cohorts." },
      { title: "Blended Programmes", description: "Connect instructor-led sessions with useful digital learning resources." },
      { title: "Skills Practice", description: "Give learners opportunities to apply ideas and check their understanding." },
      { title: "Content Quality", description: "Maintain accuracy, accessibility and usability as programmes grow." },
    ],
    howWeHelp: [
      { title: "Programme Content", description: "Develop structured course materials aligned to the programme and audience." },
      { title: "Digital Learning", description: "Create courses and interactive learning resources for blended delivery." },
      { title: "Assessment Development", description: "Build practice activities and assessment items around learning goals." },
      { title: "Production & QA", description: "Prepare, validate and refine content for the required delivery format." },
    ],
    relevantServices: ["content-development", "curriculum-design", "e-learning-solutions", "interactive-content", "educational-video-production", "quality-assurance"],
    faq: [
      { question: "Can you develop materials for blended programmes?", answer: "Yes. We support learning resources across in-person and digital delivery." },
      { question: "Can you align content to our existing course structure?", answer: "Yes. We can work to your programme design, learning objectives and content standards." },
      { question: "Can you help prepare content for online delivery?", answer: "Yes. We create digital learning materials and prepare them for your platform requirements." },
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find((i) => i.slug === slug);
}
