import Image from "next/image";
import { Code2, MapPin, Star, Target, CircleCheck } from "lucide-react";
import TechBadge from "./TechBadge";

const TECNOLOGIAS = [
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "C#",
  ".NET",
  "Go",
  "Python",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "Vite",
  "APIs REST",
  "Microsserviços",
  "Git",
  "GitHub",
];

const DIFERENCIAIS = [
  "Desenvolvimento de APIs e integrações entre sistemas",
  "Experiência com front-end e back-end",
  "Arquitetura de microsserviços e regras de negócio",
  "Conhecimento em bancos de dados relacionais",
  "Perfil analítico, colaborativo e proativo",
  "Interesse em inovação, IA e automação",
];

function Cartao({
  icone: Icone,
  titulo,
  children,
}: {
  icone: typeof Code2;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-cyan-400/25 bg-slate-950/60 p-5 shadow-[0_0_30px_-12px] shadow-cyan-400/40 sm:p-6">
      <div className="flex items-center gap-3">
        <Icone size={28} className="shrink-0 text-cyan-400" />
        <div>
          <h3 className="text-lg font-bold sm:text-xl">{titulo}</h3>
          <div className="mt-1 h-0.5 w-12 rounded bg-cyan-400" />
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

// Seção "Quem sou eu" em HTML (antes era uma imagem com o texto embutido)
export default function SobreMim() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-gradient-to-br from-slate-950 via-[#020b1f] to-slate-950 p-6 shadow-2xl shadow-cyan-500/10 sm:p-10">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-500/25 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.35em] text-cyan-300/80">
            Tecnologia
            <br />
            Ideias
            <br />
            Soluções reais
          </p>

          <h2 className="mt-8 border-l-4 border-cyan-400 pl-4 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Quem{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              sou eu
            </span>
          </h2>

          <p className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Deividi Luccas
          </p>

          <p className="mt-2 text-sm uppercase tracking-[0.45em] text-cyan-300">
            Full Stack
          </p>

          <p className="mt-6 max-w-2xl leading-7 text-slate-300">
            Profissional com experiência em desenvolvimento web e foco em
            aplicações modernas, APIs REST, integrações entre sistemas e
            arquitetura de microsserviços. Atua com Node.js, TypeScript, React,
            Next.js, C#/.NET, Go, Python e bancos de dados relacionais, buscando
            sempre soluções eficientes, organizadas e com boa experiência para o
            usuário.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm self-center lg:order-none">
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-cyan-400/40 to-blue-600/40 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-[28px] border border-cyan-400/40">
            <Image
              src="/about/deividi.jpg"
              alt="Deividi Tiago Luccas"
              fill
              sizes="(max-width: 1024px) 384px, 384px"
              className="object-cover"
            />
          </div>
          <p className="relative mt-5 -rotate-3 text-center font-serif text-2xl italic text-cyan-300">
            Código hoje, soluções amanhã.
          </p>
        </div>
      </div>

      <div className="relative mt-10 grid gap-6">
        <Cartao icone={Code2} titulo="Principais Tecnologias">
          <div className="flex flex-wrap gap-2.5">
            {TECNOLOGIAS.map((tecnologia) => (
              <TechBadge
                key={tecnologia}
                nome={tecnologia}
                tamanho={18}
                className="rounded-xl border border-cyan-400/25 bg-slate-900/80 px-3.5 py-2 text-sm text-slate-200"
              />
            ))}
          </div>
        </Cartao>

        <Cartao icone={Star} titulo="Diferenciais">
          <ul className="grid gap-2.5 md:grid-cols-2">
            {DIFERENCIAIS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-300">
                <CircleCheck size={20} className="mt-0.5 shrink-0 text-cyan-400" />
                {item}
              </li>
            ))}
          </ul>
        </Cartao>

        <div className="grid gap-6 md:grid-cols-2">
          <Cartao icone={Target} titulo="Objetivo">
            <p className="leading-7 text-slate-300">
              Contribuir com projetos desafiadores, criando soluções
              tecnológicas de qualidade e evoluindo continuamente como
              desenvolvedor.
            </p>
          </Cartao>

          <Cartao icone={MapPin} titulo="Localização">
            <p className="text-lg text-slate-200">Araraquara/SP - Brasil</p>
          </Cartao>
        </div>
      </div>

      <div className="relative mt-10 flex flex-wrap items-center justify-between gap-4">
        <p className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.4em] text-cyan-300/80">
          <span className="h-px w-10 bg-cyan-400" />
          Evolução em cada linha de código
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
          Pessoas · Tecnologia · Processos · Resultados
        </p>
      </div>
    </div>
  );
}
