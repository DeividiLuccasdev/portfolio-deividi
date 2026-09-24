import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deividi Tiago Luccas | Desenvolvedor Full Stack",
  description:
    "Portfólio de Deividi Tiago Luccas — Desenvolvedor Full Stack com experiência em React, Next.js, Node.js, Python, Go, PostgreSQL, APIs REST e Inteligência Artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}