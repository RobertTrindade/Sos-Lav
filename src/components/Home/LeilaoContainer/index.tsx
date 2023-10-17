"use client";

import { useState } from "react";
import { Container, LeilaoContainer, Title, Main } from "./styles";
import { BasicButtonGroup } from "./tab";
import { LeilaoCardComponent } from "@/src/shared/components/LeilaoCard";

export const LeilaoContainerComponent = () => {
  const [value, setValue] = useState(0);

  const description = [
    "Todos os Leilões",
    "Leilões Abertos",
    "Leilões Próximos",
    "Leilões Fechados",
    "Leilões Exclusivo Grupo Carvalho",
  ];

  return (
    <Container>
      <Main>
        <Title>{description[value]} </Title>
        <BasicButtonGroup value={value} setValue={setValue} />
      </Main>

      <LeilaoContainer>
        <LeilaoCardComponent />
      </LeilaoContainer>
    </Container>
  );
};
