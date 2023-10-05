"use client";
import React, { FC } from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { HeaderComponent } from "../components/Header";
import "@mui/material";
import { BottomBarComponent } from "../components/BottomBar";
import { Box } from "@mui/material";
import { IAnnounceBarDto } from "../services/announceBar/announceBar.service";

import localFont from "next/font/local";
const poppins = localFont({
  src: [
    {
      path: "../public/Poppins/Poppins-Black.ttf",
      weight: "900", // Poppins Black
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-Bold.ttf",
      weight: "700", // Poppins Bold
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-ExtraBold.ttf",
      weight: "800", // Poppins ExtraBold
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-ExtraLight.ttf",
      weight: "200", // Poppins ExtraLight
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-Light.ttf",
      weight: "300", // Poppins Light
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-Medium.ttf",
      weight: "500", // Poppins Medium
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-Regular.ttf",
      weight: "400", // Poppins Regular
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-SemiBold.ttf",
      weight: "600", // Poppins SemiBold
      style: "normal",
    },
    {
      path: "../public/Poppins/Poppins-Thin.ttf",
      weight: "100", // Poppins Thin
      style: "normal",
    },
  ],
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

interface IGlobals {
  children: React.ReactNode;
  Announces: IAnnounceBarDto[];
}

export const Globals: FC<IGlobals> = ({ children, Announces }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff6600",
      },
      secondary: {
        main: "#ffff",
      },
    },
    typography: {
      allVariants: {
        textTransform: "none",
        color: "#3e4042",
        fontFamily: poppins.style.fontFamily,
      },
    },
    breakpoints: {
      values: {
        xxs: 0,
        xs: 300,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1500,
        xxl: 1800,
        mobile: 600,
        tablet: 900,
        laptop: 1200,
        desktop: 1536,
      },
    },
  });

  const Spacer = styled(Box)`
    height: 60px; /* Defina a mesma altura da sua BottomBar */
  `;

  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent Announces={Announces} />
      {children}
      <Spacer />
      <BottomBarComponent />
    </ThemeProvider>
  );
};
