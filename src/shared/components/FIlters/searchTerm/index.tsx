"use client";

import { AccordionSummary, Box, IconButton } from "@mui/material";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionTitle,
} from "../styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FC } from "react";
import { InputComponent } from "../../Inputs";
import SearchIcon from "@mui/icons-material/Search";
import useQueryParams from "@/src/hooks/usehandleQueryString";

export const SearchTerm: FC<{
  label: string;
  searchTarget: string;
}> = ({ label, searchTarget }) => {
  const { updateQueryParams } = useQueryParams();

  const handleSearchTerm = (value: string) => {
    updateQueryParams(searchTarget, value);
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
        <CustomAccordionTitle>{label} </CustomAccordionTitle>
      </AccordionSummary>

      <CustomAccordionDetails>
        <InputComponent
          label={`Pesquise com ${label}`}
          type="email"
          customProps={{
            startAdornment: (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <SearchIcon color="secondary" />
              </Box>
            ),
            onChange: (e) => {
              handleSearchTerm(e.target.value);
            },
          }}
          customStyles={{
            color: "color: ${({ theme }) => theme.palette.secondary.main}",
            height: "50px",
            width: "400px",
          }}
        />
      </CustomAccordionDetails>
    </CustomAccordion>
  );
};
