"use client";
import {
  Container,
  Content,
  Description,
  NextArea,
  StepArea,
  StepIndicator,
  Step,
  CustomBtn,
} from "./styles";
import Laundry from "@/src/shared/logo/logo.svg";
import { Box } from "@mui/material";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/navigation";

export const HomeComponent = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNextStep = () => {
    if (step == 2) {
      router.push("/login");
      return 
    }
    setStep(step + 1);
  };

  return (
    <Container>
      <Content>
        <Box
          src={Laundry.src}
          component="img"
          alt="Picture of the author"
          loading="lazy"
          sx={{
            display: "block",
            overflow: "hidden",
          }}
        />

        {step === 1 && (
          <>
            <Description>
              Deixe a SOSLimp cuidar das suas roupas com todo o cuidado
              necessário. Aguarde e veja como podemos fazer seu dia brilhar com
              peças impecavelmente limpas e cheirosas!
            </Description>
          </>
        )}

        {step === 2 && (
          <>
            <Description>
              Reserve agora e descanse tranquilo! Na SOSLimp Lavanderia,
              cuidamos de cada detalhe para você."{" "}
            </Description>
          </>
        )}
      </Content>

      <StepArea>
        <StepIndicator>
          <Step active={step === 1} />
          <Step active={step === 2} />
        </StepIndicator>

        <NextArea>
          <CustomBtn
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => handleNextStep()}
          >
            Próximo
          </CustomBtn>
        </NextArea>
      </StepArea>
    </Container>
  );
};
