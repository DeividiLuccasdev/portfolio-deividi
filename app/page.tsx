"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Mail,
  Menu,
  Server,
  Smartphone,
  X,
} from "lucide-react";

const tecnologias = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "PostgreSQL",
  "Prisma",
  "REST APIs",
  "Gemini AI",
  "Git",
  "Docker",
];

const screenshots = [
  {
    src: "/projects/gasto-na-foto/dashboard.png",
    nome: "Dashboard",
  },
  {
    src: "/projects/gasto-na-foto/analise-comprovante.png",
    nome: "Análise com IA",
  },
  {
    src: "/projects/gasto-na-foto/login.png",
    nome: "Login",
  },
];

const gruposTecnologias = [
  {
    titulo: "Frontend",
    icone: Code2,
    tecnologias: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    titulo: "Backend",
    icone: Server,
    tecnologias: [
      "Node.js",
      "Express",
      "Python",
      "Flask",
      "Go",
      "APIs REST",
      "JWT",
    ],
  },
  {
    titulo: "Banco de dados",
    icone: Database,
    tecnologias: [
      "PostgreSQL",
      "MySQL",
      "SQL",
      "Prisma ORM",
      "Modelagem de dados",
    ],
  },
  {
    titulo: "Ferramentas & IA",
    icone: BrainCircuit,
    tecnologias: [
      "Google Gemini",
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
    ],
  },
];

const destaques = [
  {
    titulo: "Full Stack",
    subtitulo: "Frontend + Backend",
    descricao:
      "Desenvolvimento completo de aplicações, da interface ao backend e banco de dados.",
    icone: Layers3,
  },
  {
    titulo: "REST APIs",
    subtitulo: "Integrações",
    descricao:
      "Construção e consumo de APIs para integração entre sistemas e regras de negócio.",
    icone: Server,
  },
  {
    titulo: "IA",
    subtitulo: "Gemini",
    descricao:
      "Integração com Inteligência Artificial para automação, análise e ganho de produtividade.",
    icone: BrainCircuit,
  },
  {
    titulo: "Mobile-first",
    subtitulo: "Responsividade",
    descricao:
      "Interfaces pensadas para funcionar bem no celular, tablet e desktop.",
    icone: Smartphone,
  },
];

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [progresso, setProgresso] = useState(0);
  const [mostrarTopo, setMostrarTopo] = useState(false);
  const [screenshotAtiva, setScreenshotAtiva] = useState(0);

  useEffect(() => {
    function atualizarScroll() {
      const altura =
        document.documentElement.scrollHeight - window.innerHeight;

      const atual =
        altura > 0 ? (window.scrollY / altura) * 100 : 0;

      setProgresso(atual);
      setMostrarTopo(window.scrollY > 600);
    }

    atualizarScroll();

    window.addEventListener("scroll", atualizarScroll);

    return () => {
      window.removeEventListener("scroll", atualizarScroll);
    };
  }, []);

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Barra de progresso */}
      <div
        className="fixed left-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        style={{ width: `${progresso}%` }}
      />

      {/* Fundo */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="grid-background absolute inset-0 opacity-30" />
      </div>

      {/* NAV */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.07] bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="text-xl font-black tracking-tight">
            Deividi
            <span className="text-cyan-400">.dev</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#sobre" className="nav-link">
              Sobre
            </a>

            <a href="#tecnologias" className="nav-link">
              Tecnologias
            </a>

            <a href="#projetos" className="nav-link">
              Projetos
            </a>

            <a href="#experiencia" className="nav-link">
              Experiência
            </a>

            <a href="#contato" className="nav-link">
              Contato
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://www.linkedin.com/in/deividi-luccas-0ab589227/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-400/20"
            >
              LinkedIn
            </a>

            <a
              href="/curriculo-deividi.pdf"
              download
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/20"
            >
              Baixar currículo
            </a>

            <a
              href="https://github.com/DeividiLuccasdev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <Code2 size={17} />
              GitHub
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuAberto(!menuAberto)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label="Abrir menu"
          >
            {menuAberto ? <X /> : <Menu />}
          </button>
        </nav>

        {menuAberto && (
          <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-slate-300">
              <a onClick={fecharMenu} href="#sobre">
                Sobre
              </a>

              <a onClick={fecharMenu} href="#tecnologias">
                Tecnologias
              </a>

              <a onClick={fecharMenu} href="#projetos">
                Projetos
              </a>

              <a onClick={fecharMenu} href="#experiencia">
                Experiência
              </a>

              <a onClick={fecharMenu} href="#contato">
                Contato
              </a>

              <a
                href="https://www.linkedin.com/in/deividi-luccas-0ab589227/"
                target="_blank"
                rel="noreferrer"
                onClick={fecharMenu}
                className="mt-2 rounded-xl border border-blue-400/30 bg-blue-400/10 px-4 py-3 text-center font-semibold text-blue-300"
              >
                LinkedIn
              </a>

              <a
                href="/curriculo-deividi.pdf"
                download
                onClick={fecharMenu}
                className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center font-semibold text-cyan-300"
              >
                Baixar currículo
              </a>

              <a
                href="https://github.com/DeividiLuccasdev"
                target="_blank"
                rel="noreferrer"
                onClick={fecharMenu}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3"
              >
                <Code2 size={18} />
                GitHub
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
          id="inicio"
          className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-10 pt-28"
        >
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
          <div>
   <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-6 py-3 text-base font-semibold text-emerald-300 shadow-lg shadow-emerald-500/10">
  <span className="h-3 w-3 animate-pulse rounded-full bg-emerald-400" />
  Aberto a oportunidades em desenvolvimento
</div>

         <div className="mt-10 flex flex-col items-start gap-7 sm:flex-row sm:items-center">
  <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-cyan-400 shadow-xl shadow-cyan-500/20 sm:h-52 sm:w-52">
    <Image
      src="/perfil.jpg"
      alt="Deividi Tiago Luccas"
      fill
      priority
      sizes="208px"
      className="object-cover"
    />
  </div>

  <div>
    <p className="font-mono text-xl font-bold tracking-[0.18em] text-cyan-400 sm:text-2xl">
      OLÁ, EU SOU
    </p>

    <h2 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
      Deividi Tiago Luccas
    </h2>
  </div>
</div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">
              Desenvolvedor
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Full Stack
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Desenvolvimento de aplicações web, APIs, sistemas integrados e
              soluções com Inteligência Artificial, transformando regras de
              negócio em produtos funcionais e bem estruturados.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {tecnologias.map((tecnologia) => (
                <span
                  key={tecnologia}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-slate-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {tecnologia}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-cyan-500/40"
              >
                Ver projetos
                <ArrowUpRight
                  size={19}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://github.com/DeividiLuccasdev"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.08]"
              >
                <Code2 size={20} />
                GitHub
              </a>
            </div>

           <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
  {destaques.map((item) => {
    const Icone = item.icone;

    return (
      <div
        key={item.titulo}
        className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-105 group-hover:bg-cyan-400/20">
          <Icone size={22} />
        </div>

        <h3 className="text-xl font-bold text-white">{item.titulo}</h3>

        <p className="mt-1 text-sm font-medium text-cyan-300">
          {item.subtitulo}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          {item.descricao}
        </p>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-400/30 to-transparent" />

        <span className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
          Destaque do perfil
        </span>
      </div>
    );
  })}
</div>
</div>

          {/* CARD CODE */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />

            <div className="floating-card relative rounded-[30px] border border-white/10 bg-white/[0.035] p-7 shadow-2xl backdrop-blur-2xl">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                    developer.profile
                  </p>

                  <p className="mt-2 font-bold">
                    Deividi Tiago Luccas
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 font-mono text-sm leading-7 shadow-inner">
                <p className="text-purple-400">
                  const{" "}
                  <span className="text-cyan-300">
                    developer
                  </span>{" "}
                  = {"{"}
                </p>

                <div className="ml-5">
                  <p>
                    <span className="text-blue-300">role</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;Full Stack&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-blue-300">frontend</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;React | Next.js&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-blue-300">backend</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;Node | Python | Go&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-blue-300">database</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;PostgreSQL | MySQL&quot;
                    </span>
                    ,
                  </p>

                  <p>
                    <span className="text-blue-300">focus</span>:{" "}
                    <span className="text-emerald-300">
                      &quot;APIs + AI&quot;
                    </span>
                  </p>
                </div>

                <p className="text-purple-400">{"}"};</p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <MiniCard titulo="React" subtitulo="Frontend" />
                <MiniCard titulo="Node.js" subtitulo="Backend" />
                <MiniCard titulo="Gemini" subtitulo="IA" />
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* SOBRE */}
<section
  id="sobre"
  className="relative border-t border-white/[0.06]"
>
  <div className="mx-auto max-w-7xl px-6 py-16">
       <div className="mt-12 flex justify-center">
      <div className="relative w-full max-w-5xl">
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl" />

        <div className="group relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-slate-900/50 p-2 shadow-2xl shadow-cyan-500/10">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-slate-950">
            <Image
              src="/about/sobre-mim.jpg"
              alt="Apresentação profissional de Deividi Tiago Luccas"
              fill
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-contain transition duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* TECNOLOGIAS */}
      <section
        id="tecnologias"
        className="relative border-t border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <TituloSecao
            numero="02"
            titulo="Tecnologias"
            subtitulo="Ferramentas que utilizo para transformar ideias em software."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {gruposTecnologias.map((grupo) => {
              const Icone = grupo.icone;

              return (
                <div
                  key={grupo.titulo}
                  className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.035]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icone size={23} />
                  </div>

                  <h3 className="text-lg font-bold">
                    {grupo.titulo}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {grupo.tecnologias.map((tecnologia) => (
                      <span
                        key={tecnologia}
                        className="rounded-lg border border-white/[0.07] bg-slate-950/60 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {tecnologia}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <TituloSecao
            numero="03"
            titulo="Projetos em destaque"
            subtitulo="Projetos onde apliquei desenvolvimento Full Stack, arquitetura e integração com IA."
          />

          {/* GASTO NA FOTO */}
          <div className="mt-14 overflow-hidden rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.06] via-white/[0.025] to-purple-500/[0.06]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Projeto em destaque
                  </span>

                  <span className="text-sm text-slate-500">
                    Mobile-first + IA
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-black sm:text-4xl">
                  💰 Controle de Gasto
                </h3>

                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  Aplicação Full Stack para controle de gastos por meio de
                  fotos de comprovantes. O usuário fotografa o comprovante
                  pelo celular e a aplicação utiliza IA para identificar
                  estabelecimento, data, total, categoria e itens da compra.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "Autenticação com JWT",
                    "Upload pela câmera",
                    "Processamento com Sharp",
                    "Google Gemini API",
                    "PostgreSQL + Prisma",
                    "Interface mobile-first",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-emerald-400"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "Prisma",
                    "PostgreSQL",
                    "Gemini AI",
                    "Docker",
                  ].map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full bg-white/[0.05] px-3 py-1.5 text-xs text-slate-300"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/DeividiLuccasdev/Gasto-na-foto"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 font-semibold transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                >
                  <Code2 size={18} />
                  Ver código no GitHub
                  <ArrowUpRight size={17} />
                </a>
              </div>

              {/* GALERIA */}
              <div className="relative min-h-[600px] border-t border-white/[0.06] bg-slate-950/50 p-8 lg:border-l lg:border-t-0">
                <div className="relative mx-auto h-[510px] max-w-[300px] overflow-hidden rounded-[35px] border-[6px] border-slate-800 bg-black shadow-2xl shadow-cyan-500/10">
                  <Image
                  src={screenshots[screenshotAtiva].src}
                  alt={screenshots[screenshotAtiva].nome}
                  fill
                  sizes="300px"
                  className="object-cover object-top transition"
                />
                </div>

                <div className="mt-7 flex justify-center gap-2">
                  {screenshots.map((item, index) => (
                    <button
                      type="button"
                      key={item.nome}
                      onClick={() => setScreenshotAtiva(index)}
                      className={`rounded-full px-4 py-2 text-xs transition ${
                        screenshotAtiva === index
                          ? "bg-cyan-500 text-slate-950"
                          : "border border-white/10 bg-white/[0.04] text-slate-400 hover:bg-white/[0.08]"
                      }`}
                    >
                      {item.nome}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* OUTROS PROJETOS */}
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Projeto
              icone={Layers3}
              titulo="SmartFlow AI"
              descricao="Sistema baseado em arquitetura de microsserviços, com integração entre CRM, ERP e Financeiro, utilizando APIs REST e comunicação entre serviços."
              tecnologias={[
                "Node.js",
                "Express",
                "TypeScript",
                "Prisma",
                "PostgreSQL",
                "REST APIs",
              ]}
              link="https://github.com/DeividiLuccasdev/smartflow-ai"
               imagem="/projects/smartflow-ai/smartflow.png"
            />

            <Projeto
              icone={Database}
              titulo="Sistema de Clientes"
              descricao="Aplicação CRUD para gerenciamento de clientes, com pesquisa, cadastro, edição, exclusão, histórico e dashboard de indicadores."
              tecnologias={[
                "Python",
                "Flask",
                "MySQL",
                "HTML",
                "CSS",
                "JavaScript",
                ]}
                imagem="/projects/sistema-clientes/sistema-clientes.png"
            />
          </div>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section
        id="experiencia"
        className="relative border-t border-white/[0.06] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <TituloSecao
            numero="04"
            titulo="Experiência"
            subtitulo="Experiência profissional e desenvolvimento contínuo de projetos."
          />

          <div className="mt-14 grid gap-6">
          <Experiencia
            periodo="2024 — 2026"
            empresa="Teccon"
            cargo="Desenvolvedor Full Stack Júnior"
            texto="Atuação no desenvolvimento e evolução de aplicações web Full Stack, criação de interfaces, APIs REST, regras de negócio e dashboards, além de integração entre frontend, backend e bancos de dados. Experiência com autenticação JWT, microsserviços, API Gateway, testes de APIs, troubleshooting, tratamento de falhas e deploy/monitoramento em nuvem."
            tecnologias="React • TypeScript • JavaScript • Node.js • Express • Python • FastAPI • Flask • PostgreSQL • MySQL • Prisma • SQLAlchemy • JWT • Docker • Git • GitHub • GitHub Actions • CI/CD • Render • Neon"
          />

            <Experiencia
                periodo="Dez/2023 — Ago/2024"
                empresa="Arablock"
                cargo="Desenvolvedor Full Stack — Projeto Doc+"
                texto="Atuação no desenvolvimento e manutenção de funcionalidades, integração entre frontend e backend e desenvolvimento e consumo de APIs REST."
                tecnologias="React • Next.js • TypeScript • React Native • Node.js • Go • PostgreSQL • Scrum"
              />

            <Experiencia
                periodo="2020 — 2023"
                empresa="Projetos Freelancer"
                cargo="Desenvolvedor Full Stack"
                texto="Desenvolvimento de aplicações web e soluções de software, trabalhando com frontend, backend, aplicações mobile e bancos de dados."
                tecnologias="React • JavaScript • TypeScript • Node.js • C# • .NET • Java • React Native • SQL"
              />

            <Experiencia
              periodo="Atual"
              empresa="Projetos próprios"
              cargo="Desenvolvimento Full Stack e IA"
              texto="Desenvolvimento contínuo de projetos para aprofundamento técnico, arquitetura de aplicações, APIs, banco de dados e integração com Inteligência Artificial."
              tecnologias="Next.js • Node.js • Python • PostgreSQL • Prisma • Docker • Gemini AI"
            />
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="relative border-t border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-cyan-400">
            05 / Contato
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-5xl">
            Vamos construir algo
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              interessante juntos?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Estou aberto a oportunidades em desenvolvimento de software,
            especialmente projetos envolvendo aplicações Full Stack, backend,
            APIs e Inteligência Artificial.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:deividiluccas@outlook.com"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold transition hover:-translate-y-1"
            >
              <Mail size={19} />
              deividiluccas@outlook.com
            </a>

            <a
              href="https://www.linkedin.com/in/deividi-luccas-0ab589227/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-400/[0.06] px-6 py-3.5 font-semibold text-blue-300 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-400/10"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/DeividiLuccasdev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <Code2 size={19} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Deividi Tiago Luccas</p>

          <p>
            Desenvolvido com Next.js, React e TypeScript.
          </p>
        </div>
      </footer>

      {/* VOLTAR AO TOPO */}
      {mostrarTopo && (
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/90 text-cyan-400 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/40"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
}

function TituloSecao({
  numero,
  titulo,
  subtitulo,
}: {
  numero: string;
  titulo: string;
  subtitulo: string;
}) {
  return (
    <div>
      <p className="font-mono text-sm tracking-[0.25em] text-cyan-400">
        {numero}
      </p>

      <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
        {titulo}
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        {subtitulo}
      </p>
    </div>
  );
}

function MiniCard({
  titulo,
  subtitulo,
}: {
  titulo: string;
  subtitulo: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 text-center transition hover:border-cyan-400/20">
      <p className="font-bold text-cyan-300">
        {titulo}
      </p>

      <p className="mt-1 text-[11px] text-slate-500">
        {subtitulo}
      </p>
    </div>
  );
}

function Diferencial({
  icone: Icone,
  titulo,
  texto,
}: {
  icone: typeof Code2;
  titulo: string;
  texto: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
      <Icone className="text-cyan-400" size={25} />

      <h3 className="mt-5 font-bold">
        {titulo}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {texto}
      </p>
    </div>
  );
}

function Projeto({
  icone: Icone,
  titulo,
  descricao,
  tecnologias,
  link,
  imagem,
}: {
  icone: typeof Code2;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link?: string;
  imagem?: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/25">
      
      {imagem && (
  <div className="border-b border-white/[0.08] bg-slate-950/70 p-5">
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">

      <div className="flex items-center gap-2 border-b border-white/10 bg-slate-900 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />

        <span className="ml-3 text-xs text-slate-500">
          {titulo}
        </span>
      </div>

      <div className="relative aspect-[16/9] w-full bg-slate-950">
        <Image
          src={imagem}
          alt={`Projeto ${titulo}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

    </div>
  </div>
)}

      <div className="p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          <Icone size={24} />
        </div>

        <h3 className="mt-6 text-2xl font-black">
          {titulo}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {descricao}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tecnologias.map((tecnologia) => (
            <span
              key={tecnologia}
              className="rounded-full border border-white/[0.07] bg-slate-950/60 px-3 py-1.5 text-xs text-slate-400"
            >
              {tecnologia}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition group-hover:gap-3"
          >
            Ver projeto
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

function Experiencia({
  periodo,
  empresa,
  cargo,
  texto,
  tecnologias,
}: {
  periodo: string;
  empresa: string;
  cargo: string;
  texto: string;
  tecnologias: string;
}) {
  return (
    <article className="grid gap-6 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition hover:border-cyan-400/20 md:grid-cols-[190px_1fr] md:p-8">
      <div>
        <p className="text-sm font-medium text-cyan-400">
          {periodo}
        </p>

        <div className="mt-4 flex items-center gap-2 text-slate-500">
          <BriefcaseBusiness size={17} />
          <span className="text-sm">{empresa}</span>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold">
          {cargo}
        </h3>

        <p className="mt-3 max-w-3xl leading-7 text-slate-400">
          {texto}
        </p>

        <p className="mt-5 text-sm text-slate-500">
          {tecnologias}
        </p>
      </div>
    </article>
  );
}