"use client";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  css,
  styled,
} from "@mui/material";

export const SideBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open: boolean;
}>`
  left: 0px;
  width: 300px;
  height: 100vh;
  border-right: 1px solid #2a2b2f;
  background: #242529;
  transition: transform 0.3s ease-in-out; /* Adiciona uma transição suave à propriedade transform */
  transform: translateX(${({ open }) => (open ? "0" : "-100%")});
  position: ${({ open }) => (open ? "sticky" : "absolute")};
  z-index: 100;
`;

export const CustomToolBar = styled(Toolbar)`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  gap: 100px;
  .header {
    display: flex;
    justify-content: right;
    align-items: end;
    width: 100%;
  }
`;

export const Header = styled(Box)`
  display: flex;
  justify-content: right;
  align-items: end;
  width: 100%;
  margin-top: 24px;
`;

export const Profile = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 50px;
`;
export const NameProfile = styled(Typography)`
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CargoProfile = styled(Typography)`
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const EditProfile = styled(Button)`
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: 1px solid #999a9a;
  border-radius: 20px;
  &:hover {
    border: 1px solid #999a9a;
  }
`;

export const SideItems = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;


`;

export const SideItem = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{
  active?: boolean;
}>`
  height: 30px;
  padding: 20px;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 10px;
  display: flex;
  align-content: center;
  justify-content: start;
  &:hover {
    background: #F60;
    font-weight: bold;

  }

  ${({ active }) =>
    active &&
    css`
      background: #F60;
      opacity: 50.0;
      font-weight: bold;

    `}

`;
