import { Box, Button, StepLabel, styled } from "@mui/material";

export const CustomStepLabel = styled(StepLabel)`
  .MuiStepLabel-label {
    color:${({ theme }) => theme.palette.secondary.main};
    font-weight: bolder;

  }
  font-size: 14px;

  .Mui-disabled {
    color:${({ theme }) => theme.palette.secondary.main};
    font-size: 14px;
    font-weight: normal;

  }

  .MuiSvgIcon-root {
    color:${({ theme }) => theme.palette.secondary.main};
  }

  .MuiStepLabel-label {
    color:${({ theme }) => theme.palette.secondary.main};
  }

  .MuiSvgIcon-fontSizeMedium {
    color:${({ theme }) => theme.palette.secondary.main};
  }

  .MuiStepIcon-root {
    color:${({ theme }) => theme.palette.secondary.main};
  }

  .Mui-completed {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const CustomMainButton = styled(Button)`
  color:${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  font-size: 16px;
  width: 200px;
  border-radius: 8px;
  &:disabled {
    color: #b8b9bb;

    background-color: #ededed;
  }
`;

export const CustomSecondaryButton = styled(Button)`
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #303033;
  color: #fff;
  background-color: transparent;
  width: 200px;
  border-radius: 8px;
  &:disabled {
    color: #b8b9bb;

    background-color: #ededed;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0px;
`;

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AutoCompleteBox = styled(Box)`
  position: absolute;
  top: 0;
  justify-content: center;
  margin-top: 20px;
  div {
    display: flex;

    input {
      margin: 0 auto;
      border-radius: 9px !important;
      outline: none;

      border: 1px solid ${({ theme }) => theme.palette.primary.main};
      padding: 10px;
      width: 500px;
      margin-left: 200px;
      ${({ theme }) => theme.breakpoints.down("desktop")} {
        width: 300px;
        margin-left: 50px;
      }

      ${({ theme }) => theme.breakpoints.down("mobile")} {
        width: 300px;
      }
    }
  }
`;
