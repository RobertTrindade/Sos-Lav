import * as React from "react";
import { AvatarArea, CustomHeader, CustomToolbar, Userdata } from "./styles";
import { Avatar, IconButton } from "@mui/material";
import { MenuIcon } from "../../icons/menuIcon";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");

export const Header = () => {
  return (
    <CustomHeader position="absolute">
      <CustomToolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Userdata>
          <span className="name">Thiago Barbosa</span>
          <span className="data">
            {dayjs().format("ddd[,] DD [de] MMMM").toString()}
          </span>
        </Userdata>

        <AvatarArea>
          <Avatar alt="Remy Sharp" />
        </AvatarArea>
      </CustomToolbar>
    </CustomHeader>
  );
};
