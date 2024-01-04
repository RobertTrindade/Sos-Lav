"use client";

export default function ChamadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Chat</title>
      <meta name="description" content="Tela de Chat" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#ffffff" />

      {children}
    </>
  );
}
