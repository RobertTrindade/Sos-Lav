"use client";
import { Box, Typography, styled } from "@mui/material";

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

export const MotoristaDadosContainer = styled(Box)`
  display: flex;

  flex-wrap: wrap;

  div {
    flex-basis: calc(
      50% - 30px
    ); /* Adjust the width and margin according to your design */
    margin: 4px; /* Adjust the margin according to your design */
  }
`;

export const MotoristaCnhContainer = styled(Box)`
  margin-right: 20px;
  .CnhArea {
    position: relative;

    height: 500px;
    flex: 1;
  }

  .fields {
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;
    div {
      flex-basis: calc(
        50% - 30px
      ); /* Adjust the width and margin according to your design */
      margin: 4px; /* Adjust the margin according to your design */
    }
  }
`;

export const MotoristaContratoContainer = styled(Box)`
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

export const Form = styled(Box)`
  display: flex;
  margin-top: 30px;

  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
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
`;

export const ExtraValues = styled(Box)`
  display: flex;
  flex-direction: column;
  .values {
    display: flex;
    gap: 20px;
  }
`;

export const Row = styled(Box)`
  display: flex;
  gap: 20px;
`;
