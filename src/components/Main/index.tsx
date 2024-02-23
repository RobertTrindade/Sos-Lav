"use client";

import { Container, Content } from "./styles";
import { useRouter } from "next/navigation";
import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";
import React from "react";
import { CategoryComponent } from "./Category";
import { DepositionsComponent } from "./Depositions";

const categories = [
  {
    label: "Lavanderia",
    id: 0,
  },
];

export const MainComponent = () => {
  const router = useRouter();

  const [payload, setPayload] = React.useState();

  const handleChange = (target: keyof any, value: any) => {
    setPayload(value);
  };

  return (
    <Container>
      <Content>
        <AutoCompleteComponent
          options={categories}
          label="Encontre uma categoria ... "
          noOptionsText="Nenhuma categoria encontrada ..."
          setStateActionWithTarget={handleChange}
          target="categoria"
          value={payload}
        />
        <CategoryComponent />
        <DepositionsComponent />
      </Content>
    </Container>
  );
};
