"use client";
import DashboardIcon from "@mui/icons-material/Dashboard";
import * as React from "react";
import {
  CargoProfile,
  CustomToolBar,
  EditProfile,
  NameProfile,
  Profile,
  SideBar,
  SideItem,
  SideItems,
} from "./styles";
import { ProfileIcon } from "./icon";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
export const SideBarComponent: React.FC<{
  open: boolean;
}> = ({ open }) => {
  const path = usePathname();
  const pathParts = path.split("/").filter((part) => part !== "");

  return (
    pathParts[0] !== "login" && (
      <>
        <SideBar open={open}>
          <CustomToolBar>
            <Profile>
              <ProfileIcon />
              <NameProfile>Thiago Barbosa </NameProfile>
              <CargoProfile>ADM </CargoProfile>

              <EditProfile variant="outlined">Editar</EditProfile>
            </Profile>

            <SideItems>
              <Link href="/">
                <SideItem active={path === "/"} startIcon={<DashboardIcon />}>
                  Dashboard
                </SideItem>
              </Link>

              <Link href="/chamados">
                <SideItem
                  active={pathParts[0] === "chamados"}
                  startIcon={<SupportAgentIcon />}
                >
                  Chamados
                </SideItem>
              </Link>

              <Link href="/usuarios">
                <SideItem
                  active={pathParts[0] === "usuarios"}
                  startIcon={<BadgeIcon />}
                >
                  Usuários
                </SideItem>
              </Link>

              <Link href="/motoristas">
                <SideItem
                  active={pathParts[0] === "motoristas"}
                  startIcon={<LocalShippingIcon />}
                >
                  Motoristas
                </SideItem>
              </Link>

              <Link href="/">
                <SideItem
                  active={path === "ecossistema"}
                  startIcon={<PublicIcon />}
                >
                  Ecossistema
                </SideItem>
              </Link>
            </SideItems>
          </CustomToolBar>
        </SideBar>
      </>
    )
  );
};
