"use client";

import * as React from "react";
import { CustomNavigation, CustomBottomNavigationAction } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
export const SimpleBottomNavigation = () => {
  const [value, setValue] = React.useState(0);

  return (
    <CustomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <CustomBottomNavigationAction label="ínicio" icon={<HomeIcon />} />
      <CustomBottomNavigationAction
        label="Minha Cesta"
        icon={<ShoppingBasketIcon />}
      />
      <CustomBottomNavigationAction
        label="Perfil"
        icon={<AccountCircleIcon />}
      />
      <CustomBottomNavigationAction label="Sair" icon={<LogoutIcon />} />
    </CustomNavigation>
  );
};
