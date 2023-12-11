"use client";
import DashboardIcon from "@mui/icons-material/Dashboard";
import * as React from "react";
import {
  CargoProfile,
  CustomSkeleton,
  CustomToolBar,
  EditProfile,
  NameProfile,
  Profile,
  SideBar,
  SideItem,
  SideItems,
  ProfileIcon,
} from "./styles";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";
import { usePathname } from "next/navigation";
import Link from "next/link";
import BadgeIcon from "@mui/icons-material/Badge";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import { SidebarIcon } from "../Navbar";
import userService, {
  IUsuariosDto,
} from "@/src/services/usuarios/usuarios.service";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import localStorageService from "@/src/services/auth/localStorage.service";

export const SideBarComponent: React.FC<{
  open: boolean;
  handleClick: () => void;
  handleClose: () => void;
}> = ({ open, handleClick, handleClose }) => {
  const path = usePathname();
  const pathParts = path.split("/").filter((part) => part !== "");
  const router = useRouter();
  const items = new Array(6).fill(null);
  const [user, setUser] = React.useState<IUsuariosDto>();

  React.useEffect(() => {
    handleClose();
  }, [path]);

  React.useEffect(() => {
    (async () => {
      try {
        if (!localStorageService.getToken()) router.push("/login");

        const data = await userService.getMyself();
        if (data) setUser(data);
      } catch (error) {
        router.push("/login");
      }
    })();
  }, [path]);

  return (
    pathParts[0] !== "login" && (
      <>
        <SideBar open={open}>
          <CustomToolBar>
            <Profile>
              <IconButton
                size="large"
                onClick={() => handleClick()}
                className="IconButton"
              >
                <SidebarIcon />
              </IconButton>

              {user?.imageUrl ? (
                <ProfileIcon
                  src={process.env.NEXT_PUBLIC_API_BASE_URL + user.imageUrl}
                />
              ) : (
                <CustomSkeleton variant="circular" width={120} height={120} />
              )}

              {user?.name ? (
                <NameProfile>{user.name}</NameProfile>
              ) : (
                <CustomSkeleton variant="text" />
              )}

              {user?.name ? (
                <CargoProfile>{user.role} </CargoProfile>
              ) : (
                <CustomSkeleton variant="text" />
              )}

              <EditProfile variant="outlined">Editar</EditProfile>
            </Profile>

            <SideItems>
              {user?.Permissions ? (
                <>
                  <Link href="/">
                    <SideItem
                      active={path === "/"}
                      startIcon={<DashboardIcon />}
                    >
                      Dashboard
                    </SideItem>
                  </Link>

                  <Link
                    href="/chamados"
                    style={{
                      display: user?.Permissions.find(
                        (item) => item.title === "chamados"
                      )
                        ? "flex"
                        : "none",
                    }}
                  >
                    <SideItem
                      active={pathParts[0] === "chamados"}
                      startIcon={<SupportAgentIcon />}
                    >
                      Chamados
                    </SideItem>
                  </Link>

                  <Link
                    href="/usuarios"
                    style={{
                      display: user?.Permissions.find(
                        (item) => item.title === "usuarios"
                      )
                        ? "flex"
                        : "none",
                    }}
                  >
                    <SideItem
                      active={pathParts[0] === "usuarios"}
                      startIcon={<BadgeIcon />}
                    >
                      Usuários
                    </SideItem>
                  </Link>

                  <Link
                    href="/motoristas"
                    style={{
                      display: user?.Permissions.find(
                        (item) => item.title === "motoristas"
                      )
                        ? "flex"
                        : "none",
                    }}
                  >
                    <SideItem
                      active={pathParts[0] === "motoristas"}
                      startIcon={<LocalShippingIcon />}
                    >
                      Motoristas
                    </SideItem>
                  </Link>

                  <Link
                    href="/"
                    style={{
                      display: user?.Permissions.find(
                        (item) => item.title === "ecossistema"
                      )
                        ? "flex"
                        : "none",
                    }}
                  >
                    <SideItem
                      active={path === "ecossistema"}
                      startIcon={<PublicIcon />}
                    >
                      Ecossistema
                    </SideItem>
                  </Link>

                  <Link href="/" className="newLinks">
                    <SideItem
                      active={path === "ecossistema"}
                      startIcon={<NewspaperIcon />}
                    >
                      Novidades
                    </SideItem>
                  </Link>

                  <SideItem
                    active={path === "ecossistema"}
                    startIcon={<LogoutIcon />}
                    onClick={() => {
                      localStorageService.removeToken();
                      router.push("/login");
                    }}
                  >
                    Logout
                  </SideItem>
                </>
              ) : (
                <>
                  {items.map((_, index) => (
                    <CustomSkeleton
                      variant="rounded"
                      key={index}
                      sx={{
                        height: "30px",
                        padding: "20px",
                      }}
                    />
                  ))}
                  <SideItem
                    active={path === "ecossistema"}
                    startIcon={<LogoutIcon />}
                    onClick={() => {
                      localStorageService.removeToken();
                      router.push("/login");
                    }}
                  >
                    Logout
                  </SideItem>
                </>
              )}
            </SideItems>
          </CustomToolBar>
        </SideBar>
      </>
    )
  );
};
