"use client";

import * as React from "react";
import { Container, Content, MapArea, TabResultArea, Title } from "./styles";
import { ChamadosMap } from "../Map";
import {
  BackArea,
  CustomCircularProgress,
} from "../../Motoristas/Motoristas-details/styles";
import { CustomIconButton } from "../../Navbar/styles";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { CustomStep } from "@/src/shared/components/step";
import { Alert, Box, Button } from "@mui/material";
import { ChamadosStep1 } from "./steps/step1";
import { ChamadosStep2 } from "./steps/step2";
import { useChamados } from "@/src/contexts/chamadosContext";
import { ChamadosStep3 } from "./steps/step3";
import Link from "next/link";

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
          <Link href={"/chamados"}>
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
              steps: ["Chamado", "Endereço", "Veículos"],
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
          </CustomStep>
        </TabResultArea>

        <MapArea
          sx={{
            width: activeStep === 1 ? "100%" : "0px",
          }}
        >
          {location ? (
            <ChamadosMap />
          ) : (
            <CustomCircularProgress color="secondary" size={"large"} />
          )}
        </MapArea>
      </Content>
    </Container>
  );
};
