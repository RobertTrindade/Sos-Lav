"use client";

import {
  Container,
  Content,
  Title,
  Header,
  CustomIconButton,
  Nav,
  NavItem,
  CategoryTitle,
} from "./styles";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import { InputComponent } from "../../Inputs";
import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ButtonComponent } from "../../Buttons";
import PersonIcon from "@mui/icons-material/Person";
import CampaignIcon from "@mui/icons-material/Campaign";
import Link from "next/link";
export const SidebarComponent = () => {
  const [mode, setMode] = useState("name");

  const handleMode = () => {
    if (mode === "name") setMode("Input");
    else setMode("name");
  };

  const categories = ["Geral", "MKT", "Relatorios"];
  const sideItens = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      category: "Geral",
      to: "/adm",
    },
    {
      title: "Minha Conta",
      icon: <PersonIcon />,
      category: "Geral",
      to: "/adm",
    },
    {
      title: "Definições",
      icon: <SettingsIcon />,
      category: "MKT",
      to: "/adm",
    },
    {
      title: "Barra de Anúncios",
      icon: <CampaignIcon />,
      category: "MKT",
      to: "/adm/anounce",
    },

    {
      title: "Leilões",
      icon: <SettingsIcon />,
      category: "Relatorios",
      to: "/adm",
    },
  ];


  const renderCategoryItems = (category: string) => {
    return sideItens
      .filter((item) => item.category === category)
      .map((item, index) => (
        <NavItem key={index}>
          <ButtonComponent
            customStyles={{
              color: "black",
            }}
            buttonProps={{
              startIcon: item.icon,
            }}
          >
            {" "}
           <Link href={item.to}>
           {item.title}
           </Link>
          </ButtonComponent>
        </NavItem>
      ));
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

        <Nav component={"nav"}>
          {categories.map((category, index) => (
            <div key={index}>
              <CategoryTitle>{category}</CategoryTitle>
              {renderCategoryItems(category)}
            </div>
          ))}
        </Nav>
      </Content>
    </Container>
  );
};
