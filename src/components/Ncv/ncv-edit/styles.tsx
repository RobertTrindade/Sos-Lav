"use client";
import {
  Box,
  Checkbox,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 64px;
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

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export const TabResultArea = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  .actionArea {
    display: flex;
    align-items: center;
    gap: 40px;
  }
`;

export const FormLiberacao = styled(Box)`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: space-between;

  div {
    flex-basis: calc(
      10% - 30px
    ); /* Adjust the width and margin according to your design */
    margin: 4px; /* Adjust the margin according to your design */
  }
`;
export const Form = styled(Box)`
  display: flex;
  margin-top: 30px;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: start;

  div {
    flex-basis: calc(
      20% - 30px
    ); /* Adjust the width and margin according to your design */
    margin: 4px; /* Adjust the margin according to your design */
  }
`;
export const FormCheckBox = styled(Box)`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  div {
    flex-basis: calc(
      20% - 30px
    ); /* Adjust the width and margin according to your design */
    margin: 4px; /* Adjust the margin according to your design */
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
  align-items: start;
`;

export const BoxInputRow = styled(Box)``;

export const ExtraValues = styled(Box)`
  display: flex;
  flex-direction: column;
  .values {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

export const Row = styled(Box)`
  display: flex;
  gap: 20px;
`;

export const ModalContent = styled(Paper)`
  background-color: rgb(18, 18, 18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 20px;
  .inputs {
    gap: 10px;
    display: flex;
    flex-direction: column;
  }
`;

export const CustomIconButton = styled(IconButton)`
  border-radius: 14px;
  border: 2px solid #303033;
`;

export const CustomCheckBox = styled(Checkbox)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const TimeLineContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  width: 100%;

  div {
  }
`;

export const CardContainer = styled(Box)`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  margin-bottom: 30px;


`;
export const DocumentoButton = styled(Box)`
  gap: 20px;
 
  .InputContainer {
    margin-bottom: 20px;
  }
  .fileArea {
    iframe {
      width: 100%;
      height: 100vh;
    }
  }
`;

