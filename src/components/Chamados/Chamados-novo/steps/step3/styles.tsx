import { styled, Box, Typography } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(Typography)`
  font-weight: bold;
  color:${({ theme }) => theme.palette.secondary.main};
  font-size: 20px;
`;

export const BoxInput = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Title = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  color:${({ theme }) => theme.palette.secondary.main};
  margin-top: 30px;

  margin-bottom: 30px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    font-size: 18px;
  }
`;
