import { Container, ContentSide } from "@/src/components/Adm/styles";
import { HeaderAdm } from "@/src/components/Adm/Header";
import { SidebarComponent } from "@/src/components/Adm/Sidebar";

export default function AdmLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <SidebarComponent />
      <ContentSide>
        <HeaderAdm />
        {children}
      </ContentSide>
    </Container>
  );
}
