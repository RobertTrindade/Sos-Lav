"use client";
import { Apreensoes } from "./apreensoes";
import { Atendimento } from "./mediaAtendimento";
import { Container } from "./styles";

export const DashBoardComponent = () => {
  return (
    <Container>
      <Apreensoes />
      <Atendimento />
    </Container>
  );
};
