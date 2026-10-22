export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  overview: string;
  whatWeDeliver: { title: string; description: string }[];
  whoWeWorkWith: string[];
  whyItMatters: string;
  faq: { question: string; answer: string }[];
  relatedServices: string[];
  category: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "curriculum-design",
    shortTitle: "Curriculum Design",
    title: "Curriculum Design",
    metaTitle: "Curriculum Design Services | Vidyaa Tech",
    metaDescription:
      "Standards-aligned curriculum design for K–12 and higher education. Vidyaa Tech creates curriculum frameworks, scope and sequence documents and learning progressions at scale.",
    heroHeadline: "Curriculum Frameworks That Drive Learning",
    heroSubtitle:
      "Standards-aligned curriculum design that gives teachers clarity, supports student progression and meets publisher and district requirements.",
    overview:
      "Effective curriculum design is the foundation of every high-quality educational programme. Vidyaa Tech works with publishers, school districts, EdTech companies and universities to create curriculum frameworks, scope and sequence documents, learning progressions and unit plans that are pedagogically sound, standards-aligned and practical to implement.",
    whatWeDeliver: [
      { title: "Curriculum Frameworks", description: "Comprehensive frameworks mapping learning goals, standards and progressions across grade bands." },
      { title: "Scope & Sequence Documents", description: "Detailed scope and sequence plans that organise content logically and support teacher planning." },
      { title: "Learning Progressions", description: "Clear articulations of how skills and concepts develop from foundational to advanced levels." },
      { title: "Unit & Lesson Plans", description: "Structured unit and lesson plans aligned to standards with built-in differentiation guidance." },
      { title: "Standards Mapping", description: "Detailed mapping of curriculum content to national, state or international learning standards." },
      { title: "Cross-Curricular Integration", description: "Design support for STEM, project-based learning and cross-disciplinary curriculum structures." },
    ],
    whoWeWorkWith: ["Educational Publishers", "K–12 School Districts", "Ministries of Education", "EdTech Companies", "Universities"],
    whyItMatters:
      "A well-designed curriculum reduces teacher workload, increases instructional coherence and supports measurable student outcomes. For publishers and EdTech companies, strong curriculum design is what makes content adoptable at scale.",
    faq: [
      { question: "Which standards do you work with?", answer: "We work with Common Core, NGSS, state-specific standards, Cambridge, IB and other international frameworks. We adapt to whatever standards your project requires." },
      { question: "Can you design curriculum for multiple grade levels simultaneously?", answer: "Yes. We have the capacity to manage multi-grade, multi-subject curriculum projects with consistent quality standards across all bands." },
      { question: "Do you provide subject-matter experts?", answer: "All curriculum design work is led by qualified educators and subject-matter experts with relevant teaching or academic experience." },
    ],
    relatedServices: ["content-development", "custom-assessment-creation", "editorial-production"],
    category: "Content",
  },
  {
    slug: "content-development",
    shortTitle: "Content Development",
    title: "Content Development",
    metaTitle: "Educational Content Development Services | Vidyaa Tech",
    metaDescription:
      "High-quality educational content development for publishers, EdTech companies and schools. Vidyaa Tech creates accurate, engaging content across all subjects and grade levels.",
    heroHeadline: "Content That Teaches, Engages and Scales",
    heroSubtitle:
      "From textbook chapters to digital learning assets—accurate, standards-aligned educational content developed by subject experts.",
    overview:
      "Creating high-quality educational content at scale requires both deep subject knowledge and robust production processes. Vidyaa Tech provides end-to-end content development services for publishers, EdTech companies, schools and universities—covering student texts, teacher materials, supplementary resources and digital learning assets across all subjects and grade levels.",
    whatWeDeliver: [
      { title: "Student-Facing Content", description: "Textbook chapters, reading passages, worked examples and student-facing instructional materials." },
      { title: "Teacher Resources", description: "Teacher editions, answer keys, instructional guides and professional development materials." },
      { title: "Supplementary Materials", description: "Practice sheets, extension activities, differentiated resources and supporting content." },
      { title: "Digital Learning Assets", description: "Content formatted for LMS delivery, e-learning platforms and web-based educational tools." },
      { title: "Subject-Specific Content", description: "Mathematics, science, English language arts, social studies, history, arts and more." },
      { title: "Adapted & Differentiated Content", description: "Content adapted for different reading levels, learning needs and accessibility requirements." },
    ],
    whoWeWorkWith: ["Educational Publishers", "K–12 Schools & Districts", "EdTech Companies", "Universities", "Training Organisations"],
    whyItMatters:
      "Content is the core of any educational product. Quality, accuracy and pedagogical soundness determine whether learners succeed—and whether products are adopted and trusted.",
    faq: [
      { question: "What subjects do you cover?", answer: "We cover the full K–12 curriculum including mathematics, science, English language arts, social studies, history, arts and specialist subjects." },
      { question: "How do you ensure content accuracy?", answer: "All content is reviewed by subject-matter experts and goes through a structured editorial and fact-checking process before delivery." },
      { question: "Can you work to our existing style guide?", answer: "Yes. We align with your organisation's style guide, voice and tone requirements. We can also help develop style guidelines if needed." },
    ],
    relatedServices: ["curriculum-design", "editorial-production", "quality-assurance"],
    category: "Content",
  },
  {
    slug: "custom-assessment-creation",
    shortTitle: "Custom Assessment",
    title: "Custom Assessment Creation",
    metaTitle: "Custom Assessment Creation Services | Vidyaa Tech",
    metaDescription:
      "Professionally developed, standards-aligned assessment items, test banks and formative assessments. Vidyaa Tech creates custom assessments for K–12, higher education and EdTech platforms.",
    heroHeadline: "Assessments That Measure What Matters",
    heroSubtitle:
      "Custom assessment items, test banks and formative tools developed by experienced assessment specialists—validated, aligned and ready to deploy.",
    overview:
      "Effective assessment is essential for measuring student progress and informing instruction. Vidyaa Tech creates custom assessment content for educational publishers, school districts, EdTech companies and universities—from individual test items to large-scale item banks, formative quizzes and summative assessments aligned to learning standards.",
    whatWeDeliver: [
      { title: "Selected Response Items", description: "Multiple choice, multiple select and technology-enhanced items designed to specific cognitive demand levels." },
      { title: "Constructed Response Items", description: "Short-answer, extended response and essay prompts with scoring rubrics." },
      { title: "Technology-Enhanced Items", description: "Interactive item types including drag-and-drop, hot spot, ordering and simulation-based tasks." },
      { title: "Item Banks", description: "Large-scale item banks organised by standard, grade, difficulty and item type." },
      { title: "Formative Assessment Tools", description: "Exit tickets, check-for-understanding questions, diagnostic assessments and progress-monitoring tools." },
      { title: "Rubrics & Scoring Guides", description: "Detailed scoring rubrics and anchor papers for constructed response and performance tasks." },
    ],
    whoWeWorkWith: ["Educational Publishers", "State & District Assessment Teams", "EdTech Companies", "Universities", "Test Preparation Providers"],
    whyItMatters:
      "Poor assessment design undermines educational measurement. Vidyaa Tech's assessment specialists ensure every item is valid, reliable, unbiased and pedagogically appropriate.",
    faq: [
      { question: "Which standards do your assessments align to?", answer: "We align assessments to Common Core, NGSS, state standards, ACT, SAT frameworks, Cambridge, IB and other national or international standards." },
      { question: "Do you handle bias and sensitivity review?", answer: "Yes. All assessment content undergoes bias and sensitivity review as part of our standard QA process." },
      { question: "Can you create assessments for adaptive platforms?", answer: "Yes. We develop items suitable for adaptive testing platforms, including calibrated difficulty levels and metadata tagging." },
    ],
    relatedServices: ["curriculum-design", "quality-assurance", "e-learning-solutions"],
    category: "Assessment",
  },
  {
    slug: "e-learning-solutions",
    shortTitle: "E-Learning Solutions",
    title: "E-Learning Solutions",
    metaTitle: "E-Learning Development Services | Vidyaa Tech",
    metaDescription:
      "End-to-end e-learning development for educational publishers, schools and EdTech companies. SCORM-compliant, accessible and engaging digital learning experiences.",
    heroHeadline: "E-Learning That Engages Learners at Scale",
    heroSubtitle:
      "From instructional design to SCORM delivery—end-to-end e-learning development for educational organisations that demand quality.",
    overview:
      "Vidyaa Tech designs and develops engaging, accessible e-learning experiences for educational publishers, EdTech companies, schools and universities. From initial instructional design through to platform-ready delivery, we manage the full e-learning production process—building courses that work on any device and meet modern accessibility standards.",
    whatWeDeliver: [
      { title: "Instructional Design", description: "Evidence-based instructional design applying cognitive load theory, scaffolding and active learning principles." },
      { title: "SCORM & xAPI Modules", description: "Standards-compliant e-learning modules compatible with all major LMS platforms." },
      { title: "Responsive Course Design", description: "Mobile-first, responsive courses that work seamlessly across desktop, tablet and mobile." },
      { title: "Scenario-Based Learning", description: "Realistic branching scenarios that contextualise learning and support skill application." },
      { title: "Assessments & Practice", description: "Integrated formative and summative assessment with immediate feedback." },
      { title: "Accessibility Compliance", description: "WCAG 2.2 AA-compliant courses with screen reader support and closed captions." },
    ],
    whoWeWorkWith: ["Educational Publishers", "EdTech Companies", "Universities", "Corporate Training Teams", "K–12 Districts"],
    whyItMatters:
      "Learners abandon poorly designed digital courses. Vidyaa Tech builds e-learning that combines strong pedagogy with engaging design—maximising completion and knowledge retention.",
    faq: [
      { question: "Which authoring tools do you use?", answer: "We work with Articulate Storyline, Rise, Adobe Captivate and custom HTML5 development depending on project requirements." },
      { question: "Can you migrate existing content to e-learning?", answer: "Yes. We convert existing printed or PDF content into engaging, interactive e-learning experiences." },
      { question: "Do you integrate with LMS platforms?", answer: "We build SCORM 1.2, SCORM 2004 and xAPI-compatible content for all major LMS platforms including Canvas, Moodle, Blackboard and Brightspace." },
    ],
    relatedServices: ["interactive-content", "digital-accessibility", "educational-video-production"],
    category: "Digital Learning",
  },
  {
    slug: "editorial-production",
    shortTitle: "Editorial & Production",
    title: "Editorial & Production Services",
    metaTitle: "Editorial & Production Services | Vidyaa Tech",
    metaDescription:
      "Professional editorial and production services for educational publishers. Copyediting, proofreading, fact-checking, permissions and print-ready production managed by experienced editorial teams.",
    heroHeadline: "Editorial Excellence for Educational Publishing",
    heroSubtitle:
      "End-to-end editorial and production workflows—from manuscript to final files—managed by experienced educational publishing professionals.",
    overview:
      "Vidyaa Tech provides comprehensive editorial and production services for educational publishers and content organisations. From copyediting and proofreading through to permissions management and print-ready file preparation, our experienced editorial teams bring publishing-house quality to every project.",
    whatWeDeliver: [
      { title: "Copyediting & Proofreading", description: "Thorough copyediting and proofreading to house style, with consistency and accuracy checks." },
      { title: "Fact-Checking", description: "Expert fact-checking across all subject areas to ensure educational accuracy." },
      { title: "Permissions & Rights Management", description: "Third-party permissions research, rights clearance and licensing management." },
      { title: "Developmental Editing", description: "Structural review and development editing to strengthen organisation and clarity." },
      { title: "Production Management", description: "End-to-end production coordination from manuscript receipt to final delivery." },
      { title: "Print-Ready File Preparation", description: "Layout-ready files prepared to printer specifications for physical and digital delivery." },
    ],
    whoWeWorkWith: ["Educational Publishers", "Content Agencies", "Universities", "School Districts", "EdTech Companies"],
    whyItMatters:
      "Editorial errors in educational content have real consequences—undermining trust, requiring costly reprints and damaging brand reputation. Vidyaa Tech's editorial teams hold content to the highest standard.",
    faq: [
      { question: "Which style guides do you work with?", answer: "We work with Chicago Manual of Style, APA, MLA and in-house publisher style guides. We can adapt to any house style." },
      { question: "Can you handle large-volume projects?", answer: "Yes. We are structured to manage large editorial programmes simultaneously without compromising turnaround times or quality." },
      { question: "Do you provide XML/DITA editing?", answer: "Yes. We support structured content editing in XML, DITA and other markup formats in addition to traditional editorial workflows." },
    ],
    relatedServices: ["content-development", "quality-assurance", "tdx-migration"],
    category: "Content",
  },
  {
    slug: "digital-accessibility",
    shortTitle: "Digital Accessibility",
    title: "Digital Accessibility",
    metaTitle: "Digital Accessibility Services for Education | Vidyaa Tech",
    metaDescription:
      "WCAG 2.2 AA compliance audits, accessible PDF creation and accessibility remediation for educational content and platforms. Vidyaa Tech makes education accessible to all learners.",
    heroHeadline: "Making Education Accessible to Every Learner",
    heroSubtitle:
      "WCAG 2.2 AA compliance, accessible PDF creation and inclusive design for digital educational content and platforms.",
    overview:
      "Digital accessibility is both a legal requirement and an educational imperative. Vidyaa Tech helps educational publishers, EdTech companies, schools and universities ensure their digital content and platforms are accessible to all learners—including those with visual, auditory, motor and cognitive disabilities.",
    whatWeDeliver: [
      { title: "WCAG 2.2 Compliance Audits", description: "Detailed accessibility audits against WCAG 2.0, 2.1 and 2.2 standards with prioritised remediation plans." },
      { title: "Accessible PDF Creation", description: "Properly tagged, screen reader-compatible PDF documents meeting PDF/UA standards." },
      { title: "Content Remediation", description: "Remediation of existing digital content to meet accessibility standards." },
      { title: "Alt Text & Description", description: "Expert image descriptions and alt text for complex educational diagrams, charts and illustrations." },
      { title: "Accessible Assessment Design", description: "Assessment design and review ensuring all learners can access and complete tasks." },
      { title: "Accessibility Consulting", description: "Strategic accessibility guidance for digital publishing workflows and platform development." },
    ],
    whoWeWorkWith: ["Educational Publishers", "EdTech Companies", "Universities", "K–12 Districts", "Government Education Bodies"],
    whyItMatters:
      "Inaccessible educational content excludes learners with disabilities and exposes organisations to legal risk. Vidyaa Tech builds accessibility into content from the start—not as an afterthought.",
    faq: [
      { question: "Which accessibility standards do you work to?", answer: "We work to WCAG 2.0, 2.1 and 2.2 at AA level, PDF/UA, EPUB Accessibility and Section 508. We stay current with evolving standards." },
      { question: "Can you make existing content accessible?", answer: "Yes. We provide remediation services for PDFs, HTML content, e-learning courses and digital platforms." },
      { question: "Do you provide accessibility training?", answer: "Yes. We offer training for editorial teams, designers and developers on creating accessible educational content." },
    ],
    relatedServices: ["e-learning-solutions", "content-development", "quality-assurance"],
    category: "Technology",
  },
  {
    slug: "interactive-content",
    shortTitle: "Interactive Content",
    title: "Interactive Content Development",
    metaTitle: "Interactive Educational Content Development | Vidyaa Tech",
    metaDescription:
      "Custom interactive educational content—simulations, drag-and-drop activities, gamified learning and branching scenarios. Vidyaa Tech builds engaging interactive learning objects.",
    heroHeadline: "Learning That Invites Participation",
    heroSubtitle:
      "Simulations, interactive exercises, gamified learning and branching scenarios that transform passive content into active learning experiences.",
    overview:
      "Interactive content drives significantly higher engagement and knowledge retention than static material. Vidyaa Tech designs and develops custom interactive learning objects for publishers, EdTech platforms and school programmes—from simple drag-and-drop activities to complex simulations and gamified learning pathways.",
    whatWeDeliver: [
      { title: "Interactive Simulations", description: "Science experiments, mathematical models and real-world simulations that let learners explore concepts." },
      { title: "Drag-and-Drop Activities", description: "Classification, sequencing and labelling activities that require active knowledge application." },
      { title: "Branching Scenarios", description: "Decision-tree scenarios that contextualise learning in realistic situations with meaningful consequences." },
      { title: "Gamified Learning", description: "Points, badges, leaderboards and challenge structures that motivate and reward learning progress." },
      { title: "Interactive Assessments", description: "Technology-enhanced assessment items including hot spot, ordering and simulation-based tasks." },
      { title: "Embedded Interactives", description: "HTML5 interactives that embed cleanly into LMS platforms, websites and e-books." },
    ],
    whoWeWorkWith: ["EdTech Companies", "Educational Publishers", "Universities", "K–12 Districts", "Corporate Learning Teams"],
    whyItMatters:
      "Research consistently shows that active learning produces better outcomes. Vidyaa Tech creates interactive content that applies established learning science principles to drive genuine comprehension.",
    faq: [
      { question: "What technologies do you develop with?", answer: "We develop interactive content in HTML5, CSS3 and JavaScript, with outputs compatible with SCORM, xAPI and LMS embed formats." },
      { question: "Can interactive content be made accessible?", answer: "Yes. All interactive content we develop meets WCAG 2.2 AA requirements, including keyboard navigation and screen reader compatibility." },
      { question: "Can you update existing interactives?", answer: "Yes. We can update, redesign or extend existing interactive content to meet new platform requirements or content updates." },
    ],
    relatedServices: ["e-learning-solutions", "educational-video-production", "digital-accessibility"],
    category: "Digital Learning",
  },
  {
    slug: "educational-video-production",
    shortTitle: "Educational Video",
    title: "Educational Video Production",
    metaTitle: "Educational Video Production Services | Vidyaa Tech",
    metaDescription:
      "Professional educational video production—explainer videos, instructional animations and screencasts. Vidyaa Tech produces high-quality educational video for publishers and EdTech platforms.",
    heroHeadline: "Video Learning That Sticks",
    heroSubtitle:
      "Explainer videos, instructional animations and screencasts produced to broadcast quality—designed to support learning, not just illustrate it.",
    overview:
      "Video is one of the most effective formats for delivering complex educational concepts—when it is purposefully designed and professionally produced. Vidyaa Tech creates educational videos that apply strong instructional design principles alongside high production values, delivering content that genuinely supports learning outcomes.",
    whatWeDeliver: [
      { title: "Explainer Videos", description: "Clear, concise animated or live-action videos explaining concepts, processes and skills." },
      { title: "Instructional Animations", description: "Professionally scripted and animated videos for complex concepts that benefit from visual explanation." },
      { title: "Screencast Tutorials", description: "Software demonstrations, platform walkthroughs and how-to tutorials." },
      { title: "Teacher-Facing Video", description: "Professional development videos, instructional strategy guides and teacher support content." },
      { title: "Lecture Capture & Editing", description: "Post-production editing of recorded lectures, webinars and live sessions." },
      { title: "Closed Captions & Transcripts", description: "Accurate captions and full transcripts for all video content, meeting accessibility requirements." },
    ],
    whoWeWorkWith: ["Educational Publishers", "EdTech Companies", "Universities", "K–12 Districts", "Corporate Learning Teams"],
    whyItMatters:
      "Poor-quality educational video wastes learner time and undermines credibility. Vidyaa Tech combines instructional design expertise with production quality to create video that actually teaches.",
    faq: [
      { question: "What is your video production process?", answer: "We follow a scriptwriting → storyboard → voiceover → animation/production → review → final delivery process, with client approval at each stage." },
      { question: "Do you provide voiceover artists?", answer: "Yes. We have access to a network of professional voiceover artists across multiple languages and accents." },
      { question: "What formats do you deliver in?", answer: "We deliver MP4, WebM and other formats optimised for web delivery, LMS embedding and broadcast." },
    ],
    relatedServices: ["e-learning-solutions", "interactive-content", "content-development"],
    category: "Digital Learning",
  },
  {
    slug: "tdx-migration",
    shortTitle: "TDX / Migration",
    title: "TDX / Content Migration",
    metaTitle: "TDX & Content Migration Services | Vidyaa Tech",
    metaDescription:
      "Seamless content transformation and migration for educational publishers. Vidyaa Tech converts legacy content into XML, HTML5, DITA and platform-specific formats with accuracy and speed.",
    heroHeadline: "Migrate Content Without Losing Quality",
    heroSubtitle:
      "Precise, efficient content transformation and migration—moving legacy educational content into modern formats without data loss or quality degradation.",
    overview:
      "Educational publishers and EdTech companies face a significant challenge in modernising large libraries of legacy content. Vidyaa Tech provides structured content transformation and migration services—converting existing material into XML, HTML5, DITA, EPUB and other digital formats using a combination of automated tooling and expert editorial review.",
    whatWeDeliver: [
      { title: "XML & DITA Conversion", description: "Conversion of legacy content into structured XML or DITA formats for content management systems." },
      { title: "HTML5 Transformation", description: "Converting print-based or PDF content into clean, semantic HTML5 for digital delivery." },
      { title: "EPUB & E-book Production", description: "Conversion to EPUB 3 and other e-book formats for digital publishing." },
      { title: "Platform Migration", description: "Content migration between LMS, CMS and publishing platform environments." },
      { title: "Metadata Tagging", description: "Systematic metadata application to support content discoverability and reuse." },
      { title: "Quality Verification", description: "Post-migration QA to ensure content fidelity, formatting accuracy and standards compliance." },
    ],
    whoWeWorkWith: ["Educational Publishers", "EdTech Companies", "Universities", "Content Repositories", "School Districts"],
    whyItMatters:
      "Content migration projects fail when accuracy and quality are sacrificed for speed. Vidyaa Tech's migration methodology ensures that every asset arrives at its destination complete, correct and ready to use.",
    faq: [
      { question: "Can you handle large-volume migrations?", answer: "Yes. We are equipped to manage migrations involving thousands of assets, with systematic QA at each stage." },
      { question: "Do you use automated or manual migration?", answer: "We use a hybrid approach—automated tooling for structural transformation combined with expert editorial review for accuracy." },
      { question: "Which source formats do you work from?", answer: "We work from InDesign, QuarkXPress, Word, PDF, legacy XML, HTML and other common publishing formats." },
    ],
    relatedServices: ["editorial-production", "quality-assurance", "it-solutions"],
    category: "Technology",
  },
  {
    slug: "quality-assurance",
    shortTitle: "Quality Assurance",
    title: "Quality Assurance & Testing",
    metaTitle: "Quality Assurance & Testing for Educational Content | Vidyaa Tech",
    metaDescription:
      "Rigorous QA and testing for educational content, e-learning platforms and digital products. Vidyaa Tech provides functional, pedagogical and accessibility testing for education organisations.",
    heroHeadline: "Quality You Can Rely On",
    heroSubtitle:
      "Multi-stage quality assurance covering content accuracy, technical functionality, accessibility compliance and pedagogical integrity.",
    overview:
      "In educational publishing and EdTech, quality errors are not just a production problem—they affect learner outcomes and organisational credibility. Vidyaa Tech provides comprehensive quality assurance services covering content review, functional testing, accessibility testing and pedagogical review for educational publishers, EdTech companies and school districts.",
    whatWeDeliver: [
      { title: "Content QA", description: "Review for factual accuracy, editorial consistency, standards alignment and brand compliance." },
      { title: "Functional Testing", description: "Systematic testing of digital products, interactive content and e-learning platforms." },
      { title: "Accessibility Testing", description: "WCAG 2.2 AA compliance testing using manual and automated methods." },
      { title: "Pedagogical Review", description: "Expert review of content for instructional quality, learning progression and age appropriateness." },
      { title: "Cross-Browser & Device Testing", description: "Compatibility testing across browsers, operating systems and device types." },
      { title: "Regression Testing", description: "Structured regression testing after content updates, platform releases or format changes." },
    ],
    whoWeWorkWith: ["Educational Publishers", "EdTech Companies", "K–12 Districts", "Universities", "Assessment Providers"],
    whyItMatters:
      "A single error in a widely distributed educational resource can undermine learner trust and require costly corrections. Vidyaa Tech's QA processes are built to catch problems before they reach learners.",
    faq: [
      { question: "Do you offer QA as a standalone service?", answer: "Yes. We provide QA services independently of content development—for projects produced internally or by third parties." },
      { question: "What does a typical QA process look like?", answer: "Our standard process covers content accuracy review, functional testing, accessibility testing and final sign-off. We adapt the process to your project type and risk profile." },
      { question: "Can you QA large-scale item banks?", answer: "Yes. We have systematic processes for reviewing large assessment item banks, including bias review, editorial accuracy and standards alignment." },
    ],
    relatedServices: ["content-development", "digital-accessibility", "editorial-production"],
    category: "Quality",
  },
  {
    slug: "it-solutions",
    shortTitle: "IT Solutions",
    title: "IT Solutions",
    metaTitle: "IT Solutions for Education | Vidyaa Tech",
    metaDescription:
      "Technology infrastructure, platform support and IT consulting for education organisations. Vidyaa Tech provides reliable IT solutions tailored to the needs of publishers, schools and EdTech companies.",
    heroHeadline: "Technology Infrastructure for Education",
    heroSubtitle:
      "Reliable IT solutions—from platform integration and system support to technology consulting—designed specifically for education organisations.",
    overview:
      "Educational technology requires infrastructure that is reliable, secure and built around the needs of educators and learners. Vidyaa Tech provides IT solutions for educational publishers, EdTech companies and schools—covering platform support, system integration, infrastructure management and technology consulting.",
    whatWeDeliver: [
      { title: "LMS Integration & Support", description: "Integration, configuration and ongoing support for Canvas, Moodle, Blackboard, Brightspace and other LMS platforms." },
      { title: "Content Management Systems", description: "CMS implementation, configuration and support for educational content workflows." },
      { title: "System Integration", description: "API integration between publishing tools, content repositories, assessment platforms and LMS systems." },
      { title: "Infrastructure Management", description: "Server management, cloud infrastructure and hosted services for education organisations." },
      { title: "Technology Consulting", description: "Strategic technology advisory for organisations selecting, implementing or scaling edtech platforms." },
      { title: "Technical Support", description: "Responsive first and second-line technical support for education teams and platforms." },
    ],
    whoWeWorkWith: ["Educational Publishers", "EdTech Companies", "K–12 Districts", "Universities", "Learning Organisations"],
    whyItMatters:
      "Unreliable technology disrupts learning and erodes trust. Vidyaa Tech's IT solutions are designed around the specific operational requirements of education organisations—not adapted from generic enterprise IT services.",
    faq: [
      { question: "Do you support cloud or on-premise deployments?", answer: "We support both cloud-based and on-premise deployments, as well as hybrid infrastructure models." },
      { question: "Can you integrate our existing tools?", answer: "Yes. We design and implement API integrations between publishing tools, assessment platforms, CMS and LMS environments." },
      { question: "Do you offer ongoing managed support?", answer: "Yes. We provide ongoing managed IT support services on a retainer or project basis." },
    ],
    relatedServices: ["tdx-migration", "e-learning-solutions", "talent-staffing"],
    category: "Technology",
  },
  {
    slug: "talent-staffing",
    shortTitle: "Talent & Staffing",
    title: "Talent & Staffing Solutions",
    metaTitle: "Education Talent & Staffing Solutions | Vidyaa Tech",
    metaDescription:
      "Specialist education talent on demand—instructional designers, subject-matter experts, editors, developers and project managers for EdTech and publishing projects.",
    heroHeadline: "The Right Education Talent, When You Need It",
    heroSubtitle:
      "Specialist education professionals—subject-matter experts, instructional designers, editors and developers—placed quickly and managed with care.",
    overview:
      "Finding experienced educational content professionals is a persistent challenge for publishers, EdTech companies and school districts. Vidyaa Tech provides specialist education talent on a project, contract or longer-term basis—giving organisations access to the expertise they need without the overhead of permanent hiring.",
    whatWeDeliver: [
      { title: "Subject-Matter Experts", description: "Qualified educators and academics in mathematics, science, ELA, social studies and specialist subjects." },
      { title: "Instructional Designers", description: "Experienced instructional designers for e-learning, curriculum and educational programme development." },
      { title: "Editorial Professionals", description: "Copyeditors, developmental editors and proofreaders with educational publishing backgrounds." },
      { title: "Project Managers", description: "Education project managers experienced in managing complex content and technology programmes." },
      { title: "Digital & Tech Specialists", description: "E-learning developers, accessibility specialists, LMS administrators and EdTech product professionals." },
      { title: "QA & Testing Specialists", description: "Content QA reviewers and functional testers with education domain knowledge." },
    ],
    whoWeWorkWith: ["Educational Publishers", "EdTech Companies", "K–12 Districts", "Universities", "Government Education Bodies"],
    whyItMatters:
      "Generic staffing agencies rarely understand the specialist requirements of educational publishing and EdTech. Vidyaa Tech sources talent that arrives already familiar with education sector standards, terminology and workflows.",
    faq: [
      { question: "How quickly can you place staff?", answer: "Depending on the specialism required, we can typically place contractors within one to two weeks. We maintain an active network of vetted education professionals." },
      { question: "Do you offer remote and on-site placement?", answer: "Yes. We place talent for remote, hybrid and on-site engagements depending on project requirements and location." },
      { question: "Can you support large-scale staffing requirements?", answer: "Yes. We can resource significant headcount requirements for major publishing programmes, launches or platform builds." },
    ],
    relatedServices: ["content-development", "curriculum-design", "quality-assurance"],
    category: "People",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
