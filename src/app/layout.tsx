import "@/src/shared/globals.css";
import type { Metadata } from "next";
import { Globals } from "../shared/Global";
import AnnounceService from "@/src/services/announceBar/announceBar.service";

export const metadata: Metadata = {
  title: "Grupo Carvalho Leilões",
  description: "Home Page do grupo carvalho leilões",
  keywords:
    "leilões, leilão online, compra e venda, itens colecionáveis, arte, antiguidades, carros, caminhões, carvalho, motos, leião, são paulo, detran",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Announces = await AnnounceService.getMessages(100);

  return (
    <html lang="pt-BR">
      <body>
        <Globals Announces={Announces}>{children}</Globals>
      </body>
    </html>
  );
}
