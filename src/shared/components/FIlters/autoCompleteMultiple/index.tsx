"use client";

import { AccordionSummary, Box, IconButton } from "@mui/material";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionTitle,
} from "../styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC, useEffect, useState } from "react";
import useQueryParams from "@/src/hooks/usehandleQueryString";
import { AutoCompleteComponentMultiple, INewValue } from "../../AutoCompleteMultiple";

export const AutoCompleteFilterMultiple: FC<{
  label: string;
  searchTarget: string;
  options: INewValue[];
}> = ({ label, searchTarget, options }) => {
  const { updateQueryParams } = useQueryParams();
  const [value, setValue] = useState<INewValue[]>([]);

  useEffect(() => {
    if(!value.length) return
    updateQueryParams("patio", value.map(patios => patios.id));
  }, [value]);
  return (
    options.length && (
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
          <CustomAccordionTitle>{label} </CustomAccordionTitle>
        </AccordionSummary>

        <CustomAccordionDetails>
          <AutoCompleteComponentMultiple
            options={options && options}
            noOptionsText="Nenhuma Pátio encontrado"
            SetStateAction={setValue}
            label= "patios"
            target="patio"
            multiple={true}
            value={value}
          />
        </CustomAccordionDetails>
      </CustomAccordion>
    )
  );
};
