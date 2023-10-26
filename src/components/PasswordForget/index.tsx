"use client";

import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import Image from "next/image";

import {
  Container,
  CustomForm,
  CustomTab,
  CustomTabs,
  Divider,
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
import { useState } from "react";
import Link from "next/link";
import { ButtonComponent } from "../../shared/components/Buttons";
import { InputComponent } from "../../shared/components/Inputs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export const PasswordForgetComponent = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
        <InputComponent
          label={`E-mail ou ${value === 0 ? "CPF" : "CNPJ"}`}
          type="text"
        />

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
