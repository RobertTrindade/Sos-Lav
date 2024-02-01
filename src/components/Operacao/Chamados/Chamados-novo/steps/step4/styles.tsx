import { styled, Box, Typography, css } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled(Typography)`
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.main};
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
  color: ${({ theme }) => theme.palette.secondary.main};
  margin-top: 30px;

  margin-bottom: 30px;

  ${({ theme }) => theme.breakpoints.down("laptop")} {
    font-size: 18px;
  }
`;

export const DriverContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DriverName = styled(Typography)`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const DriverStatus = styled(Typography)`
  font-size: 12px;
  font-weight: bold;
  color: ${({ children }) => (children === "indisponivel" ? "red" : "green")};
  text-transform: capitalize;
`;

export const DriverPrice = styled(Typography)`
  font-size: 11px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const DriverCard = styled(Box, {
  shouldForwardProp(propName) {
    return propName !== "active";
  },
})<{
  active: boolean;
}>`
  width: 100%;
  cursor: pointer;
  height: 100px;
  border: 2px solid #303033;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0px 16px;
  .header {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 20px;
    .avatar {
      width: 60px;
      height: 60px;
    }
  }

  .priceContainer {
    width: 100px;
  }

  .XpContainer {
    width: 100px;
  }
  .XpContainer {
    width: 100px;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
  }

  ${({ active, theme }) => {
    return (
      active &&
      css`
        border: 2px solid ${theme.palette.primary.main};
      `
    );
  }}
`;
