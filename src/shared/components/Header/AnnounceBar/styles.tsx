"use client";
import { Box, Typography, css, keyframes, styled } from "@mui/material";

interface ExtraOptions {
  slideInAnimation: boolean;
  slideOutAnimation: boolean;
}

// Criar a animação de entrada (slide-in)
const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Criar a animação de saída (slide-out)
const slideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export const ExtraOptions = styled(Box, {
  shouldForwardProp: (props) => props !== "slideOutAnimation" && props !== "slideInAnimation"
})<ExtraOptions>`
  ${({ slideInAnimation }) =>
    slideInAnimation &&
    css`
      animation: ${slideIn} 0.5s ease-in forwards; /* Aplicar animação de entrada */
    `}

  ${({ slideOutAnimation }) =>
    slideOutAnimation &&
    css`
      animation: ${slideOut} 0.5s ease-out forwards; /* Aplicar animação de saída */
    `}
  
    gap: 20px;
  display: flex;
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .options {
    display: flex;
    gap: 20px;

    ${({ theme }) => theme.breakpoints.down("mobile")} {
      gap: 20px;
    }
  }
`;
export const Container = styled(Box)`
  height: max-content;
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px;

  background-color: ${({ theme }) => theme.palette.primary.main};

  ${({ theme }) => theme.breakpoints.down("mobile")} {
    padding: 5px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;



export const Title = styled(Typography)`
  color: white;
  font-size: 12px;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("mobile")} {
    text-align: center;
  }
`;

export const KnowMoreAndClose = styled(Typography)`
  color: white;
  font-size: 10px;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
`;
