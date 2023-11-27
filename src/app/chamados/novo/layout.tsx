"use client";

export default function ChamadosLayoutNovo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Novo Chamado</title>
      <meta name="description" content="Novo Chamados" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#ffffff" />

      {children}
    </>
  );
}
