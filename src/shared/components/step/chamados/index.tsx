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
import { useChamados } from "@/src/contexts/chamados";

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

export const CustomStep: React.FC<ICustomStep> = ({
  props: { handleNext, handleBack, handleReset, activeStep, steps },
  children,
  finalComponent,
}) => {
  const { chamadosValues } = useChamados();
  const [disabled, setDisabled] = React.useState<boolean>();

  React.useEffect(() => {
    if (activeStep === 0) {
      const {
        equipamentoSolicitado,
        tipoApreensao,
        tipoVeiculo,
        urgencia,
        origem,
      } = chamadosValues;
      if (
        !equipamentoSolicitado ||
        !tipoApreensao ||
        !tipoVeiculo ||
        !urgencia ||
        !origem
      ) {
        setDisabled(true);
        return;
      }
      setDisabled(false);
    }
  }, [chamadosValues, activeStep]);

  React.useEffect(() => {
    if (activeStep === 1) {
      const {
        estado,
        uf,
        municipio,
        distrito,
        cep,
        latitude,
        longitude,
        enderecoCompleto,
        patio,
        detalhes,
      } = chamadosValues;

      if (
        !estado ||
        !uf ||
        !municipio ||
        !distrito ||
        !cep ||
        !latitude ||
        !longitude ||
        !enderecoCompleto ||
        !patio ||
        !detalhes
      ) {
        setDisabled(true);
        return;
      }
      setDisabled(false);
    }
  }, [activeStep, chamadosValues]);

  React.useEffect(() => {
    if (activeStep === 3) {
      const { motoristaId } = chamadosValues;

      if (!motoristaId) {
        setDisabled(true);
        return;
      }
      setDisabled(false);
    }
  }, [activeStep, chamadosValues]);
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
