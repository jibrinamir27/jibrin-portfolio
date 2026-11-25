import {
  siAngular,
  siCss,
  siDocker,
  siGit,
  siGithub,
  siGradle,
  siHibernate,
  siHtml5,
  siIntellijidea,
  siKeycloak,
  siNextdotjs,
  siOpenid,
  siPostgresql,
  siPostman,
  siReact,
  siSpring,
  siSpringboot,
  siSpringsecurity,
  siSwagger,
  siTailwindcss,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import {
  Boxes,
  Database,
  GitBranch,
  KeyRound,
  Landmark,
  LockKeyhole,
  Network,
  ShieldCheck,
} from "lucide-react";
import type { TechLogoKey } from "@/lib/portfolio-data";

const SIMPLE_ICON_MAP: Partial<Record<TechLogoKey, { icon: SimpleIcon; colorOverride?: string }>> = {
  springboot: { icon: siSpringboot },
  springsecurity: { icon: siSpringsecurity },
  springdata: { icon: siSpring },
  hibernate: { icon: siHibernate, colorOverride: "#BCAE79" },
  gradle: { icon: siGradle, colorOverride: "#38BDF8" },
  postgresql: { icon: siPostgresql, colorOverride: "#60A5FA" },
  keycloak: { icon: siKeycloak, colorOverride: "#22D3EE" },
  oidc: { icon: siOpenid },
  nextjs: { icon: siNextdotjs, colorOverride: "#F8FAFC" },
  react: { icon: siReact },
  typescript: { icon: siTypescript },
  angular: { icon: siAngular, colorOverride: "#F43F5E" },
  tailwindcss: { icon: siTailwindcss },
  html5: { icon: siHtml5 },
  css3: { icon: siCss, colorOverride: "#38BDF8" },
  git: { icon: siGit },
  github: { icon: siGithub, colorOverride: "#E2E8F0" },
  intellijidea: { icon: siIntellijidea, colorOverride: "#F472B6" },
  swagger: { icon: siSwagger },
  postman: { icon: siPostman },
  docker: { icon: siDocker },
};

export function TechLogo({
  logo,
  size = 20,
  className = "",
}: {
  logo: TechLogoKey;
  size?: number;
  className?: string;
}) {
  if (logo === "java") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M9.5 17.5C6.8 18.2 11.2 19.8 14.8 19C14.1 18.6 13.7 18.2 13.7 18.2C11.9 18.5 10.2 18.5 9.5 17.5Z"
          fill="#60A5FA"
        />
        <path
          d="M8.7 14.8C6.6 15.4 9.9 16.8 15.2 16C14.6 15.6 14.2 15.2 14.2 15.2C11.8 15.6 9.6 15.5 8.7 14.8Z"
          fill="#60A5FA"
        />
        <path
          d="M15.8 11.7C17.8 11.7 18.5 13.8 16.6 15.3C16.6 15.3 19.6 14.4 19.2 11.9C18.9 10.3 17.1 9.9 15.8 11.7Z"
          fill="#60A5FA"
        />
        <path
          d="M12.7 3C13.9 4.8 11.5 6.4 10.9 8.1C10.3 9.7 11.5 11.1 12.6 12.1C11.7 10.7 11.9 9.5 12.9 8.3C14 7 15.3 5.4 12.7 3Z"
          fill="#F89820"
        />
        <path
          d="M15.2 6.2C15.9 7.6 14.1 8.8 13.7 10.1C13.4 11.1 14 11.8 14.7 12.4C14.2 11.5 14.5 10.6 15.2 9.8C16 8.9 16.7 7.6 15.2 6.2Z"
          fill="#F89820"
        />
        <path
          d="M6.2 20.5C10.1 21.3 15.8 21.1 18.4 19.8C18.8 19.6 17.6 19.1 16.8 19C13.7 19.6 9.3 19.7 6.2 20.5Z"
          fill="#60A5FA"
        />
      </svg>
    );
  }

  if (logo === "vscode") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M17.5 2.5L21 4.2V19.8L17.5 21.5L9.2 13.9L5.2 17L3.5 16.1V7.9L5.2 7L9.2 10.1L17.5 2.5ZM17.5 6.6L11.6 12L17.5 17.4V6.6ZM5.2 9.9V14.1L7.6 12L5.2 9.9Z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  const mapped = SIMPLE_ICON_MAP[logo];
  if (mapped) {
    const fill = mapped.colorOverride ?? `#${mapped.icon.hex}`;
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        aria-hidden="true"
        className={className}
      >
        <path d={mapped.icon.path} />
      </svg>
    );
  }

  // Crisp Lucide fallbacks for conceptual architecture & security domains
  const iconProps = { size, className, "aria-hidden": true as const };
  switch (logo) {
    case "restapi":
      return <Network {...iconProps} style={{ color: "#38BDF8" }} />;
    case "sql":
      return <Database {...iconProps} style={{ color: "#60A5FA" }} />;
    case "oauth2":
      return <KeyRound {...iconProps} style={{ color: "#A78BFA" }} />;
    case "rbac":
      return <LockKeyhole {...iconProps} style={{ color: "#22D3EE" }} />;
    case "cicd":
      return <GitBranch {...iconProps} style={{ color: "#34D399" }} />;
    case "microservices":
      return <Boxes {...iconProps} style={{ color: "#38BDF8" }} />;
    case "fintech":
      return <Landmark {...iconProps} style={{ color: "#34D399" }} />;
    case "security":
    default:
      return <ShieldCheck {...iconProps} style={{ color: "#A78BFA" }} />;
  }
}
