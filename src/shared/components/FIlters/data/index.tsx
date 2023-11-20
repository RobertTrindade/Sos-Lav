"use client";

import { AccordionSummary, IconButton } from "@mui/material";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionTitle,
  CustomDataPicker,
} from "../styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFilter } from "@/src/contexts/filterContext";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
export const DataFilter = () => {
  const { filterValues, handleNewValue } = useFilter();

  const handleChangeTimeInitial = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const time = value as Date;
    handleNewValue("dataInico", dayjs(time.toISOString()));
  };

  const handleChangeTimeFinal = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const time = value as Date;
    handleNewValue("dataFinal", dayjs(time.toISOString()));
  };

  return (
    <CustomAccordion>
      <AccordionSummary
        expandIcon={
          <IconButton size="large">
            <ExpandMoreIcon color="primary" />
          </IconButton>
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <CustomAccordionTitle>Data</CustomAccordionTitle>
      </AccordionSummary>

      <CustomAccordionDetails>
        <CustomDataPicker
          format="DD/MM/YYYY"
          label="Data inicio"
          value={filterValues && filterValues?.dataInico}
          closeOnSelect
          onChange={handleChangeTimeInitial}
          sx={{
            color: "white",
          }}
          slotProps={{ textField: { variant: "filled" } }}
        />

        <CustomDataPicker
          format="DD/MM/YYYY"
          label="Data Final"
          value={filterValues && filterValues?.dataFinal}
          onChange={handleChangeTimeFinal}
          closeOnSelect
          sx={{
            color: "white",
          }}
          slotProps={{ textField: { variant: "filled" } }}
        />
      </CustomAccordionDetails>
    </CustomAccordion>
  );
};
