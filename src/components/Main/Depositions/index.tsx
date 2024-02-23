"use client";

import {
  DepositionCard,
  DepositionContainer,
  Container,
  Content,
  Title,
  Text,
  NameArea,
  Name,
  Area,
  Divider,
} from "./styles";
import { useRouter } from "next/navigation";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export const DepositionsComponent = () => {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Title>Depoimentos</Title>

        <DepositionContainer>
          <DepositionCard>
            <FormatQuoteIcon color="primary" fontSize="large" />
            <Text>
              Estou incrivelmente satisfeito com os serviços da SOS Limp. Desde
              o momento em que entrei em contato pela primeira vez até receber
              minhas roupas impecavelmente limpas, a experiência foi
              excepcional. O atendimento ao cliente foi amigável e eficiente, e
              a equipe demonstrou um alto nível de profissionalismo em todos os
              aspectos. 
            </Text>
            <Divider />
            <NameArea>
              <Name>Dona Alice</Name>
              <Area>Paraíso dos Lagos</Area>
            </NameArea>
          </DepositionCard>

          <DepositionCard>
            <FormatQuoteIcon color="primary" fontSize="large" />
            <Text>
              Não tenho palavras suficientes para expressar minha gratidão à
              SOS Limp. Como alguém com uma agenda lotada, encontrar uma
              lavanderia confiável e eficiente sempre foi um desafio. No
              entanto, desde que comecei a utilizar os serviços da SOS Limp,
              esse problema desapareceu.
            </Text>
            <Divider />

            <NameArea>
              <Name>Sr Bernado</Name>
              <Area>Paraíso dos Lagos</Area>
            </NameArea>
          </DepositionCard>
        </DepositionContainer>
      </Content>
    </Container>
  );
};
