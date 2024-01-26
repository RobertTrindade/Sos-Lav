"use client";
import { Box, Button, Typography, styled, CircularProgress} from "@mui/material";

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

  .fileArea{
    margin-top: 30px;
  }

  .btnGuardarDados{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    background-color: transparent;
    outline: 0;
    border: 0;
    margin: 0;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    color: inherit;
    font-family: '__poppins_61faaf','__poppins_Fallback_61faaf';
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    text-transform: none;
    color: rgba(0, 0, 0, 0.87);
    min-width: 64px;
    padding: 6px 16px;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #FF6600;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
    border-radius: 8px;
    text-transform: none;
    height: 40px;
    position: relative;
    color: white;
    font-weight: bold;
    margin-top: 30px;
  }

  .InputContainer{
    margin-top: 30px;
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
  flex-wrap: wrap;
  gap: 10px;

  div {
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

export const CustomCircularProgress = styled(CircularProgress)`
  color:${({ theme }) => theme.palette.secondary.main};
  width: 100px;
`;

export const BoxInputRow = styled(Box)``;

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