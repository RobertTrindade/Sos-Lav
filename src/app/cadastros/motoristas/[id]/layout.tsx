"use client";

export default function MotoristaEditar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Editar motorista</title>
      <meta name="description" content="Tela de motorista" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#ffffff" />
      {children}
    </>
  );
}
