"use client";

export default function ChamadosLayoutEditar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Editar Usuário</title>
      <meta name="description" content="Tela de Usuário" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#ffffff" />

      {children}
    </>
  );
}
