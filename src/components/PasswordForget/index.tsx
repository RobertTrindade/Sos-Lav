"use client";

import { IconButton, Typography } from "@mui/material";

import {
  Container,
  CustomForm,
  Title,
  ExtraOptions,
  SubTitle,
  Header,
  NotMember,
  SocialMedias,
} from "./styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { ButtonComponent } from "../../shared/components/Buttons";
import { InputComponent } from "../../shared/components/Inputs";
export const PasswordForgetComponent = () => {
  return (
    <Container>
      <Header>
        <NotMember>
          Ainda não é um Membro? <Link href={"/register"}> Criar conta </Link>
        </NotMember>
        <Title>Esqueceu sua senha ?</Title>
        <SubTitle>
          Não se preocupe, enviaremos informações para recuperara sua conta.
        </SubTitle>
      </Header>

      <CustomForm component={"form"}>
        <InputComponent label={`E-mail`} type="text" />

        <ButtonComponent
          buttonProps={{
            variant: "contained",
            fullWidth: true,
          }}
          customStyles={{
            color: "white",
          }}
        >
          Entrar
        </ButtonComponent>
      </CustomForm>

      <ExtraOptions>
        <Typography className="forgetPass">
          <Link href={"/passwordforget"}>Esqueceu a senha ?</Link>
        </Typography>
      </ExtraOptions>

      <SocialMedias>
        <Typography className="SocialMedia">Ou continue com: </Typography>
        <div className="SocialMediaIcons">
          <IconButton aria-label="toggle google" sx={{ color: "google" }}>
            <GoogleIcon />
          </IconButton>

          <IconButton aria-label="toggle face" sx={{ color: "blue" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton
            aria-label="toggle twiter"
            sx={{ color: "rgb(144, 202, 249)" }}
          >
            <TwitterIcon />
          </IconButton>
        </div>
      </SocialMedias>
    </Container>
  );
};
