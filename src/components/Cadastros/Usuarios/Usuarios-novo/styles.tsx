"use client";
import { Box, Button, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 64px;

  .marker {
    color: black !important;
    font-weight: bold !important;
    font-family: "Poppins";
    position: absolute;
    top: 0 !important;
    left: 0 !important;
    margin-left: -30px;
    word-break: break-all !important;
    max-width: 120px !important;
    white-space: nowrap; /* Impede que o texto quebre em várias linhas */
    overflow: hidden; /* Oculta o conteúdo excedente que não cabe */
    text-overflow: ellipsis; /* Adiciona reticências (...) para indicar que há mais texto */
  }

  ${({ theme }) => theme.breakpoints.down("desktop")} {
    padding: 0px 32px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 0px 10px;
  }
`;

export const Title = styled(Typography)`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Content = styled(Box)`
  display: flex;

  gap: 100px;

  ${({ theme }) => theme.breakpoints.down("desktop")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    gap: 10px;
  }

  ${({ theme }) => theme.breakpoints.down("mobile")} {
    gap: 0px;
    flex-direction: column;
  }
`;

export const MapArea = styled(Box)`
  max-width: 600px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up("desktop")} {
    max-width: 800px;
  }
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    max-width: 400px;
    height: 700px;
  }
  ${({ theme }) => theme.breakpoints.only("laptop")} {
    max-width: 400px;
  }
`;

export const TabResultArea = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
`;

export const Form = styled(Box)`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  .row1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    flex-basis: calc(
      50% - 9px
    ); /* Adjust the width and margin according to your design */
  }
  .row2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    flex-basis: calc(
      50% - 9px
    ); /* Adjust the width and margin according to your design */
  }
`;

export const Label = styled(Typography)`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;

  ${({ theme }) => theme.breakpoints.down("desktop")} {
    font-size: 15px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 15px;
  }

  ${({ theme }) => theme.breakpoints.down("mobile")} {
    font-size: 15px;
  }
`;

export const BoxInput = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BoxUploadButtonContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Step2Container = styled(Box)`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 30px;
  justify-content: space-between;
`;

//usado também para o estilo das Permissões
export const PatiosSelecionadosContainer = styled(Box)`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//usado também para o estilo das Permissões
export const PatiosSelecionadosTitle = styled(Typography)`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`;

export const AutoCompleteContainer = styled(Box)`
  max-width: 600px;
  width: 100%;
`;

export const Ul = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0;
  gap: 6px;
`;

export const Li = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LiText = styled(Typography)`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const CustomSecondaryButton = styled(Button)`
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #303033;
  color: #fff;
  background-color: transparent;
  border-radius: 8px;
  &:disabled {
    color: #b8b9bb;

    background-color: #ededed;
  }
`;
