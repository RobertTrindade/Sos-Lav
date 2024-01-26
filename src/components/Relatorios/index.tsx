"use client";

import { SubItemCard } from "../subItemCard";
import { Container } from "./styles";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import localStorageService from "@/src/services/auth/localStorage.service";
import { IUsuariosDto } from "@/src/services/usuarios/usuarios.service";
import { useState, useEffect } from "react";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";

export const RelatoriosComponent = () => {
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
      {permissions.find((item) => item.title === "fechamentoMotorista") && (
        <SubItemCard
          label="Fechamento de Motoristas"
          link="/relatorios/fechamento-motorista"
          icon={<LocalShippingIcon color="secondary" />}
        />
      )}
    </Container>
  ) : (
    <CustomCircularProgress color="secondary" size={"large"} />
  );
};
