"use client";
import {
  Footer,
  Container,
  CustomIconButton,
  CustomListItemText,
  CustomListItemButton,
  CustomListSubItemButton,
} from "./styles";
import {
  Collapse,
  Link,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import logo from "@/src/shared/logo/index.svg";

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
        <div>
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
        </div>

        <div>
          <CustomListItemButton onClick={handleClickWho}>
            <CustomListItemText primary="Quem somos" />
            {openWho ? (
              <ExpandLess color="primary" />
            ) : (
              <ExpandMore color="primary" />
            )}
          </CustomListItemButton>

          <WhoAreWe open={openWho} />
        </div>
        <div>
          <CustomListItemButton onClick={handleClickCategories}>
            <CustomListItemText primary="Categorias" />
            {openCategories ? (
              <ExpandLess color="primary" />
            ) : (
              <ExpandMore color="primary" />
            )}
          </CustomListItemButton>

          <Category open={openCategories} />
        </div>

        <div>
          <CustomListItemButton onClick={handleClickEvents}>
            <CustomListItemText primary="Eventos" />
            {openEvents ? (
              <ExpandLess color="primary" />
            ) : (
              <ExpandMore color="primary" />
            )}
          </CustomListItemButton>

          <Events open={openEvents} />
        </div>

        <div>
          <CustomListItemButton onClick={handleClickHelp}>
            <CustomListItemText primary="Ajuda" />
            {openHelp ? (
              <ExpandLess color="primary" />
            ) : (
              <ExpandMore color="primary" />
            )}
          </CustomListItemButton>

          <Help open={openHelp} />
        </div>
      </Container>
    </Footer>
  );
};

const WhoAreWe: FC<IColapse> = ({ open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <CustomListSubItemButton>Sobre o grupo Carvalho</CustomListSubItemButton>
      </List>
    </Collapse>
  );
};

// Componentes para outras opções de lista abertas
const Events: FC<IColapse> = ({ open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <CustomListSubItemButton>Events</CustomListSubItemButton>
      </List>
    </Collapse>
  );
};
// Componentes para outras opções de lista abertas
const Category: FC<IColapse> = ({ open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <CustomListSubItemButton>Category</CustomListSubItemButton>
      </List>
    </Collapse>
  );
};

const Help: FC<IColapse> = ({ open }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <CustomListSubItemButton>Help</CustomListSubItemButton>
      </List>
    </Collapse>
  );
};
