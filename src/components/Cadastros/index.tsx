"use client";

import { SubItemCard } from "../subItemCard";
import { Container } from "./styles";
import GiteIcon from "@mui/icons-material/Gite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BadgeIcon from "@mui/icons-material/Badge";

import localStorageService from "@/src/services/auth/localStorage.service";
import { IUsuariosDto } from "@/src/services/usuarios/usuarios.service";
import { useState, useEffect } from "react";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";

export const CadastroComponent = () => {
  const [permissions, setPermissions] = useState<IUsuariosDto["Permissions"]>();

  useEffect(() => {
    const data = localStorageService.getObject(
      "permissions"
    ) as IUsuariosDto["Permissions"];

    if (data) {
      setPermissions(data);
    }
  }, []);

  return permissions ? (
    <Container>
      {permissions.find((item) => item.title === "patios") && (
        <SubItemCard
          label="Pátios"
          link="/cadastros/patios"
          icon={<GiteIcon color="secondary" />}
        />
      )}

      {permissions.find((item) => item.title === "motoristas") && (
        <SubItemCard
          label="Motoristas"
          link="/cadastros/motoristas"
          icon={<LocalShippingIcon color="secondary" />}
        />
      )}

      {permissions.find((item) => item.title === "usuarios") && (
         <SubItemCard
         label="Usuários"
         link="/cadastros/usuarios"
         icon={<BadgeIcon color="secondary" />}
       />
      )}
    </Container>
  ) : (
    <CustomCircularProgress />
  );
};
