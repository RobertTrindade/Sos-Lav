import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import {
  ButtonContainer,
  Container,
  CustomMainButton,
  CustomSecondaryButton,
  CustomStepLabel,
} from "../styles";
import { usePatios } from "@/src/contexts/patios";

interface ICustomStep {
  props: {
    handleNext: () => void;
    handleBack: () => void;
    handleReset: () => void;
    activeStep: number;
    steps: string[];
  };
  children: React.ReactNode;
  finalComponent: React.ReactNode;
}

export const CustomStepPatio: React.FC<ICustomStep> = ({
  props: { handleNext, handleBack, handleReset, activeStep, steps },
  children,
  finalComponent,
}) => {
  const { patioValues } = usePatios();
  const [disabled, setDisabled] = React.useState<boolean>();

  React.useEffect(() => {
    if (activeStep === 0) {
      const {
        nome,
        responsavel,
        telefone,
        email,
        observacao,
      } = patioValues;
      if (
        !nome ||
        !responsavel ||
        !telefone ||
        !email ||
        !observacao
      ) {
        setDisabled(true);
        return;
      }
      setDisabled(false);
    }
  }, [activeStep, patioValues]);

  React.useEffect(() => {
    if (activeStep === 1) {
     
      setDisabled(false);
    }
  }, [activeStep, patioValues]);

  React.useEffect(() => {
    if (activeStep === 2) {
      const {
        bairro,
        cep,
        cidade,
        estado,
        createdAt,
        longitude,
        latitude,
        endereco,
      } = patioValues;

      if (
        !bairro ||
        !cep ||
        !cidade ||
        !estado ||
        !createdAt ||
        !longitude ||
        !latitude ||
        !endereco
      ) {
        setDisabled(true);
        return;
      }
      setDisabled(false);
    }
  }, [activeStep, patioValues]);

  return (
    steps && (
      <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <CustomStepLabel>{label}</CustomStepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <>{finalComponent}</>
        ) : (
          <React.Fragment>
            {children}
            <ButtonContainer>
              <CustomSecondaryButton
                variant="contained"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Voltar
              </CustomSecondaryButton>

              <CustomMainButton
                onClick={handleNext}
                variant="contained"
                disabled={disabled}
              >
                {activeStep === steps.length - 1 ? "Salvar" : "Próximo"}
              </CustomMainButton>
            </ButtonContainer>
          </React.Fragment>
        )}
      </Container>
    )
  );
};
