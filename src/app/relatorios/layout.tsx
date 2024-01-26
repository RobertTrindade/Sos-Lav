"use client";

export default function ChamadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Página de Relatorios</title>
      <meta name="description" content="Página de relatorios" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#ffffff" />

      {children}
    </>
  );
}
