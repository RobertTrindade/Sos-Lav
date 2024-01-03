"use client";

import * as React from "react";
import { Box, IconButton } from "@mui/material";
import { CustomIconButton, NavBar, TitlePage } from "./styles";
import { usePathname } from "next/navigation";
import { InputComponent } from "@/src/shared/components/Inputs";
import SearchIcon from "@mui/icons-material/Search";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { NotificationIcon } from "@/src/shared/icons/notificationIcon";

export const NavBarComponent: React.FC<{
  handleClick: () => void;
}> = ({ handleClick }) => {
  const path = usePathname();

  const createTitle = (title: string) => {
    if (title === "/") return "Dashboard";
    // Remove barras e números iniciais, se existirem
    const cleanedTitle = title.replace(/[\/0-9]/g, " ");
    // Retorna a string com a primeira letra maiúscula
    return cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1);
  };
  return (
    path !== "/login" && (
      <>
        <NavBar>
          <IconButton size="large" onClick={() => handleClick()}>
            <SidebarIcon />
          </IconButton>

          <TitlePage>{createTitle(path)}</TitlePage>

          <div className="inputArea">
            <InputComponent
              label="Pesquise por algo ... "
              type="email"
              customProps={{
                startAdornment: (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <SearchIcon color="secondary" />
                  </Box>
                ),
              }}
              customStyles={{
                color: "color: ${({ theme }) => theme.palette.secondary.main}",
                height: "50px",
                width: "400px",
              }}
            />
          </div>

          <ButtonComponent
            buttonProps={{
              variant: "contained",
              className: "btn-newsletter",
            }}
            customStyles={{
              color: "white",
              fontWeight: "700",
              fontSize: "15px",
              height: "50px",
              width: "200px",
              borderRadius: "14px",
            }}
          >
            Novidades
          </ButtonComponent>
          <CustomIconButton>
            <NotificationIcon />
          </CustomIconButton>
        </NavBar>
      </>
    )
  );
};

export const SidebarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white" />
    </svg>
  );
};
