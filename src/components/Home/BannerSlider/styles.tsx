"use client";
import { Box, Button, MobileStepper, styled } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  .custom-img {
    height: 300px;
    ${({ theme }) => theme.breakpoints.down("laptop")} {
      height: 120px;
    }
  }
`;

export const NextBtn = styled(Button)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 100px 0 0 100px; /* Borda arredondada à direita */
  height: 60px;
  min-width: 30px;
  width: 30px !important;
  svg {
    transform: scale(2);
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    display: none;
  }
`;

export const CustomMobileStepper = styled(MobileStepper)`
  position: absolute;
  background-color: transparent;
  bottom: 0;

  .dotActive {
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.palette.primary.main} !important;
  }
  .MuiMobileStepper-dot {
    width: 10px;
    height: 10px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
`;

export const PrevBtn = styled(Button)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  border-radius: 0 100px 100px 0; /* Borda arredondada à esquerda */
  width: 30px;
  min-width: 30px;
  height: 60px;

  svg {
    transform: scale(2);
  }

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    display: none;
  }
`;

export const Main = styled(Box)`
  display: flex;
  position: relative;
  justify-content: center;
`;
