"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import {
  BackArea,
  CustomCircularProgress,
  CustomIconButton,
} from "../../Motoristas/Motoristas-details/styles";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { Alert, Box, Button } from "@mui/material";
import { ChamadosStep1 } from "./steps/step1";
import Link from "next/link";
import { CustomStepUsuario } from "@/src/shared/components/step/usuarios";
import { ChamadosStep2 } from "./steps/step2";
import { ChamadosStep3 } from "./steps/step3";
import { useUsuario } from "@/src/contexts/usuarios";

export const UsuariosComponentNovo: React.FC<{}> = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);
  const { UsuarioValues, } = useUsuario();

  const handleSubmit = async () => {
    try {
      console.log(UsuarioValues)
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
          <Link href={"/usuarios"}>
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
              steps: ["Dados Usuário", "Pátio Usuário", "Direito de Acesso "],
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
                      Recomeçar,se o problema persistir entre em contato com a
                      TI
                    </Alert>
                    <Button onClick={handleReset}>Voltar</Button>
                  </>
                )}
              </>
            }
          >
            {activeStep === 0 && <ChamadosStep1 />}

            {activeStep === 1 && <ChamadosStep2 />}

            {activeStep === 2 && <ChamadosStep3 />}
          </CustomStepUsuario>
        </TabResultArea>
      </Content>
    </Container>
  );
};