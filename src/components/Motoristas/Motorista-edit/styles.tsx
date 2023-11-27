"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 32px;
`;

export const Title = styled(Typography)``;

export const Content = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const MapArea = styled(Box)``;

export const TabResultArea = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
