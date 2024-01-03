import { Box, Typography, styled } from "@mui/material";
import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FC } from "react";

export const DataPickerComponent: FC<{
  handleChangeTime: (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => void;
  value: unknown;
  label: string;
}> = ({ handleChangeTime, value, label }) => {
  return (
    <Container>
      <CustomInputText>{label}</CustomInputText>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-BR">
        <CustomDataPicker
          format="DD/MM/YYYY"
          closeOnSelect
          onChange={handleChangeTime}
          value={value}
          sx={{
            color: "white",
          }}
          slotProps={{ textField: { variant: "filled" } }}
        />
      </LocalizationProvider>
    </Container>
  );
};
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CustomInputText = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-weight: bold;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 15px;
  }
`;

const CustomDataPicker = styled(DatePicker)`
  outline: none !important;

  .MuiInputBase-root {
    border-radius: 14px;

    border: 2px solid #303033 !important ;
    background-color: transparent !important ;

    display: flex;
    align-items: center !important;
    justify-content: space-around;
  }

  .MuiOutlinedInput-root {
    border: none;
    background-color: transparent !important  ;
    border: 2px solid #303033 !important ;
  }

  .MuiInputBase-formControl {
    border: none;
    background-color: transparent !important  ;
  }

  input {
    background-color: transparent !important  ;
    outline: none !important ;

    color: ${({ theme }) => theme.palette.secondary.main} !important ;
  }
  path {
    color: ${({ theme }) => theme.palette.secondary.main} !important ;
  }
`;
