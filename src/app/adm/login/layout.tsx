import type { Metadata } from "next";

export const metadata = {
  title: "Login - ADM",
  description: "Tela do Login do Portal Gerencial",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
