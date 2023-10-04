"use client";

import { Container, Title, ExtraOptions, SubTitle, Header } from "./styles";
import { RegisterProvider } from "@/src/contexts/registerContext";

import Link from "next/link";
import { ButtonComponent } from "../Buttons";
import { MultiStepComponent } from "./MultiStep";

export const RegisterComponent = () => {
  return (
    <RegisterProvider>
      <Container>
        <Header>
          <Title>Bem vindo</Title>
          <SubTitle>
            Para prosseguir, registre-se agora com suas credenciais e faça parte
            da nossa comunidade.
          </SubTitle>
        </Header>

        <MultiStepComponent />

        <ExtraOptions>
          <ButtonComponent
            buttonProps={{
              variant: "text",
              fullWidth: true,
            }}
            customStyles={{
              color: "black",
            }}
          >
            Já possui uma conta ? {"  "} <Link href={"/login"}> Login</Link>
          </ButtonComponent>
        </ExtraOptions>
      </Container>
    </RegisterProvider>
  );
};
