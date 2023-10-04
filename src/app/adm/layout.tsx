"use client";
import { Container, ContentSide } from "@/src/components/Adm/Container";
import { HeaderAdm } from "@/src/components/Adm/Header";
import { SidebarComponent } from "@/src/components/Adm/Sidebar";
import { usePathname } from "next/navigation";

export default function AdmLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  const handleTitle = () => {
    if (path === "/adm") return "Dashboard";
    return path.replace("/", "");
  };

  return (
    <Container>
      <SidebarComponent />
      <ContentSide>
        <HeaderAdm subTitle={handleTitle()} />
        {children}
      </ContentSide>
    </Container>
  );
}
