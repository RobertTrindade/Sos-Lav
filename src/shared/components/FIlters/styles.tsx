import {
  Accordion,
  AccordionDetails,
  Box,
  Button,
  Drawer,
  Typography,
  styled,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const CustomDrawer = styled(Drawer)``;

export const Modal = styled(Box)`
  border-left: 1px solid #242529;
  background: #242529;
  width: 600px;
  height: 100%;
  padding: 0px 16px;
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ModalHeader = styled(Box)`
  margin-top: 50px;
  display: flex;
  justify-content: end;
`;

export const CloseButton = styled(Button)`
  border-radius: 100%;
  width: 30px;
  height: 60px;
  padding: 8px;
  path {
    color: white;
  }
`;

export const CustomAccordion = styled(Accordion)`
  background-color: transparent;
`;

export const CustomAccordionTitle = styled(Typography)`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const ModalFooter = styled(Box)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-content: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 10px;
`;

export const CleanButton = styled(Button)`
  height: 50px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10px;
  border: 2px solid #303033;
  width: 260px;
`;

export const CustomDataPicker = styled(DatePicker)`
  outline: none !important;

  .MuiInputBase-root {
    border-radius: 14px;

    border: 2px solid #303033 !important ;
    background-color: transparent !important ;
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

    color: #999a9a !important ;
  }
  path {
    color: #999a9a !important ;
    padding-right: 5px;
  }
`;

export const CustomAccordionDetails = styled(AccordionDetails)`
  display: flex;
  gap: 20px;
`;
