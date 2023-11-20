"use client";
import React, { FC, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@mui/material";

import localFont from "next/font/local";
import { SideBarComponent } from "../components/Sidebar";
import { Box, styled } from "@mui/material";
import { NavBarComponent } from "../components/Navbar";
const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins/Poppins-Black.ttf",
      weight: "900", // Poppins Black
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Bold.ttf",
      weight: "700", // Poppins Bold
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-ExtraBold.ttf",
      weight: "800", // Poppins ExtraBold
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "200", // Poppins ExtraLight
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Light.ttf",
      weight: "300", // Poppins Light
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Medium.ttf",
      weight: "500", // Poppins Medium
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Regular.ttf",
      weight: "400", // Poppins Regular
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600", // Poppins SemiBold
      style: "normal",
    },
    {
      path: "./fonts/Poppins/Poppins-Thin.ttf",
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
}

export const Globals: FC<IGlobals> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F60",
      },
      secondary: {
        main: "#999A9A",
        contrastText: "#fff",
      },
    },
    typography: {
      allVariants: {
        textTransform: "none",
        color: "#ff6600",
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

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <SideBarComponent open={open} />
        <Content>
          <NavBarComponent handleClick={handleClick} />
          {children}
        </Content>
      </Main>
    </ThemeProvider>
  );
};

const Main = styled(Box)`
  display: flex;

`;

const Content = styled(Box)`
  width: 100%;
  overflow: hidden;


`;
