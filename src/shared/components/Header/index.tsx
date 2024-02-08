import * as React from "react";
import { AvatarArea, CustomHeader, CustomToolbar, Userdata } from "./styles";
import { Avatar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export const Header = () => {
  return (
    <CustomHeader position="static">
      <CustomToolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Userdata>
          <span>Thiago Barbosa</span>
          <span>Wed 6 Oct</span>
        </Userdata>

        <AvatarArea>
          <Avatar alt="Remy Sharp"  />
        </AvatarArea>
      </CustomToolbar>
    </CustomHeader>
  );
};
