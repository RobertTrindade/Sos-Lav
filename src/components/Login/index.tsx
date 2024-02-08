"use client";

import { Container, Content, PassRecovery, Register } from "./styles";
import { useState } from "react";
import { InputComponent } from "@/src/shared/components/Inputs";
import { Box, IconButton } from "@mui/material";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import { useRouter } from "next/navigation";
import Laundry from "@/src/shared/logo/logo.svg";

export const LoginComponent = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container>
      <Content>
        <Box
          src={Laundry.src}
          component="img"
          alt="Picture of the author"
          loading="lazy"
          sx={{
            display: "block",
            overflow: "hidden",
          }}
        />

        <InputComponent
          label="Email"
          type="email"
          content="Email"
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
            color: "color: ${({ theme }) => theme.palette.secondary.main}",
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
            color: "color: ${({ theme }) => theme.palette.secondary.main}",
          }}
        />

        <ButtonComponent
          buttonProps={{
            variant: "contained",
            type: "submit",
            onClick: () => {
              router.push("/main");
            },
          }}
          customStyles={{
            color: "white",
            fontWeight: "500",
            fontSize: "20px",
            width: "100%",
            height: "50px",
          }}
        >
          Entrar
        </ButtonComponent>
        <Register>
          Ainda não é nosso cliente ? <span>Cadastre-se</span>
        </Register>
        <PassRecovery>Esqueceu a senha ?</PassRecovery>
      </Content>
    </Container>
  );
};
//              <GoogleLoginButton />
