export type TechLogoKey =
  | "java"
  | "springboot"
  | "springsecurity"
  | "springdata"
  | "hibernate"
  | "restapi"
  | "gradle"
  | "postgresql"
  | "sql"
  | "keycloak"
  | "oauth2"
  | "oidc"
  | "rbac"
  | "nextjs"
  | "react"
  | "typescript"
  | "angular"
  | "tailwindcss"
  | "html5"
  | "css3"
  | "git"
  | "github"
  | "intellijidea"
  | "vscode"
  | "swagger"
  | "postman"
  | "docker"
  | "cicd"
  | "microservices"
  | "fintech"
  | "security";

export interface TechItem {
  name: string;
  logo: TechLogoKey;
  category:
    | "Backend Development"
    | "Database & Data Management"
    | "Authentication & Security"
    | "Frontend & Web"
    | "Development Tools"
    | "Other Areas of Interest";
  prominent?: boolean;
  badge?: string;
  role?: string;
}

export interface ArchitectureLayer {
  layer: string;
  component: string;
  technologies: string[];
  responsibility: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Flagship System" | "Professional Onboarding Experience" | "Experimental / In Exploration";
  statusLabel: string;
  statusTone: "cyan" | "emerald" | "violet";
  period?: string;
  summary: string;
  detailedOverview: string;
  technologies: string[];
  highlights: string[];
  architectureLayers: ArchitectureLayer[];
  apiModules?: { method: "GET" | "POST" | "PUT" | "PATCH"; path: string; summary: string }[];
  githubUrl?: string;
  disclaimer?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Experience" | "Education";
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: "server" | "network" | "database" | "shield" | "building" | "workflow";
  tags: string[];
}

export const PROFILE = {
  fullName: "Jibrin Adamu Ahmed",
  handle: "jibrin-adamu-ahmed",
  initials: "JAA",
  title: "Backend Software Developer | Java & Spring Boot Engineer",
  shortRole: "Backend Software Developer",
  location: "Nigeria",
  education: "Computer Science, Ahmadu Bello University (ABU), Zaria, Nigeria",
  educationShort: "Ahmadu Bello University, Zaria",
  availability: "Open to Backend Engineering Roles & Technical Collaborations",
  headline: "I Build the Systems Behind the Software.",
  tagline: "Building reliable software systems, one API at a time.",
  supportingDescription:
    "I'm a backend-focused software developer passionate about building secure, maintainable and scalable software solutions. I work primarily with Java and Spring Boot, designing APIs, managing data, integrating authentication systems, and developing software that solves real business problems.",
  profileImagePath: "/images/profile.jpg",
  aboutParagraphs: [
    "I'm a Computer Science professional from Ahmadu Bello University, Zaria, with a strong interest in backend engineering and building practical software solutions.",
    "My primary focus is developing backend systems using Java and Spring Boot, working with relational databases, designing REST APIs, implementing authentication, and integrating different software components.",
    "My experience with ByteWorks Technology Solutions exposed me to structured software development practices and enterprise application development.",
    "I enjoy understanding how systems work behind the scenes, from database design and business logic to API security and system integration. I'm particularly interested in software solutions for businesses, financial technology, and digital infrastructure.",
  ],
  specPanel: [
    { label: "Name", value: "Jibrin Adamu Ahmed" },
    { label: "Location", value: "Nigeria" },
    { label: "Education", value: "Ahmadu Bello University" },
    { label: "Specialization", value: "Backend Development" },
    { label: "Primary Language", value: "Java" },
    { label: "Primary Framework", value: "Spring Boot" },
    { label: "Interests", value: "Enterprise Software, Fintech, API Engineering" },
  ],
};

export const SOCIAL_LINKS = {
  github: "https://github.com/jibrinamir27",
  githubDisplay: "github.com/jibrinamir27",
  // Replace placeholders below with your actual email and LinkedIn URL
  email: "jibrinamir27@gmail.com",
  linkedin: "www.linkedin.com/in/jibrin-adamu-32503127b",
};

export const HERO_TERMINAL_LINES = [
  { command: "whoami", output: "jibrin-adamu-ahmed" },
  { command: "role", output: "Backend Software Developer" },
  { command: "primary_stack", output: "Java | Spring Boot | PostgreSQL" },
  { command: "current_focus", output: "Enterprise Systems & API Engineering" },
  { command: "authentication", output: "Keycloak / OAuth2 / OpenID Connect" },
  { command: "status", output: "Building something meaningful..." },
];

export const SIMULATED_SYSTEM_STATUS = [
  { label: "Backend Services", status: "Operational", tone: "emerald" as const },
  { label: "Database", status: "Connected", tone: "cyan" as const },
  { label: "API", status: "Ready", tone: "emerald" as const },
  { label: "Environment", status: "Development", tone: "violet" as const },
];

export const CORE_STACK_PILLARS: {
  name: string;
  logo: TechLogoKey;
  subtitle: string;
  description: string;
  tags: string[];
  accentHex: string;
}[] = [
  {
    name: "Java",
    logo: "java",
    subtitle: "Primary Systems Language",
    description:
      "Object-oriented domain modelling, type-safe business logic, and maintainable server-side architecture using modern Java (including Java 21).",
    tags: ["Java 21", "OOP", "Clean Architecture"],
    accentHex: "#F89820",
  },
  {
    name: "Spring Boot",
    logo: "springboot",
    subtitle: "Core Application Framework",
    description:
      "Building structured RESTful services, layered controllers and services, validation pipelines, and enterprise-ready backend applications.",
    tags: ["REST Controllers", "Spring Security", "Spring Data JPA"],
    accentHex: "#6DB33F",
  },
  {
    name: "PostgreSQL",
    logo: "postgresql",
    subtitle: "Relational Data Store",
    description:
      "Normalized schema design, relational constraints, transactional persistence, and JPA/Hibernate entity mapping for business data.",
    tags: ["Relational Modelling", "Hibernate", "Transactions"],
    accentHex: "#4169E1",
  },
  {
    name: "Keycloak",
    logo: "keycloak",
    subtitle: "Identity & Access Management",
    description:
      "Centralized authentication, OAuth 2.0 / OpenID Connect token flows, and Role-Based Access Control (RBAC) across APIs and web clients.",
    tags: ["OAuth 2.0", "OpenID Connect", "RBAC"],
    accentHex: "#008AAA",
  },
];

export const TECH_CATEGORIES: {
  category: TechItem["category"];
  summary: string;
  items: TechItem[];
}[] = [
  {
    category: "Backend Development",
    summary: "Core server-side languages, frameworks, persistence layers, and build tooling.",
    items: [
      { name: "Java", logo: "java", category: "Backend Development", prominent: true, role: "Primary Language" },
      { name: "Spring Boot", logo: "springboot", category: "Backend Development", prominent: true, role: "Core Framework" },
      { name: "Spring Security", logo: "springsecurity", category: "Backend Development" },
      { name: "Spring Data JPA", logo: "springdata", category: "Backend Development" },
      { name: "Hibernate", logo: "hibernate", category: "Backend Development" },
      { name: "REST APIs", logo: "restapi", category: "Backend Development" },
      { name: "Gradle", logo: "gradle", category: "Backend Development" },
    ],
  },
  {
    category: "Database & Data Management",
    summary: "Structured data modelling, relational integrity, and query execution.",
    items: [
      { name: "PostgreSQL", logo: "postgresql", category: "Database & Data Management", prominent: true, role: "Primary RDBMS" },
      { name: "SQL", logo: "sql", category: "Database & Data Management" },
    ],
  },
  {
    category: "Authentication & Security",
    summary: "Centralized identity, token verification, and fine-grained endpoint protection.",
    items: [
      { name: "Keycloak", logo: "keycloak", category: "Authentication & Security", prominent: true, role: "IAM Provider" },
      { name: "OAuth 2.0", logo: "oauth2", category: "Authentication & Security" },
      { name: "OpenID Connect", logo: "oidc", category: "Authentication & Security" },
      { name: "Role-Based Access Control (RBAC)", logo: "rbac", category: "Authentication & Security" },
    ],
  },
  {
    category: "Frontend & Web",
    summary: "Modern web interfaces built to integrate cleanly with backend REST APIs.",
    items: [
      { name: "Next.js", logo: "nextjs", category: "Frontend & Web" },
      { name: "React", logo: "react", category: "Frontend & Web" },
      { name: "TypeScript", logo: "typescript", category: "Frontend & Web" },
      { name: "Angular", logo: "angular", category: "Frontend & Web" },
      { name: "Tailwind CSS", logo: "tailwindcss", category: "Frontend & Web" },
      { name: "HTML5", logo: "html5", category: "Frontend & Web" },
      { name: "CSS3", logo: "css3", category: "Frontend & Web" },
    ],
  },
  {
    category: "Development Tools",
    summary: "Daily engineering workflow, API testing, documentation, and version control.",
    items: [
      { name: "Git", logo: "git", category: "Development Tools" },
      { name: "GitHub", logo: "github", category: "Development Tools" },
      { name: "IntelliJ IDEA", logo: "intellijidea", category: "Development Tools" },
      { name: "Visual Studio Code", logo: "vscode", category: "Development Tools" },
      { name: "Swagger / OpenAPI", logo: "swagger", category: "Development Tools" },
      { name: "Postman", logo: "postman", category: "Development Tools" },
      {
        name: "Docker",
        logo: "docker",
        category: "Development Tools",
        badge: "Familiarity / Learning",
      },
    ],
  },
  {
    category: "Other Areas of Interest",
    summary: "Architectural concepts and domain areas actively studied and explored.",
    items: [
      { name: "CI/CD", logo: "cicd", category: "Other Areas of Interest" },
      { name: "Microservices", logo: "microservices", category: "Other Areas of Interest" },
      { name: "Fintech Infrastructure", logo: "fintech", category: "Other Areas of Interest" },
      { name: "API Integration", logo: "restapi", category: "Other Areas of Interest" },
      { name: "Application Security", logo: "security", category: "Other Areas of Interest" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    slug: "ccms",
    title: "Construction Company Management System",
    shortTitle: "CCMS",
    category: "Flagship System",
    statusLabel: "Active Engineering Project",
    statusTone: "cyan",
    summary:
      "A web-based information management system designed to support construction company operations through centralized management of projects, staff, workforce information, materials, documents, and related business activities.",
    detailedOverview:
      "CCMS is structured around a clean, layered Java 21 and Spring Boot backend paired with a Next.js + TypeScript frontend. It separates domain entities, Data Access Objects (DAOs), Data Transfer Objects (DTOs), service-layer business rules, and REST controllers while securing access through Keycloak and documenting endpoints with OpenAPI / Swagger.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA / Hibernate",
      "Keycloak",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Gradle",
      "OpenAPI / Swagger",
    ],
    highlights: [
      "Layered backend architecture with clear responsibility boundaries",
      "Entity, DAO, DTO, service, and controller separation",
      "RESTful API development with OpenAPI / Swagger documentation",
      "Relational database design backed by PostgreSQL and JPA / Hibernate",
      "Authentication and access control powered by Keycloak",
      "Document management and file upload workflows",
      "Full-stack integration with a Next.js, React, and TypeScript client",
    ],
    architectureLayers: [
      {
        layer: "01 // Presentation Client",
        component: "Web Workspace UI",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        responsibility:
          "Consumes versioned REST APIs, handles authenticated sessions, and provides operational views for projects, staff, materials, and documents.",
      },
      {
        layer: "02 // Identity & Security",
        component: "Auth & Access Boundary",
        technologies: ["Keycloak", "OAuth 2.0", "OpenID Connect"],
        responsibility:
          "Issues and validates access tokens before protected API routes execute business operations.",
      },
      {
        layer: "03 // Application & API",
        component: "Spring Boot Service Layer",
        technologies: ["Java 21", "Spring Boot", "REST APIs", "DTOs", "OpenAPI / Swagger"],
        responsibility:
          "Exposes typed REST endpoints, maps request/response DTOs, enforces business rules in services, and handles document upload logic.",
      },
      {
        layer: "04 // Persistence",
        component: "Relational Data Layer",
        technologies: ["Spring Data JPA", "Hibernate", "PostgreSQL", "Gradle"],
        responsibility:
          "Manages entity relationships, DAO/repository abstractions, and ACID persistence in PostgreSQL.",
      },
    ],
    apiModules: [
      { method: "GET", path: "/api/projects", summary: "Retrieve centralized construction project records" },
      { method: "POST", path: "/api/workforce", summary: "Register staff and workforce assignments" },
      { method: "GET", path: "/api/materials", summary: "Track materials inventory and operational usage" },
      { method: "POST", path: "/api/documents/upload", summary: "Upload and associate project documentation" },
    ],
    githubUrl: "https://github.com/jibrinamir27/CCMS",
  },
  {
    slug: "byteworks-backend-experience",
    title: "Backend API Development Experience",
    shortTitle: "ByteWorks Onboarding",
    category: "Professional Onboarding Experience",
    statusLabel: "Professional Development Experience",
    statusTone: "emerald",
    period: "June 2025 – October 2025",
    summary:
      "Worked on backend development using Java and Spring Boot within a structured software development environment during the ByteWorks Technology Solutions Software Developer Onboarding Programme in Abuja.",
    detailedOverview:
      "During this five-month structured engineering onboarding programme at ByteWorks Technology Solutions, I gained hands-on experience building enterprise-style backend modules with Java and Spring Boot, persisting relational data in PostgreSQL via Spring Data JPA, securing flows with Keycloak, and integrating with Angular frontends.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA",
      "Keycloak",
      "Angular",
      "Gradle",
      "REST APIs",
    ],
    highlights: [
      "Layered enterprise application architecture",
      "Domain entity and DTO modelling for clean API contracts",
      "Repository and DAO patterns with Spring Data JPA",
      "Service-layer business logic encapsulation",
      "REST controller design and request handling",
      "Keycloak authentication integration",
      "Relational database persistence with PostgreSQL",
    ],
    architectureLayers: [
      {
        layer: "01 // Client Integration",
        component: "Angular Application",
        technologies: ["Angular", "REST APIs"],
        responsibility:
          "Connected frontend workflows to structured backend REST endpoints using predictable DTO payloads.",
      },
      {
        layer: "02 // Authentication",
        component: "Identity Integration",
        technologies: ["Keycloak"],
        responsibility:
          "Integrated enterprise-style authentication flows into backend endpoints.",
      },
      {
        layer: "03 // Domain & Service",
        component: "Spring Boot Backend",
        technologies: ["Java", "Spring Boot", "Gradle"],
        responsibility:
          "Implemented REST controllers, service-layer business logic, and entity-to-DTO transformations.",
      },
      {
        layer: "04 // Data Access",
        component: "Repository & Persistence",
        technologies: ["Spring Data JPA", "PostgreSQL"],
        responsibility:
          "Built repository/DAO abstractions for reliable PostgreSQL persistence.",
      },
    ],
    disclaimer:
      "Presented strictly as practical professional onboarding experience at ByteWorks Technology Solutions (June 2025 – October 2025), not as an independently owned commercial product.",
  },
  {
    slug: "security-monitoring-integration",
    title: "Security Monitoring and Integration",
    shortTitle: "Security Hub (Exploration)",
    category: "Experimental / In Exploration",
    statusLabel: "Experimental · Area of Exploration",
    statusTone: "violet",
    summary:
      "An exploratory initiative focused on designing a reusable security monitoring and integration layer that connects authentication infrastructure with external threat-intelligence APIs.",
    detailedOverview:
      "Designed as an architectural exploration into how Java & Spring Boot applications can centralize authentication activity monitoring from Keycloak alongside automated IP reputation checks and threat alerting through CrowdSec, AbuseIPDB, and VirusTotal.",
    technologies: [
      "Spring Boot",
      "Keycloak",
      "PostgreSQL",
      "CrowdSec",
      "AbuseIPDB",
      "VirusTotal",
    ],
    highlights: [
      "Security event monitoring and audit log aggregation",
      "Automated IP reputation lookup workflows",
      "Configurable threat alert evaluation",
      "Authentication activity monitoring via Keycloak events",
      "Structured security reporting data model in PostgreSQL",
      "Integration adapters for external security APIs",
    ],
    architectureLayers: [
      {
        layer: "01 // Event Sources",
        component: "Auth & Telemetry Ingestion",
        technologies: ["Keycloak", "CrowdSec"],
        responsibility:
          "Captures authentication events and suspicious access signals for centralized inspection.",
      },
      {
        layer: "02 // Threat Enrichment",
        component: "External Security APIs",
        technologies: ["AbuseIPDB", "VirusTotal"],
        responsibility:
          "Queries external threat-intelligence endpoints for IP reputation and indicator verification.",
      },
      {
        layer: "03 // Correlation Engine",
        component: "Spring Boot Integration Core",
        technologies: ["Spring Boot"],
        responsibility:
          "Normalizes security events, evaluates alert thresholds, and coordinates integration adapters.",
      },
      {
        layer: "04 // Audit Store",
        component: "Security Reporting DB",
        technologies: ["PostgreSQL"],
        responsibility:
          "Persists historical security events, reputation scores, and alert reports.",
      },
    ],
    disclaimer:
      "Exploratory / In Development Concept: This entry represents an active area of architectural exploration and planned engineering work, not a completed production product.",
  },
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "byteworks-onboarding",
    period: "June 2025 – October 2025",
    role: "Software Developer Onboarding Programme",
    organization: "ByteWorks Technology Solutions",
    location: "Abuja, Nigeria",
    type: "Experience",
    description:
      "Participated in a structured software developer onboarding programme with practical exposure to backend and full-stack application development.",
    highlights: [
      "Applied layered software architecture across entities, DTOs, repositories, services, and REST controllers.",
      "Built backend features with Java, Spring Boot, JPA/Hibernate, and PostgreSQL.",
      "Worked with Keycloak authentication and connected REST APIs to Angular interfaces.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Angular",
      "JPA / Hibernate",
      "Keycloak",
      "REST APIs",
    ],
  },
  {
    id: "abu-zaria",
    period: "Academic Background",
    role: "Computer Science",
    organization: "Ahmadu Bello University (ABU)",
    location: "Zaria, Nigeria",
    type: "Education",
    description:
      "Academic background in computer science, software development, database systems, programming, and computing principles.",
    highlights: [
      "Foundational grounding in algorithms, data structures, and object-oriented programming.",
      "Study of relational database systems, software engineering principles, and system design.",
    ],
    technologies: ["Computer Science", "Database Systems", "Software Engineering", "Programming"],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "backend-development",
    title: "Backend Development",
    description:
      "Building structured backend applications, implementing business logic, and designing maintainable server-side systems.",
    icon: "server",
    tags: ["Java", "Spring Boot", "Layered Architecture"],
  },
  {
    id: "api-engineering",
    title: "API Engineering",
    description:
      "Designing RESTful APIs, integrating external services, and connecting frontend applications to backend infrastructure.",
    icon: "network",
    tags: ["REST APIs", "OpenAPI / Swagger", "DTO Contracts"],
  },
  {
    id: "database-design",
    title: "Database Design",
    description:
      "Working with relational databases, data modelling, persistence, and efficient application data management.",
    icon: "database",
    tags: ["PostgreSQL", "Spring Data JPA", "Hibernate"],
  },
  {
    id: "auth-security",
    title: "Authentication & Security",
    description:
      "Integrating authentication systems, managing access control, and securing application endpoints using Keycloak and related technologies.",
    icon: "shield",
    tags: ["Keycloak", "OAuth 2.0 / OIDC", "RBAC"],
  },
  {
    id: "enterprise-apps",
    title: "Enterprise Applications",
    description:
      "Developing software solutions that support business operations, information management, and organizational workflows.",
    icon: "building",
    tags: ["Business Workflows", "Document Systems", "Maintainability"],
  },
  {
    id: "system-integration",
    title: "System Integration",
    description:
      "Connecting applications, services, and external tools into cohesive software systems.",
    icon: "workflow",
    tags: ["External APIs", "Frontend/Backend", "Service Glue"],
  },
];

export const EXPLORING_AREAS = [
  {
    title: "Enterprise Java Development",
    detail: "Deepening mastery of modern Java idioms, concurrency fundamentals, and clean domain modelling.",
    tag: "Core Language",
  },
  {
    title: "Advanced Spring Boot Architecture",
    detail: "Exploring modular monoliths, resilience patterns, validation, and observability in Spring.",
    tag: "Framework Depth",
  },
  {
    title: "CI/CD & Software Deployment",
    detail: "Automated build pipelines, containerization workflows with Docker, and reliable release processes.",
    tag: "Delivery",
  },
  {
    title: "Fintech & Payment Infrastructure",
    detail: "Studying ledger integrity, idempotent API design, transaction safety, and payment integration patterns.",
    tag: "Domain Focus",
  },
  {
    title: "Application Security & Threat Monitoring",
    detail: "Integrating auth logs with threat intelligence tools like CrowdSec, AbuseIPDB, and VirusTotal.",
    tag: "Security",
  },
  {
    title: "System Integration",
    detail: "Designing dependable connectors between internal business services and third-party APIs.",
    tag: "Connectivity",
  },
  {
    title: "Building Reusable Software Products",
    detail: "Turning recurring operational and security challenges into clean, composable software modules.",
    tag: "Product Mindset",
  },
];
