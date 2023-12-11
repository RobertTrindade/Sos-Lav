"use client";

import { AccordionSummary, IconButton } from "@mui/material";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionTitle,
  CustomDataPicker,
} from "../styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import useQueryParams from "@/src/hooks/usehandleQueryString";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
export const DataFilter = () => {
  const { updateQueryParams } = useQueryParams();
  const [initialDate, setinitialDate] = useState(
    new AdapterDayjs().date(new Date())
  );
  const [finalDate, setFinalDate] = useState(
    new AdapterDayjs().date(new Date())
  );

  const handleChangeTimeInitial = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const time = value as Date;
    const date = dayjs(time.toISOString()).toDate();
    setinitialDate(dayjs(time.toISOString())); // Converta o Date para Dayjs aqui
    updateQueryParams("dataInicio", date);
  };

  const handleChangeTimeFinal = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const time = value as Date;
    const date = dayjs(time.toISOString()).toDate();
    setFinalDate(dayjs(time.toISOString())); // Converta o Date para Dayjs aqui
    updateQueryParams("dataFinal", date);
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
          closeOnSelect
          onChange={handleChangeTimeInitial}
          value={initialDate}
          sx={{
            color: "white",
          }}
          slotProps={{ textField: { variant: "filled" } }}
        />

        <CustomDataPicker
          format="DD/MM/YYYY"
          label="Data Final"
          value={finalDate}
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
