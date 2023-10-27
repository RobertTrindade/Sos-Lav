"use client";

import { Typography } from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import KeyIcon from "@mui/icons-material/Key";
import GppGoodIcon from "@mui/icons-material/GppGood";
import {
  Container,
  CustomForm,
  Title,
  ExtraOptions,
  SubTitle,
  Header,
  NotMember,
  ContainerPass,
  Step2Component,
} from "./styles";
import Link from "next/link";
import { ButtonComponent } from "../../shared/components/Buttons";
import { InputComponent } from "../../shared/components/Inputs";
import { FC, useState } from "react";

interface Step {
  handleChange: (step: number) => void;
}

export const PasswordForgetComponent = () => {
  const [step, setStep] = useState(1);
  const handleChange = (step: number) => {
    setStep(step);
  };
  return (
    <Container>
      <Header>
        <NotMember>
          Ainda não é um Membro? <Link href={"/register"}> Criar conta </Link>
        </NotMember>
        <ContainerPass>
          {step === 1 && <LockResetIcon color="primary" />}
          {step === 2 && <KeyIcon color="primary" />}
          {step === 3 && <GppGoodIcon color="primary" />}
        </ContainerPass>
        <Title>Esqueceu sua senha ?</Title>
        <SubTitle>
          {step === 1 &&
            ` Não se preocupe, enviaremos por e-mail informações para recuperara sua
          conta.`}
          {step === 2 &&
            `
            Agora, Insira o Código Enviado por E-mail
            
          `}
          {step === 3 &&
            `
            Muito bem ! para finalizar escolha suas novas senhas 
          `}
        </SubTitle>
      </Header>

      <CustomForm component={"form"}>
        {step === 1 && <Step1 handleChange={handleChange} />}
        {step === 2 && <Step2 handleChange={handleChange} />}
        {step === 3 && <Step3 handleChange={handleChange} />}
      </CustomForm>

      <ExtraOptions>
        <Typography className="forgetPass">
          <Link href={"/login"}>Voltar para o Login </Link>
        </Typography>
      </ExtraOptions>
    </Container>
  );
};

const Step1: FC<Step> = ({ handleChange }) => {
  return (
    <>
      <InputComponent label={`E-mail`} type="text" />

      <ButtonComponent
        buttonProps={{
          variant: "contained",
          fullWidth: true,
          onClick: () => {
            handleChange(2);
          },
        }}
        customStyles={{
          color: "white",
        }}
      >
        Enviar
      </ButtonComponent>
    </>
  );
};

const Step2: FC<Step> = ({ handleChange }) => {
  return (
    <>
      <Step2Component>
        <InputComponent label={``} type="number" />
        <InputComponent label={``} type="number" />
        <InputComponent label={``} type="number" />
        <InputComponent label={``} type="number" />
      </Step2Component>

      <ButtonComponent
        buttonProps={{
          variant: "contained",
          fullWidth: true,
          onClick: () => {
            handleChange(3);
          },
        }}
        customStyles={{
          color: "white",
        }}
      >
        Validar
      </ButtonComponent>
    </>
  );
};

const Step3: FC<Step> = ({ handleChange }) => {
  return (
    <>
      <InputComponent label={`Nova senha`} type="text" />
      <InputComponent label={`Digite Novamente`} type="text" />

      <ButtonComponent
        buttonProps={{
          variant: "contained",
          fullWidth: true,
          onClick: () => {
            handleChange(2);
          },
        }}
        customStyles={{
          color: "white",
        }}
      >
        Salvar
      </ButtonComponent>
    </>
  );
};
