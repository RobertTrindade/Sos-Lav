"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  ButtonContainer,
  Container,
  Label,
  StepDesc,
  StepTitle,
} from "./styles";
import { ButtonComponent } from "../Buttons";
import { Step1Component } from "./Step1";
import { Step2Component } from "./Step2";
import { Step3Component } from "./Step3";
import { Step4Component } from "./Step4";
import { useRegister } from "@/src/contexts/registerContext";
import { RegisterSuccesComponent } from "../RegisterSucces";

const steps = ["Tipo de Cadastro", "Endereço", "Dados Pessoais", "Documentos"];

export const MultiStepComponent = () => {
  const { hasPendency, user } = useRegister();
  const [activeStep, setActiveStep] = React.useState(0);
  const [helpMessage, setHelpMessage] = React.useState("");
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    // Desmarque o passo atual como completo
    const newCompleted = { ...completed };
    delete newCompleted[activeStep];
    setCompleted(newCompleted);

    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStep = (step: number) => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const returnHelpMessages = () => {
    const helpMessages = [
      "Selecione o tipo de cadastro que deseja realizar",
      "Selecione seu Endereço",
      user.step1.userType === "pf"
        ? "Entre com seus dados pessoais"
        : "Entre com os dados de sua empresa",
      "Envio de documentos",
    ];
    setHelpMessage(helpMessages[activeStep]);
  };

  const handleLabel = (label: string) => {
    if (label === "Dados Pessoais" && user.step1.userType === "pj")
      return "Dados Empresariais";
    return label;
  };

  React.useEffect(() => {
    returnHelpMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.step1.userType, activeStep]);

  return (
    <Container sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton
              color="inherit"
              onClick={() => {
                handleStep(index);
              }}
            >
              <Label> {handleLabel(label)}</Label>
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <Box>
        {allStepsCompleted() ? (
          <RegisterSuccesComponent />
        ) : (
          <>
            <StepTitle>
              Passo {activeStep + 1} {steps[activeStep]}
            </StepTitle>

            <StepDesc>{helpMessage && helpMessage}</StepDesc>

            {activeStep === 0 && <Step1Component />}
            {activeStep === 1 && <Step2Component />}
            {activeStep === 2 && <Step3Component />}
            {activeStep === 3 && <Step4Component />}

            <ButtonContainer>
              <ButtonComponent
                buttonProps={{
                  variant: "contained",
                  fullWidth: true,
                  disabled: activeStep === 0,
                  onClick: () => {
                    handleBack();
                  },
                }}
                customStyles={{
                  color: "white",
                }}
              >
                Voltar
              </ButtonComponent>
              <ButtonComponent
                buttonProps={{
                  variant: "contained",
                  fullWidth: true,
                  // ativar quando em prd disabled: hasPendency(activeStep + 1),
                  onClick: () => {
                    handleNext();
                    handleComplete();
                  },
                }}
                customStyles={{
                  color: "white",
                }}
              >
                {activeStep === 3 ? "Finalizar" : "Próximo"}
              </ButtonComponent>
            </ButtonContainer>
          </>
        )}
      </Box>
    </Container>
  );
};
