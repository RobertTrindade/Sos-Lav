"use client";
import { InputComponent } from "@/src/shared/components/Inputs";

import { IUsuarioValues } from "@/src/contexts/usuarios";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DataPickerComponent } from "@/src/shared/components/Inputs/datePIcker";
import { PhoneMask } from "@/src/utils/Masks";
import { FC, useState } from "react";
import { Form, BoxInput } from "../../Usuarios-novo/styles";
import usuariosService, {
  IUserDto,
} from "@/src/services/usuarios/usuarios.service";
import { Box, IconButton } from "@mui/material";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { AlertDialog } from "@/src/shared/components/Dialog";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const DadosUsuario: FC<{
  user: IUserDto;
}> = ({ user }) => {
  const [UsuarioValues, setUsuarioValues] = useState<IUserDto>(user);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleNewValue = (target: keyof IUsuarioValues, value: any) => {
    setUsuarioValues((data) => ({
      ...data,
      [target]: value,
    }));
  };
  const handleChangeTime = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const time = value as Date;
    const date = dayjs(time);
    handleNewValue("dataNascimento", date);
  };

  const handleUploadUser = async () => {
    try {
      setOpen(false);

      const { name, imageUrl, celular, birthdate, password } = UsuarioValues;
      const payload = {
        name,
        imageUrl,
        celular,
        birthdate,
        password,
      };

      await usuariosService.updateMyself(UsuarioValues.id, payload);
      setOpenAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form>
        <AlertDialog
          title={`Alteração de usuário`}
          content={`Alteração concluida com sucesso`}
          open={openAlert}
          setOpen={setOpenAlert}
        >
          <ButtonComponent
            buttonProps={{
              variant: "contained",
              onClick: () => setOpenAlert(false),
            }}
            customStyles={{
              color: "white",
              fontWeight: "700",
              fontSize: "15px",
              height: "50px",
              borderRadius: "14px",
              width: "200px",
            }}
          >
            Fechar
          </ButtonComponent>
        </AlertDialog>
        <AlertDialog
          title={`Alteração de usuário`}
          content={`Deseja alterar seus dados ?`}
          open={open}
          setOpen={setOpen}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <ButtonComponent
              buttonProps={{
                variant: "contained",
                onClick: () => handleUploadUser(),
              }}
              customStyles={{
                color: "white",
                fontWeight: "700",
                fontSize: "15px",
                height: "50px",
                borderRadius: "14px",
                width: "200px",
              }}
            >
              Continuar
            </ButtonComponent>

            <ButtonComponent
              buttonProps={{
                variant: "contained",
                onClick: () => setOpen(false),
              }}
              customStyles={{
                color: "white",
                fontWeight: "700",
                fontSize: "15px",
                height: "50px",
                borderRadius: "14px",
                width: "200px",
              }}
            >
              Fechar
            </ButtonComponent>
          </Box>
        </AlertDialog>

        <div className="row1">
          <BoxInput>
            <InputComponent
              label="Nome Completo"
              content="Nome"
              customProps={{
                value: UsuarioValues.name,
                onChange: (e) => handleNewValue("name", e.target.value),
              }}
            />
          </BoxInput>
          <BoxInput>
            <InputComponent
              label="Telefone"
              content="Telefone"
              customProps={{
                value: UsuarioValues.celular,
                onChange: (e) =>
                  handleNewValue("telefone", PhoneMask(e.target.value)),
              }}
            />
          </BoxInput>

          <Box sx={{ marginTop: "20px", width: "100%" }}>
            <ButtonComponent
              buttonProps={{
                variant: "contained",
                onClick: () => setOpen(true),
              }}
              customStyles={{
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                height: "50px",
                width: "500px",
              }}
            >
              Salvar
            </ButtonComponent>
          </Box>
        </div>

        <div className="row2">
          <BoxInput>
            <DataPickerComponent
              handleChangeTime={handleChangeTime}
              value={dayjs(UsuarioValues.birthdate)}
              label="Data de Nascimento"
            />
          </BoxInput>
          <BoxInput>
            <InputComponent
              label="Senha"
              type={showPassword ? "text" : "password"}
              content="Senha"
              customProps={{
                startAdornment: (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                    onClick={() => handleClickShowPassword()}
                  >
                    <LockIcon color="secondary" />
                  </Box>
                ),
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => handleClickShowPassword()}
                  >
                    {showPassword ? (
                      <RemoveRedEyeIcon color="secondary" />
                    ) : (
                      <VisibilityOffIcon color="secondary" />
                    )}
                  </IconButton>
                ),
                value: UsuarioValues.password,
                onChange: (e) => handleNewValue("password", e.target.value),
              }}
              customStyles={{
                color: "color: ${({ theme }) => theme.palette.secondary.main}",
              }}
            />
          </BoxInput>
        </div>
      </Form>
    </>
  );
};
