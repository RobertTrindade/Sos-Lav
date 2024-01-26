"use client";
import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 32px;
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
  justify-content: space-between;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
export const MapArea = styled(Box)`
  max-width: 800px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.up("desktop")} {
    max-width: 800px;
  }
  ${({ theme }) => theme.breakpoints.only("tablet")} {
    max-width: 400px;
  }
  ${({ theme }) => theme.breakpoints.only("laptop")} {
    max-width: 400px;
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
