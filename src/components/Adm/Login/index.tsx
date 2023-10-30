"use client";

import { IconButton, InputAdornment, Typography } from "@mui/material";

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
  TwoSides,
  FirstSide,
} from "./styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState } from "react";
import Link from "next/link";
import { ButtonComponent } from "../../../shared/components/Buttons";
import { InputComponent } from "../../../shared/components/Inputs";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import logo from "@/src/shared/logo/index.svg";
import Image from "next/image";

export const LoginAdmComponent = () => {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleUserLogin = () => {
    router.push("/adm/dashboard");
  };

  return (
    <TwoSides>
      <FirstSide>
        <Image src={logo} alt="Logo do grupo carvalho Leilões" />
      </FirstSide>

      <Container>
        <Header>
          <NotMember>
            Não é um ADM? <Link href={"/"}> Voltar para Tela inicial</Link>
          </NotMember>
          <Title>Dashboard Plataforma de Leilão </Title>
          <SubTitle>Entre com suas credenciais de ADM</SubTitle>
        </Header>
        <Divider />
        <CustomForm component={"form"}>
          <InputComponent
            label={`E-mail`}
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
              onClick: () => {
                handleUserLogin();
              },
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
    </TwoSides>
  );
};
