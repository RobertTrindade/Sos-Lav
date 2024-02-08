import "@/src/shared/globals.css";
import { Globals, IGlobals } from "../shared/Global";
import palletService from "../services/pallet/pallet.service";

export default  async function   RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pallet = await palletService.listAll() as IGlobals['pallet'];

  return (
    <html lang="pt-BR">
      <title>Dashboard</title>
      <meta name="description" content="Dashboard" />
      <meta property="og:description" content="Descrição para Redes Sociais" />
      <meta property="og:image" content="URL da imagem para Redes Sociais" />
      <meta property="og:url" content="URL da página" />
      <meta name="theme-color" content="#ffffff" />
      <body>
        <Globals pallet={pallet}>{children}</Globals>
      </body>
    </html>
  );
}
