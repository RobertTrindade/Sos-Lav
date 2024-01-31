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
import { INewValue } from "../../AutoCompleteMultiple";
import { AutoCompleteComponent } from "../../AutoComplete";

export const AutoCompleteFilter: FC<{
  label: string;
  searchTarget: string;
  options: INewValue[];
}> = ({ label, searchTarget, options }) => {
  const { updateQueryParams } = useQueryParams();
  const [value, setValue] = useState<INewValue>();

  useEffect(() => {
    updateQueryParams("patio", value?.id);
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
          <AutoCompleteComponent
            options={options && options}
            label="patio"
            noOptionsText="Nenhuma Pátio encontrado"
            SetStateAction={setValue}
            multiple={true}
            target="patio"
            value={value}
          />
        </CustomAccordionDetails>
      </CustomAccordion>
    )
  );
};
