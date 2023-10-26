"use client";
import {
  Footer,
  Container,
  CustomIconButton,
  CustomListItemText,
  CustomListItemButton,
  CustomListSubItemButton,
  IconsContainer,
  ListItemContainer,
  CustomSubItem,
  ListComponent,
} from "./styles";
import { Collapse, Link } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { ExpandLess, ExpandMore, WhatsApp } from "@mui/icons-material";
import logo from "@/src/shared/logo/index.svg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
interface IColapse {
  open: boolean;
}

export const FooterComponent = () => {
  const [openWho, setOpenWho] = React.useState(true);
  const [openCategories, setOpenCategories] = React.useState(true);
  const [openEvents, setOpenEvents] = React.useState(true);
  const [openHelp, setOpenHelp] = React.useState(true);

  const handleClickWho = () => {
    setOpenWho(!openWho);
  };

  const handleClickCategories = () => {
    setOpenCategories(!openCategories);
  };

  const handleClickEvents = () => {
    setOpenEvents(!openEvents);
  };

  const handleClickHelp = () => {
    setOpenHelp(!openHelp);
  };

  return (
    <Footer>
      <Container>
        <IconsContainer>
          <CustomIconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Link href={"/"}>
              <Image src={logo} alt="Logo do grupo carvalho Leilões" />
            </Link>
          </CustomIconButton>

          <ListItemContainer className="socialMediasFooter">
            <CustomIconButton size="small" color="inherit" aria-label="menu">
              <Link href={"/"}>
                <LinkedInIcon />
              </Link>
            </CustomIconButton>

            <CustomIconButton size="small" color="inherit" aria-label="menu">
              <Link href={"/"}>
                <FacebookIcon />
              </Link>
            </CustomIconButton>
            <CustomIconButton size="small" color="inherit" aria-label="menu">
              <Link href={"/"}>
                <InstagramIcon />
              </Link>
            </CustomIconButton>
          </ListItemContainer>
        </IconsContainer>

        <ListItemContainer>
          <CustomListItemButton onClick={handleClickWho}>
            <CustomListItemText primary="Quem somos" />
            {openWho ? (
              <ExpandLess color="primary" />
            ) : (
              <ExpandMore color="primary" />
            )}
          </CustomListItemButton>

          <WhoAreWe open={openWho} />
        </ListItemContainer>
        <ListItemContainer>
          <CustomListItemButton onClick={handleClickCategories}>
            <CustomListItemText primary="Categorias" />
            {openCategories ? (
              <ExpandLess color="primary" />
            ) : (
              <ExpandMore color="primary" />
            )}
          </CustomListItemButton>

          <Category open={openCategories} />
        </ListItemContainer>

        <ListItemContainer>
          <CustomListItemButton onClick={handleClickEvents}>
            <CustomListItemText primary="Eventos" />
            {openEvents ? (
              <ExpandLess color="primary" />
            ) : (
              <ExpandMore color="primary" />
            )}
          </CustomListItemButton>

          <Events open={openEvents} />
        </ListItemContainer>

        <ListItemContainer>
          <CustomListItemButton onClick={handleClickHelp}>
            <CustomListItemText primary="Entre em contato" />
          </CustomListItemButton>

          <Contact open={openHelp} />
        </ListItemContainer>
      </Container>
    </Footer>
  );
};

const WhoAreWe: FC<IColapse> = ({ open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <ListComponent disablePadding>
        <CustomListSubItemButton>
          <CustomSubItem>Grupo Carvalho</CustomSubItem>
        </CustomListSubItemButton>{" "}
        <CustomListSubItemButton>
          <CustomSubItem> Nossos Parceiros</CustomSubItem>
        </CustomListSubItemButton>{" "}
      </ListComponent>
    </Collapse>
  );
};

// Componentes para outras opções de lista abertas
const Events: FC<IColapse> = ({ open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <ListComponent disablePadding>
        <CustomListSubItemButton>
          <CustomSubItem>Eventos de Leilão</CustomSubItem>
        </CustomListSubItemButton>
        <CustomListSubItemButton>
          <CustomSubItem>Semana do Consumidor</CustomSubItem>
        </CustomListSubItemButton>
      </ListComponent>
    </Collapse>
  );
};

// Componentes para outras opções de lista abertas
const Category: FC<IColapse> = ({ open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <ListComponent disablePadding>
        <CustomListSubItemButton>
          <CustomSubItem>Carros de Luxo</CustomSubItem>
        </CustomListSubItemButton>
        <CustomListSubItemButton>
          <CustomSubItem>Veículos Clássicos</CustomSubItem>
        </CustomListSubItemButton>
      </ListComponent>
    </Collapse>
  );
};

const Contact: FC<IColapse> = ({ open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <ListComponent disablePadding>
        <CustomListSubItemButton>
          <CustomSubItem className="bold">(14) 99762-3313</CustomSubItem>
          <WhatsApp color="primary" />
        </CustomListSubItemButton>
        <CustomListSubItemButton>
          <CustomSubItem className="bold">
            contato@grupocarvalholeiloes.com.br{" "}
          </CustomSubItem>
        </CustomListSubItemButton>
      </ListComponent>
    </Collapse>
  );
};
