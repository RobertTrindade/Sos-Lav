"use client";

export default function ChamadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Fechamento Motoristas</title>
      <meta name="description" content="Tela de Chamados" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#ffffff" />

      {children}
    </>
  );
}
