"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Container, CustomTypography } from "./styles";

export const RegisterSuccesComponent = () => {
  return (
    <Container>
      <CheckCircleIcon color="primary" />
      <CustomTypography>
        Sua conta foi criada com sucesso, Acesse seu e-mail para validar a sua
        conta. Utilize seu E-mail sua senha para realizar o login.
      </CustomTypography>
    </Container>
  );
};
