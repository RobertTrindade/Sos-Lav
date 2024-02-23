"use client";
import React, { FC, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@mui/material";

import localFont from "next/font/local";
import { Box, styled } from "@mui/material";
import { Header } from "./components/Header";
import { SimpleBottomNavigation } from "./components/Footer";
import { usePathname } from "next/navigation";

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

export interface IGlobals {
  children: React.ReactNode;
  pallet: { id: number; main: string; secundary: string };
}

export const Globals: FC<IGlobals> = ({ children, pallet }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: pallet.main,
      },
      secondary: {
        main: pallet.secundary,
        contrastText: "#fff",
      },
    },
    typography: {
      allVariants: {
        textTransform: "none",
        color: "#3e4042",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
  const pathname = usePathname();

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Content>
        {pathname.includes("/main") && <Header />}

        <Main>{children}</Main>
        {pathname.includes("/main") && <SimpleBottomNavigation />}
      </Content>
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
