"use client";

import { IconButton } from "@mui/material";
import { Container, Content, Header, Title } from "./styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export const CestaComponent = () => {
  return (
    <Container>
      <Content>
        <Header>
          <IconButton size="large">
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
          <Title>Minha Cesta</Title>

        </Header>
      </Content>
    </Container>
  );
};
