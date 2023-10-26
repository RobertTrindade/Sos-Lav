import type { Metadata } from "next";

export const metadata = {
  title: "Recuperação de senha",
  description: "Recupere sua senha",
};

export default function PasswordForgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
