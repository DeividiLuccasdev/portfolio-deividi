import type { ComponentType } from "react";
import {
  BrainCircuit,
  Database,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import {
  SiCss,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGo,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPytest,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

type Icone = ComponentType<{ size?: number; color?: string; className?: string }>;

// Ícone e cor oficial de cada tecnologia. Nomes sem entrada aparecem sem ícone.
const ICONES: Record<string, { icone: Icone; cor: string }> = {
  React: { icone: SiReact, cor: "#61DAFB" },
  "Next.js": { icone: SiNextdotjs, cor: "#FFFFFF" },
  TypeScript: { icone: SiTypescript, cor: "#3178C6" },
  JavaScript: { icone: SiJavascript, cor: "#F7DF1E" },
  HTML: { icone: SiHtml5, cor: "#E34F26" },
  HTML5: { icone: SiHtml5, cor: "#E34F26" },
  CSS: { icone: SiCss, cor: "#1572B6" },
  CSS3: { icone: SiCss, cor: "#1572B6" },
  "Tailwind CSS": { icone: SiTailwindcss, cor: "#06B6D4" },
  "Node.js": { icone: SiNodedotjs, cor: "#5FA04E" },
  Express: { icone: SiExpress, cor: "#FFFFFF" },
  Python: { icone: SiPython, cor: "#3776AB" },
  FastAPI: { icone: SiFastapi, cor: "#009688" },
  Flask: { icone: SiFlask, cor: "#FFFFFF" },
  "C#": { icone: TbBrandCSharp, cor: "#A179DC" },
  ".NET": { icone: SiDotnet, cor: "#8F6BD8" },
  Go: { icone: SiGo, cor: "#00ADD8" },
  PostgreSQL: { icone: SiPostgresql, cor: "#4169E1" },
  MySQL: { icone: SiMysql, cor: "#4479A1" },
  Prisma: { icone: SiPrisma, cor: "#FFFFFF" },
  "Prisma ORM": { icone: SiPrisma, cor: "#FFFFFF" },
  SQLAlchemy: { icone: SiSqlalchemy, cor: "#D71F00" },
  SQL: { icone: Database, cor: "#94A3B8" },
  "Modelagem de dados": { icone: Database, cor: "#94A3B8" },
  JWT: { icone: SiJsonwebtokens, cor: "#FB015B" },
  Pytest: { icone: SiPytest, cor: "#0A9EDC" },
  Docker: { icone: SiDocker, cor: "#2496ED" },
  Git: { icone: SiGit, cor: "#F05032" },
  GitHub: { icone: SiGithub, cor: "#FFFFFF" },
  Postman: { icone: SiPostman, cor: "#FF6C37" },
  "VS Code": { icone: VscVscode, cor: "#007ACC" },
  "Google Gemini": { icone: SiGooglegemini, cor: "#8E75B2" },
  "REST APIs": { icone: Server, cor: "#22D3EE" },
  "APIs REST": { icone: Server, cor: "#22D3EE" },
  "API Gateway": { icone: Network, cor: "#22D3EE" },
  "LLMs / IA": { icone: BrainCircuit, cor: "#C084FC" },
  "LLMs (Groq)": { icone: BrainCircuit, cor: "#C084FC" },
  Groq: { icone: BrainCircuit, cor: "#F55036" },
  Autenticação: { icone: ShieldCheck, cor: "#22D3EE" },
};

export default function TechBadge({
  nome,
  className,
  tamanho = 14,
}: {
  nome: string;
  className: string;
  tamanho?: number;
}) {
  const item = ICONES[nome];

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      {item && (
        <item.icone
          size={tamanho}
          color={item.cor}
          className="shrink-0"
        />
      )}
      {nome}
    </span>
  );
}
