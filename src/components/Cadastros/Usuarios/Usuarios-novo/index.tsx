"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import {
  BackArea,
  CustomCircularProgress,
} from "../../Motoristas/Motoristas-details/styles";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { Alert, Box, Button } from "@mui/material";
import Link from "next/link";
import { CustomStepUsuario } from "@/src/shared/components/step/usuarios";
import { ChamadosStep2 } from "./steps/step2";
import { ChamadosStep3 } from "./steps/step3";
import { useUsuario } from "@/src/contexts/usuarios";
import { UsuariosStep } from "./steps/step";
import { CustomIconButton } from "@/src/components/Navbar/styles";


export const UsuariosComponentNovo: React.FC<{}> = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);
  const { handleCreateUsuario } = useUsuario();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await handleCreateUsuario();
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(true);
      setSuccess(false);
    }
  };

  const handleNext = () => {
    if (activeStep === 2) {
      handleSubmit();
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
          <Link href={"/cadastros/usuarios"}>
            <CustomIconButton>
              <BackIcon />
            </CustomIconButton>
          </Link>
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
              steps: [
                "Dados do Colaborador",
                "Pátio Usuário",
                "Direito de Acesso ",
              ],
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
                    <Alert severity="success">Usuário criado com sucesso</Alert>
                    <Button onClick={handleReset}>Voltar</Button>
                  </>
                ) : (
                  <>
                    <Alert severity="error">
                      Houve uma falha em criar o usuário, clique em Recomeçar,se
                      o problema perssistir entre em contato com a TI
                    </Alert>
                    <Button onClick={handleReset}>Voltar</Button>
                  </>
                )}
              </>
            }
          >
            {activeStep === 0 && <UsuariosStep />}

            {activeStep === 1 && <ChamadosStep2 />}

            {activeStep === 2 && <ChamadosStep3 />}
          </CustomStepUsuario>
        </TabResultArea>
      </Content>
    </Container>
  );
};
