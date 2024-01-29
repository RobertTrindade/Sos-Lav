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
import AssessmentIcon from "@mui/icons-material/Assessment";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import { SidebarIcon } from "../Navbar";
import userService, {
  IUsuariosDto,
} from "@/src/services/usuarios/usuarios.service";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import localStorageService from "@/src/services/auth/localStorage.service";
import ChatIcon from "@mui/icons-material/Chat";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
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
        if (data.status !== "ativo") router.push("/login");
        localStorageService.saveObject(data.Permissions, "permissions");
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
                  src={user.imageUrl}
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
              {user?.id ? (
                <EditProfile
                  variant={pathParts[0] === "perfil" ? "contained" : "outlined"}
                  href={`/perfil/${user?.id}`}
                >
                  Editar
                </EditProfile>
              ) : (
                <CustomSkeleton variant="text" width={50} height={50} />
              )}
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

                  <Link href="/chat">
                    <SideItem
                      active={pathParts[0] === "chat"}
                      startIcon={<ChatIcon />}
                    >
                      Chat
                    </SideItem>
                  </Link>

                  <Link href="/relatorios">
                    <SideItem
                      active={pathParts[0] === "relatorios"}
                      startIcon={<AssessmentIcon />}
                    >
                      Relatórios
                    </SideItem>
                  </Link>

                  <Link href="/cadastros">
                    <SideItem
                      active={pathParts[0] === "cadastros"}
                      startIcon={<AppRegistrationIcon />}
                    >
                      Cadastros
                    </SideItem>
                  </Link>

                  <Link href="/operacao">
                    <SideItem
                      active={pathParts[0] === "operacao"}
                      startIcon={<SupportAgentIcon />}
                    >
                      Operação
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
