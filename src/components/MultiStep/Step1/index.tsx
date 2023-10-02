"use client";

import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { Container, CustomFormLabel, Label } from "./styles";
import { useState } from "react";
import { useRegister } from "@/src/contexts/registerContext";

export const Step1Component = () => {
  const { handleChangeContext, user } = useRegister();
  const [value, setValue] = useState(user.step1.userType || "pf");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    handleChangeContext(
      1,
      "userType",
      (event.target as HTMLInputElement).value
    );
  };

  return (
    <Container>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Tipo de Cadastro
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <CustomFormLabel
          value="pf"
          control={<Radio />}
          label={<Label>Pessoa Física</Label>}
        />
        <CustomFormLabel
          value="pj"
          control={<Radio />}
          label={<Label>Pessoa Jurídica</Label>}
        />
      </RadioGroup>
    </Container>
  );
};
