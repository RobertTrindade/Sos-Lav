import * as React from "react";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Typography, styled } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const SwipeableTextMobileStepper: React.FC<{
  images: string[];
}> = ({ images }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    images && (
      <Box>
        <Box
          component="img"
          sx={{
            display: "block",
            overflow: "hidden",
            width: "100%",
            height: "400px",
          }}
          src={
            "https://eco-chamados-back-end.onrender.com" + images[activeStep]
          }
          alt={"step"}
        />

        <CustomMobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              color="secondary"
            >
              <Typography>Proxima </Typography>
              <KeyboardArrowRight color="secondary" />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              <KeyboardArrowLeft color="secondary" />
              <Typography>Voltar </Typography>
            </Button>
          }
        />
      </Box>
    )
  );
};

const CustomMobileStepper = styled(MobileStepper)`
  background-color: rgb(18, 18, 18);

  .MuiMobileStepper-dotActive {
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
  }
  .MuiMobileStepper-dot {
    background-color: ${({ theme }) => theme.palette.secondary.main} ;
  }
`;
