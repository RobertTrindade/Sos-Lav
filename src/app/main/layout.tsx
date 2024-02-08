"use client";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>S.O.S Lavanderia</title>
      <meta name="description" content="S.O.S Lavanderia" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#000000" />
      {children}
    </>
  );
}
