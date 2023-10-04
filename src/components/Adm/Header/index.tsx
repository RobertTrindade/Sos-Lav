"use client";

import { FC } from "react";
import { Container, Title, SubTitle } from "./styles";

interface IHeaderAdm {
  subTitle: string;
}

export const HeaderAdm: FC<IHeaderAdm> = ({ subTitle }) => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};
