"use client";

import { AccordionSummary, IconButton, ToggleButton } from "@mui/material";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionTitle,
} from "../styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useFilter } from "@/src/contexts/filterContext";
import { CustomToggleButtonGroup, CustomToggleButton } from "./styles";
import { useState } from "react";

export const Chips = () => {
  const { filterValues, handleNewValue } = useFilter();
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const [alignment, setAlignment] = useState("web");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
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
          <CustomToggleButton value="web">Cancelado</CustomToggleButton>
          <CustomToggleButton value="android">Aguardando</CustomToggleButton>
          <CustomToggleButton value="ios">Em andamento</CustomToggleButton>
        </CustomToggleButtonGroup>
      </CustomAccordionDetails>
    </CustomAccordion>
  );
};
