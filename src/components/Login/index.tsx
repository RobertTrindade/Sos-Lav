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
import { ButtonComponent } from "../Buttons";
import { InputComponent } from "../Inputs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
export const LoginComponent = () => {
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
        <Title>Bem vindo de volta</Title>
        <SubTitle>Bem vindo de volta, sentimentos sua falta</SubTitle>
      </Header>
      <Divider>
        <CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
        >
          <CustomTab label="Pessoa Fisica" selected={value === 0} />
          <CustomTab label="Pessoa Juridica" selected={value === 1} />
        </CustomTabs>
      </Divider>
      <CustomForm component={"form"}>
        <InputComponent
          label={`E-mail ou ${value === 0 ? "CPF" : "CNPJ"}`}
          type="text"
        />

        <InputComponent
          label="Senha"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
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
          <Link href={"/"}>Esqueceu a senha ?</Link>
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
