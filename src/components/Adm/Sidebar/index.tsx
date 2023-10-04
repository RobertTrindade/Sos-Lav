"use client";

import { Container, Content, Title, Header, CustomIconButton } from "./styles";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import { InputComponent } from "../../Inputs";
import { useState } from "react";

export const SidebarComponent = () => {
  const [mode, setMode] = useState("name");

  const handleMode = () => {
    if (mode === "name") setMode("Input");
    else setMode("name");
  };




  return (
    <Container>
      <Content>
        <Header>
          <CustomIconButton size="large">
            <SettingsIcon />
          </CustomIconButton>

          {mode === "name" ? (
            <Title> Admin</Title>
          ) : (
            <InputComponent label="Buscar" type="outlined" />
          )}

          <CustomIconButton size="large" onClick={() => handleMode()}>
            <SearchIcon />
          </CustomIconButton>
        </Header>
      </Content>
    </Container>
  );
};
