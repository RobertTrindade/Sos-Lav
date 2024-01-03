"use client";

import {
  CheckBoxContainer,
  CheckBoxText,
  Container,
  CustomCheckBox,
  ErrorMessage,
  FirstSide,
  FirstSideContent,
  Form,
  FormFooter,
  PassForget,
  SecondSide,
  SecondSideContent,
  SubTitle,
  Title,
  TitleSecondSide,
  TitleSubSecondSide,
} from "./styles";
import { useState } from "react";
import { Logo } from "@/src/shared/icons/logo";
import { InputComponent } from "@/src/shared/components/Inputs";
import { Box, IconButton } from "@mui/material";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useLoginController } from "./useLoginController";

import { useRouter } from "next/navigation";

export const LoginComponent = () => {
  const { handleFormSubmit, register, errors, credentialsError } =
    useLoginController();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container>
      <FirstSide>
        <FirstSideContent>
          <Logo />
          <Title>Rei dos pátios, o controle que seu pátio merece</Title>
          <SubTitle>Rei dos pátios, versão controle de Guinchos e CCO</SubTitle>
          <SubTitle>
            {" "}
            &copy; 2023 Grupo Carvalho Gestão. Todos os direitos reservados.
          </SubTitle>
        </FirstSideContent>
      </FirstSide>

      <SecondSide>
        <SecondSideContent>
          <div className="header">
            <TitleSecondSide>Bem vindo de volta</TitleSecondSide>
            <TitleSubSecondSide>
              Faça login com suas credenciais para continuar
            </TitleSubSecondSide>
          </div>

          <Form onSubmit={handleFormSubmit} noValidate autoCapitalize="true">
            <InputComponent
              label="Email"
              type="email"
              content="Email"
              {...register("email")}
              customProps={{
                startAdornment: (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <EmailIcon color="secondary" />
                  </Box>
                ),
                error: !!errors.email?.message,
              }}
              customStyles={{
                color: "color: ${({ theme }) => theme.palette.secondary.main}",
              }}
            />

            {errors.email && (
              <ErrorMessage> * {errors.email?.message}</ErrorMessage>
            )}
            <InputComponent
              label="Senha"
              type={showPassword ? "text" : "password"}
              content="Senha"
              {...register("password")}
              customProps={{
                startAdornment: (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                    onClick={() => handleClickShowPassword()}
                  >
                    <LockIcon color="secondary" />
                  </Box>
                ),
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => handleClickShowPassword()}
                  >
                    {showPassword ? (
                      <RemoveRedEyeIcon color="secondary" />
                    ) : (
                      <VisibilityOffIcon color="secondary" />
                    )}
                  </IconButton>
                ),
              }}
              customStyles={{
                color: "color: ${({ theme }) => theme.palette.secondary.main}",
              }}
            />
            {errors.password && (
              <ErrorMessage> * {errors.password.message}</ErrorMessage>
            )}

            <CheckBoxContainer>
              <CustomCheckBox color="secondary" />
              <CheckBoxText>Lembrar senha</CheckBoxText>
            </CheckBoxContainer>

            <ButtonComponent
              buttonProps={{
                variant: "contained",
                type: "submit",
              }}
              customStyles={{
                color: "white",
                fontWeight: "700",
                fontSize: "20px",
                height: "50px",
              }}
            >
              Entrar
            </ButtonComponent>
          </Form>
          {credentialsError && (
            <ErrorMessage> * {credentialsError}</ErrorMessage>
          )}
          <PassForget>Esqueci minha senha </PassForget>
          <FormFooter>
            <div className="OrContent"></div>
            <div className="SocialMediaArea"></div>
          </FormFooter>
        </SecondSideContent>
      </SecondSide>
    </Container>
  );
};
//              <GoogleLoginButton />
