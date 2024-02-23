"use client";

import * as React from "react";
import { CustomNavigation, CustomBottomNavigationAction } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

import { useRouter } from "next/navigation";

export const SimpleBottomNavigation = () => {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  console.log(value)
  return (
    <CustomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue === 0) router.push("/main");
        if (newValue === 1) router.push("/cesta");
      }}
    >
      <CustomBottomNavigationAction label="ínicio" icon={<HomeIcon />}  />
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
