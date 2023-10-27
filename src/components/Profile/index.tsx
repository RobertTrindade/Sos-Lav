"use client";

import { ButtonComponent } from "@/src/shared/components/Buttons";
import { Container, Options } from "./styles";

export const ProfileComponent = () => {
  return (
    <Container>
      <Options>
        <ButtonComponent
          buttonProps={{
            variant: "text",
          }}
        >
          Overview
        </ButtonComponent>
      </Options>
    </Container>
  );
};
