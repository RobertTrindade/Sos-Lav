"use client";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { Container, Content, Title } from "./styles";
import { FC, ReactNode } from "react";

interface ISubItemCard {
  icon: ReactNode;
  link: string;
  label: string;
}

export const SubItemCard: FC<ISubItemCard> = ({ icon, link, label }) => {
  return (
    <Container>
      <Content>
        <div className="header">
          <div className="circle">{icon}</div>
        </div>
        <div className="body">
          <Title>{label}</Title>

          <ButtonComponent
            buttonProps={{
              variant: "contained",
              href:link
            }}
            customStyles={{
              color: "white",
              fontWeight: "600",
              fontSize: "12px",
              height: "40px",
            }}
          >
            Abrir
          </ButtonComponent>
        </div>
      </Content>
    </Container>
  );
};
