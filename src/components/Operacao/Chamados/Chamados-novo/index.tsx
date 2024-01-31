"use client";

import * as React from "react";
import { Container, Content, MapArea, TabResultArea, Title } from "./styles";
import { ChamadosMap } from "../Map";

import { CustomStep } from "@/src/shared/components/step/chamados";
import { Alert, Box, Button } from "@mui/material";
import { ChamadosStep1 } from "./steps/step1";
import { ChamadosStep2 } from "./steps/step2";
import { useChamados } from "@/src/contexts/chamados";
import { ChamadosStep3 } from "./steps/step3";
import Link from "next/link";
import {
  BackArea,
  CustomIconButton,
} from "@/src/components/Cadastros/Motoristas/Motoristas-details/styles";
import { BackIcon } from "@/src/components/Cadastros/Motoristas/Motoristas-details";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { ChamadosStep4 } from "./steps/step4";

export const ChamadosComponentNovo: React.FC<{}> = () => {
  const {
    location,
    selectedLocation,
    selectedPlace,
    handleCreateChamados,
    reset,
  } = useChamados();

  const [activeStep, setActiveStep] = React.useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await handleCreateChamados();
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      setLoading(true);
      setSuccess(false);
    }
  };

  const handleNext = () => {
    if (activeStep === 3) {
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
          <Link href={"/operacao/chamados"}>
            <CustomIconButton>
              <BackIcon />
            </CustomIconButton>
          </Link>
          <Title>Novo Chamado</Title>
        </div>
      </BackArea>
      <Content>
        <TabResultArea>
          <CustomStep
            props={{
              handleNext,
              handleBack,
              handleReset,
              activeStep,
              steps: ["Chamado", "Endereço", "Veículos", "Motorista"],
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
            {activeStep === 0 && <ChamadosStep1 />}

            {activeStep === 1 && (
              <ChamadosStep2
                selectedLocation={selectedLocation}
                selectedPlace={selectedPlace}
              />
            )}
            {activeStep === 2 && <ChamadosStep3 />}
            {activeStep === 3 && <ChamadosStep4 />}
          </CustomStep>
        </TabResultArea>

        <MapArea
          sx={{
            width: activeStep === 1 || activeStep === 3 ? "100%" : "0px",
          }}
        >
          {location ? (
            <ChamadosMap searchArea={activeStep !== 3}/>
          ) : (
            <CustomCircularProgress color="secondary" size={"large"} />
          )}
        </MapArea>
      </Content>
    </Container>
  );
};
