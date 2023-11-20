"use client";
import "@/src/shared/globals.css";
import { Globals } from "../shared/Global";

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Globals>{children}</Globals>
      </body>
    </html>
  );
}
