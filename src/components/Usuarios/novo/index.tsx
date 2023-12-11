"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import {
  BackArea,
  CustomCircularProgress,
} from "../../Motoristas/Motoristas-details/styles";
import { CustomIconButton } from "../../Navbar/styles";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { Alert, Box, Button } from "@mui/material";
import { CustomStepUsuario } from "@/src/shared/components/step/usuarios";
import { ChamadosStep1 } from "./steps/step1";

export const UsuariosComponentNovo: React.FC<{}> = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);


  
  const handleNext = () => {
    if (activeStep === 2) {
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };









  return (
    <Container>
      <BackArea>
        <div className="actionArea">
          <CustomIconButton>
            <BackIcon />
          </CustomIconButton>
          <Title>Novo Usuário</Title>
        </div>
      </BackArea>
      <Content>
        <TabResultArea>
          <CustomStepUsuario
            props={{
              handleNext,
              handleBack,
              handleReset,
              activeStep,
              steps: ["Dados Pessoais", "Cargo", "Pátios", "Permissão"],
            }}
            finalComponent={
              <>
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <CustomCircularProgress color="secondary" size={"large"} />
                  </Box>
                ) : success ? (
                  <>
                    <Alert severity="success">
                      Chamado Criado com sucesso, clique aqui para acompanhar o
                      status
                    </Alert>
                    <Button onClick={handleReset}>Voltar</Button>
                  </>
                ) : (
                  <>
                    <Alert severity="error">
                      Houve uma falha em criar seu chamado, clique em
                      Recomeçar,se o problema perssistir entre em contato com a
                      TI
                    </Alert>
                    <Button onClick={handleReset}>Voltar</Button>
                  </>
                )}
              </>
            }
          >
            <ChamadosStep1 />
          </CustomStepUsuario>
        </TabResultArea>
      </Content>
    </Container>
  );
};
