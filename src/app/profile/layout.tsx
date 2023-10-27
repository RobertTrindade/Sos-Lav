import type { Metadata } from "next";

export const metadata = {
  title: "Meu Perfil",
  description: "profile",
};

export default function profileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
