"use client";

import {
  NavBar,
  CustomToolbar,
  Header,
  CustomIconButton,
  MobileLogo,
} from "./styles";

import * as React from "react";
import Link from "next/link";
import { AnnounceBarComponent } from "./AnnounceBar";
import { IAnnounceBarDto } from "@/src/services/announceBar/announceBar.service";
import Image from "next/image";
import logo from "./logo/index.svg";
import { Menu, MenuItem } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import { ButtonComponent } from "../Buttons";
import { InputComponent } from "../Inputs";
import { usePathname } from "next/navigation";

interface IHeaderComponent {
  Announces: IAnnounceBarDto[];
}

export const HeaderComponent: React.FC<IHeaderComponent> = ({ Announces }) => {
  const path = usePathname();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuId = "primary-search-account-menu";

  const isMenuOpen = Boolean(anchorEl);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      sx={{ marginTop: "40px" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Caminhões</MenuItem>
      <MenuItem onClick={handleMenuClose}>Carros</MenuItem>
      <MenuItem onClick={handleMenuClose}>Motos</MenuItem>
    </Menu>
  );
  return (
    !path.startsWith("/adm") && (
      <Header id="userHeader">
        <NavBar position="static">
          <MobileLogo>
            <CustomIconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Link href={"/"}>
                <Image src={logo} alt="Logo do grupo carvalho Leilões" />
              </Link>
            </CustomIconButton>
          </MobileLogo>

          <CustomToolbar>
            <CustomIconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Link href={"/"}>
                <Image src={logo} alt="Logo do grupo carvalho Leilões" />
              </Link>
            </CustomIconButton>
            <ButtonComponent
              customStyles={{
                color: "#3e4042",
                fontSize: "14px",
                fontWeight: "500",
              }}
              buttonProps={{
                endIcon: <KeyboardArrowDownIcon color="primary" />,
                onClick: handleOpenNavMenu,
              }}
              sx={{
                "&:hover": {
                  color: "primary.main", // Estilos para o hover
                  fontWeight: "600",
                },
              }}
            >
              Categorias
            </ButtonComponent>

            <InputComponent
              label="Buscar por produto"
              type="text"
              customStyles={{
                color: "#000",
                width: "513px",
                backgroundColor: "rgba(217, 217, 217, 0.50)",
                borderRadius: "25px",
              }}
            />

            <ButtonComponent
              customStyles={{
                color: "#3e4042",
                fontSize: "14px",
                fontWeight: "500",
              }}
              sx={{
                "&:hover": {
                  color: "primary.main", // Estilos para o hover
                  fontWeight: "600",
                },
              }}
            >
              Comprar
            </ButtonComponent>

            <ButtonComponent
              customStyles={{
                color: "#3e4042",
                fontSize: "14px",
                fontWeight: "500",
              }}
              sx={{
                "&:hover": {
                  color: "primary.main", // Estilos para o hover
                  fontWeight: "600",
                },
              }}
            >
              Ajuda
            </ButtonComponent>

            <ButtonComponent
              customStyles={{
                color: "#3e4042",
                fontSize: "14px",
                fontWeight: "500",
              }}
              sx={{
                "&:hover": {
                  color: "primary.main", // Estilos para o hover
                  fontWeight: "600",
                },
              }}
              buttonProps={{
                startIcon: <PersonIcon color="primary" />,
              }}
            >
              <Link href={"/login"}>Entrar</Link>
            </ButtonComponent>
          </CustomToolbar>
        </NavBar>
        <AnnounceBarComponent Announces={Announces} />
        {renderMenu}
      </Header>
    )
  );
};
