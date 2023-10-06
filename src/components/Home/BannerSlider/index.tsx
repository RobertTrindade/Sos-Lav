"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { FC, useState } from "react";
import {
  Container,
  NextBtn,
  PrevBtn,
  Main,
  CustomMobileStepper,
} from "./styles";
import Image from "next/image";
import Link from "next/link";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface IBanner {
  imgUrl: string;
  link: string;
}

interface IBannerComponent {
  Banners: IBanner[];
}

export const BannerSliderComponent: FC<IBannerComponent> = ({ Banners }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = Banners.length;

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
    <Container>
      <Main>
        <PrevBtn
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
          variant="contained"
          color="secondary"
        >
          <KeyboardArrowLeft className="img" color="primary" />
        </PrevBtn>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={6000}
        >
          {Banners.map((step, index) => (
            <Link href={step.link} key={index}>
              <Image
                loader={() => `/assets/images/${step.imgUrl}`}
                src={step.imgUrl}
                alt={`Banner ${step.link}`}
                width={18200}
                height={200}
                className="custom-img"
                loading="lazy"
              />
            </Link>
          ))}
        </AutoPlaySwipeableViews>

        <CustomMobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={""}
          backButton={""}
          classes={{
            dotActive: "dotActive",
          }}
        />
        <NextBtn
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
          variant="contained"
          color="secondary"
        >
          <KeyboardArrowRight color="primary" />
        </NextBtn>
      </Main>
    </Container>
  );
};
