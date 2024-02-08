"use client";

import { AccordionSummary, IconButton } from "@mui/material";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionTitle,
} from "../styles";
import PatiosService, {
  IPatiosServiceDTO,
} from "@/src/services/patios/patios.service";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { AutoCompleteComponent, INewValue } from "../../AutoComplete";

export const PatiosFilter = () => {
  const [patios, setPatios] = useState<IPatiosServiceDTO[]>([]);
  const [value, setValue] = useState<INewValue>();

  useEffect(() => {
    fetchPatios();
  }, []);

  const fetchPatios = async () => {
    try {
      const res = await PatiosService.getPatios();
      setPatios(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    patios && (
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
          <CustomAccordionTitle>Patio </CustomAccordionTitle>
        </AccordionSummary>

        <CustomAccordionDetails>
          <AutoCompleteComponent
            label="Pátios"
            SetStateAction={setValue}
            value={value}
            noOptionsText="Nenhum pátio encontrado"
            options={patios.map(({ nome, id }) => ({
              label: nome,
              id: id,
            }))}
          />
        </CustomAccordionDetails>
      </CustomAccordion>
    )
  );
};
