import type { Metadata } from "next";

export const metadata = {
  title: "Register",
  description: "Register",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
