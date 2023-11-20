"use client";

import {
  CheckBoxContainer,
  CheckBoxText,
  Container,
  CustomCheckBox,
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
} from "./styles";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/src/shared/icons/logo";
import { InputComponent } from "@/src/shared/components/Inputs";
import { Box, IconButton, Typography } from "@mui/material";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { DividerIcon, GoogleIcon } from "./orIcon";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const LoginComponent = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleUserLogin = () => {
    router.push("/");
  };

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
          <TitleSecondSide>Login</TitleSecondSide>
          <Form component={"form"}>
            <InputComponent
              label="Login"
              type="email"
              content="Login"
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
              }}
              customStyles={{
                color: "color: #999A9A",
              }}
            />
            <InputComponent
              label="Senha"
              type={showPassword ? "text" : "password"}
              content="Senha"
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
                color: "color: #999A9A",
              }}
            />
            <CheckBoxContainer>
              <CustomCheckBox color="secondary" />
              <CheckBoxText>Lembrar senha</CheckBoxText>
            </CheckBoxContainer>

            <ButtonComponent
              buttonProps={{
                variant: "contained",
                onClick: () => handleUserLogin(),
              }}
              customStyles={{
                color: "white",
                fontWeight: "700",
                fontSize: "20px",
                height: "60px",
              }}
            >
              Entrar
            </ButtonComponent>
          </Form>
          <PassForget>Esqueci minha senha </PassForget>
          <FormFooter>
            <div className="OrContent">
              <DividerIcon />
              <span className="FormFooterTitle">Ou</span>
              <DividerIcon />
            </div>
            <div className="SocialMediaArea">
              <GoogleIcon />
              <Typography className="socialMediaDescription">
                Login com o Google
              </Typography>
            </div>
          </FormFooter>
        </SecondSideContent>
      </SecondSide>
    </Container>
  );
};
