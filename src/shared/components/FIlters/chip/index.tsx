"use client";

import { AccordionSummary, IconButton } from "@mui/material";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionTitle,
} from "../styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomToggleButtonGroup, CustomToggleButton } from "./styles";
import { FC, useState } from "react";
import useQueryParams from "@/src/hooks/usehandleQueryString";

interface ChipValues {
  value: string;
  label: string;
}
interface IChips {
  chips: ChipValues[];
}

export const Chips: FC<IChips> = ({ chips }) => {

  const [alignment, setAlignment] = useState("");
  const { updateQueryParams } = useQueryParams();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    updateQueryParams("status", newAlignment);

  };

  return (
    chips && (
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
          <CustomAccordionTitle>Status</CustomAccordionTitle>
        </AccordionSummary>

        <CustomAccordionDetails>
          <CustomToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            {chips.map((chip) => (
              <CustomToggleButton key={chip.value} value={chip.value}>
                {chip.label}
              </CustomToggleButton>
            ))}
          </CustomToggleButtonGroup>
        </CustomAccordionDetails>
      </CustomAccordion>
    )
  );
};
