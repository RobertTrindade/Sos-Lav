"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import {
  BackArea,
  CustomCircularProgress,
} from "../../Motoristas/Motoristas-details/styles";
import { CustomIconButton } from "../../Navbar/styles";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { CustomStepPatio } from "@/src/shared/components/step/patios";
import { Alert, Box, Button } from "@mui/material";
import { PatiosStep1 } from "./steps/step1";
import { PatiosStep2 } from "./steps/step2";
import { usePatios } from "@/src/contexts/patios";
import { PatiosStep3 } from "./steps/step3";
import Link from "next/link";

export const PatiosComponentNovo: React.FC<{}> = () => {
  const {
    handleCreatePatio,
    reset,
    setTableData,
  } = usePatios();

  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      // Antes de criar o pátio, faça o upload dos arquivos
      const res = await handleCreatePatio();
      // Limpar os dados da tabela após o envio bem-sucedido
      setTableData([]);
      
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
    reset();
  };

  return (
    <Container>
      <BackArea>
        <div className="actionArea">
          <Link href={"/patios"}>
            <CustomIconButton>
              <BackIcon />
            </CustomIconButton>
          </Link>
          <Title>Novo Patio</Title>
        </div>
      </BackArea>
      <Content>
        <TabResultArea>
          <CustomStepPatio
            props={{
              handleNext,
              handleBack,
              handleReset,
              activeStep,
              steps: ["Dados do Patio", "Documentos", "Endereço"],
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
                      Patio Criado com sucesso, clique aqui para acompanhar o
                      status
                    </Alert>
                    <Button onClick={handleReset}>Voltar</Button>
                  </>
                ) : (
                  <>
                    <Alert severity="error">
                      Houve uma falha em criar seu patio, clique em
                      Recomeçar,se o problema persistir entre em contato com a
                      TI
                    </Alert>
                    <Button onClick={handleReset}>Voltar</Button>
                  </>
                )}
              </>
            }
          >
            {activeStep === 0 && <PatiosStep1 />}

            {activeStep === 1 && (
              <PatiosStep2
              />
            )}
            {activeStep === 2 && <PatiosStep3 />}
          </CustomStepPatio>
        </TabResultArea>
      </Content>
    </Container>
  );
};
