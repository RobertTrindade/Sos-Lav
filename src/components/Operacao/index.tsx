"use client";

import { SubItemCard } from "../subItemCard";
import { Container } from "./styles";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

import localStorageService from "@/src/services/auth/localStorage.service";
import { IUsuariosDto } from "@/src/services/usuarios/usuarios.service";
import { useState, useEffect } from "react";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";

export const OperacaoComponent = () => {
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
      {permissions.find((item) => item.title === "ncv") && (
        <SubItemCard
          label="Ncv"
          link="/operacao/ncv"
          icon={<DirectionsCarIcon color="secondary" />}
        />
      )}

      {permissions.find((item) => item.title === "chamados") && (
        <SubItemCard
          label="Chamados"
          link="/operacao/chamados"
          icon={<SupportAgentIcon color="secondary" />}
        />
      )}
    </Container>
  ) : (
    <CustomCircularProgress />
  );
};
