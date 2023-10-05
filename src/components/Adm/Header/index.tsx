"use client";

import { Container, Title, SubTitle } from "./styles";
import { usePathname } from "next/navigation";

export const HeaderAdm = () => {
  const path = usePathname();

  const handleTitle = () => {
    if (path === "/adm") return "Dashboard";
    if (path === "/adm/anounce") return "Barra de Anúncios";
    return path.replace("/", "");
  };

  return (
    <Container>
      <Title>Dashboard</Title>
      <SubTitle>{handleTitle()}</SubTitle>
    </Container>
  );
};
