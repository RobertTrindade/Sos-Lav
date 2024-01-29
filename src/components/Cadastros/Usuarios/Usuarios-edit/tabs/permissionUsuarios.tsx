"use client";
import * as React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

import {
  AutoCompleteComponentMultiple,
  INewValue,
} from "@/src/shared/components/AutoCompleteMultiple";
import usuariosService, {
  IUserDto,
} from "@/src/services/usuarios/usuarios.service";
import patiosService from "@/src/services/patios/patios.service";
import {
  AutoCompleteContainer,
  BoxInput,
  Label,
  Li,
  LiText,
  PatiosSelecionadosContainer,
  PatiosSelecionadosTitle,
  Step2Container,
  Ul,
} from "../../Usuarios-novo/styles";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { IconButton } from "@mui/material";
import permissionsService from "@/src/services/permissions/permissions.service";

export const PermissaoUsuario: React.FC<{ user: IUserDto }> = ({ user }) => {
  const [permissoes, setPermissoes] = React.useState<INewValue[]>([]);
  const [userPermissions, setUserPermissions] = React.useState<
    IUserDto["Permissions"]
  >(user.Permissions);

  const [selectedPermission, setSelectedPermission] =
    React.useState<INewValue>();

  React.useEffect(() => {
    (async () => {
      const response = (await permissionsService.getPermissions()).map(
        (item) => ({
          label: item.title,
          id: item.id,
        })
      );

      const permissoesNaoPossuidas = response.filter(
        (permissionCadastrado) =>
          !userPermissions.some(
            (permissionUsuario) =>
              permissionUsuario.id === permissionCadastrado.id
          )
      );

      setPermissoes(permissoesNaoPossuidas);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      if (selectedPermission) {
        try {
          const permissioNaoPossuida = permissoes.filter(
            (permissionCadastrado) =>
              !userPermissions.some(
                (permissionUsuario) =>
                  permissionUsuario.id === permissionCadastrado.id
              )
          );

          setPermissoes(permissioNaoPossuida);
          const res = await usuariosService.addPermission(
            user.id,
            selectedPermission
          );
          setUserPermissions(res.Permissions);
        } catch (error) {
          console.error(error);
        }
      }
      setSelectedPermission(undefined);
    })();
  }, [selectedPermission]);

  const handleRemovePatio = async (id: number) => {
    try {
      const PermissionNaoPossuida = permissoes.filter(
        (permissionCadastrada) =>
          !userPermissions.some(
            (userPermissions) => userPermissions.id === permissionCadastrada.id
          )
      );

      setPermissoes(PermissionNaoPossuida);
      const res = await usuariosService.removePermission(user.id, {
        id: id,
      });

      setUserPermissions(res.Permissions);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Step2Container>
      <AutoCompleteContainer>
        <BoxInput>
          <Label>Permissões</Label>

          <AutoCompleteComponentMultiple
            options={permissoes && permissoes}
            label="Permissões"
            noOptionsText="Nenhuma Pátio encontrado"
            SetStateAction={setSelectedPermission}
            multiple={false}
            target="patios"
            customProps={{
              value: selectedPermission,
            }}
          />
        </BoxInput>
      </AutoCompleteContainer>
      <PatiosSelecionadosContainer>
        {userPermissions.length ? (
          <>
            <PatiosSelecionadosTitle>
              Permissões do usuário :{" "}
            </PatiosSelecionadosTitle>

            <Ul component={"ul"}>
              {userPermissions &&
                userPermissions.map((permission) => (
                  <Li key={permission.id} component={"li"}>
                    <LiText> {permission.title}</LiText>
                    <IconButton
                      onClick={() => handleRemovePatio(permission.id!)}
                    >
                      <CancelIcon color="secondary" />
                    </IconButton>
                  </Li>
                ))}
            </Ul>
          </>
        ) : (
          <CustomCircularProgress color="secondary" size={"large"} />
        )}
      </PatiosSelecionadosContainer>
    </Step2Container>
  );
};
