"use client";

export default function UsuáriosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Rei dos pátios | Usuários</title>
      <meta name="description" content="Tela de usuários" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#000000" />
      {children}
    </>
  );
}
