import * as React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { Container, CustomBottomNavigation } from "./styles";
import { usePathname } from "next/navigation";
import HomeIcon from "@mui/icons-material/Home";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HelpIcon from "@mui/icons-material/Help";
import LoginIcon from "@mui/icons-material/Login";
import { Typography, styled } from "@mui/material";
import Link from "next/link";

export const BottomBarComponent = () => {
  const pathname = usePathname();

  const [value, setValue] = React.useState<string>();

  React.useEffect(() => {
    if (pathname === "/login" || pathname === "/register") {
      setValue("entrar");
      return;
    }

    if (pathname === "/") {
      setValue("inicio");
      return;
    }

    if (pathname === "/explorar") {
      setValue("explorar");
      return;
    }

    if (pathname === "/help") {
      setValue("ajuda");
      return;
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Container>
      <CustomBottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          href="/"
          label={<Label>ínicio</Label>}
          value="inicio"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          href="/"
          label={<Label>Explorar</Label>}
          value="explorar"
          icon={<TravelExploreIcon />}
        />
        <BottomNavigationAction
          href="/"
          label={<Label> Ajuda</Label>}
          value="ajuda"
          icon={<HelpIcon />}
        />
        <BottomNavigationAction
          href="/register"
          label={<Label>Entrar</Label>}
          value="entrar"
          icon={<LoginIcon />}
        />
      </CustomBottomNavigation>
    </Container>
  );
};

const Label = styled(Typography)`
  font-size: 10px;
  font-weight: bold;
  color: #313234;
`;
