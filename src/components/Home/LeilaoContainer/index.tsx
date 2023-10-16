"use client";

import { useState } from "react";
import { Container, LeilaoContainer } from "./styles";
import { ScrollableTabsButtonAuto } from "./tab";
import { LeilaoCardComponent } from "@/src/shared/components/LeilaoCard";

export const LeilaoContainerComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <ScrollableTabsButtonAuto value={value} setValue={setValue} />

      <LeilaoContainer>
        <LeilaoCardComponent />
      </LeilaoContainer>
    </Container>
  );
};
