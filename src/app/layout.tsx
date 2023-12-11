import "@/src/shared/globals.css";
import { Globals } from "../shared/Global";

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-BR">
       <title>Dashboard</title>
      <meta name="description" content="Dashboard" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#ffffff" />
      <body>
        <Globals>{children}</Globals>
      </body>
    </html>
  );
}



