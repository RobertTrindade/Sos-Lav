import type { Metadata } from "next";

export const metadata = {
  title: "Login",
  description: "Login",
};

export default function ChamadosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
