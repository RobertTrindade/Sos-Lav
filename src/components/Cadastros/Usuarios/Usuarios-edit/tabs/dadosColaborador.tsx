"use client";
import { InputComponent } from "@/src/shared/components/Inputs";

import { IUsuarioValues } from "@/src/contexts/usuarios";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DataPickerComponent } from "@/src/shared/components/Inputs/datePIcker";
import { CpfMask, PhoneMask } from "@/src/utils/Masks";
import { FC, useEffect, useState } from "react";
import viaCepService from "@/src/services/IBGE/viaCep.service";
import { cepMask } from "@/src/utils/cepMask";
import {
  AutoCompleteComponent,
  INewValue,
} from "@/src/shared/components/AutoComplete";
import { Form, BoxInput, Label } from "../../Usuarios-novo/styles";
import cargosService from "@/src/services/cargos/cargos.service";
import usuariosService, {
  IUserDto,
} from "@/src/services/usuarios/usuarios.service";
import { Box } from "@mui/material";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { AlertDialog } from "@/src/shared/components/Dialog";
import { CustomSelect } from "@/src/shared/components/select";

export const DadosUsuario: FC<{
  user: IUserDto;
}> = ({ user }) => {
  const [UsuarioValues, setUsuarioValues] = useState<IUserDto>(user);
  const [cargos, setCargos] = useState<INewValue[]>([]);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

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

  useEffect(() => {
    (async () => {
      try {

        if (UsuarioValues?.Endereco?.cep.length === 9) {
          const data = await viaCepService.getDataByCep(
            UsuarioValues.Endereco.cep
          );
          if ("bairro" in data) {
            if ("bairro" in data) {
              handleNewValue("bairro", data.bairro);
              handleNewValue("endereco", data.logradouro);
              handleNewValue("cidade", data.localidade);
              handleNewValue("uf", data.uf);
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [UsuarioValues?.Endereco?.cep]);

  useEffect(() => {
    (async () => {
      const response = await cargosService.getCargos();

      const data = response.map((item) => ({
        label: item.description,
        id: item.id,
      }));
      setCargos(data);
    })();
  }, []);

  const handleUploadUser = async () => {
    try {
      setOpen(false);

      const {
        name,
        email,
        emailPessoal,
        imageUrl,
        cargosId,
        celular,
        role,
        status,
        pdfContrato,
        Endereco: { endereco, bairro, cidade, cep, uf },
        birthdate,
        cpf,
      } = UsuarioValues;
      const payload = {
        name,
        email,
        imageUrl,
        cargosId,
        status,
        pdfContrato,
        celular,
        emailPessoal,
        birthdate,
        cpf,
        role:role.id,
        Endereco: {
          endereco,
          bairro,
          cidade,
          cep,
          uf,
        },
      };

      const result = await usuariosService.updateUser(
        UsuarioValues.id,
        payload
      );
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
          content={`Deseja alterar os dados do usuário ${UsuarioValues.name}`}
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
          <BoxInput>
            <DataPickerComponent
              handleChangeTime={handleChangeTime}
              value={dayjs(UsuarioValues.birthdate)}
              label="Data de Nascimento"
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="E-mail Pessoal"
              content="E-mail Pessoal"
              customProps={{
                value: UsuarioValues.emailPessoal,
                onChange: (e) => handleNewValue("emailPessoal", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="CPF"
              content="CPF"
              customProps={{
                value: UsuarioValues.cpf,
                onChange: (e) => handleNewValue("cpf", CpfMask(e.target.value)),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Email que será usado para acesso"
              content="E-mail"
              customProps={{
                value: UsuarioValues.email,
                onChange: (e) => handleNewValue("email", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <Label>Cargo</Label>
            <AutoCompleteComponent
              options={cargos && cargos}
              label="Cargos"
              noOptionsText="Nenhum registro encontrado"
              setStateActionWithTarget={handleNewValue}
              value={{
                id: UsuarioValues?.Cargo?.id,
                label: UsuarioValues?.Cargo?.description,
              }}
              target="cargoSetor"
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
            <InputComponent
              label="CEP"
              content="CEP"
              customProps={{
                value: UsuarioValues?.Endereco?.cep,
                onChange: (e) => handleNewValue("cep", cepMask(e.target.value)),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Endereço"
              content="Endereço"
              customProps={{
                value: UsuarioValues?.Endereco?.endereco,
                onChange: (e) => handleNewValue("endereco", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Bairro"
              content="Bairro"
              customProps={{
                value: UsuarioValues?.Endereco?.bairro,
                onChange: (e) => handleNewValue("bairro", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Cidade"
              content="Cidade"
              customProps={{
                value: UsuarioValues?.Endereco?.cidade,
                onChange: (e) => handleNewValue("cidade", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="UF"
              content="UF"
              customProps={{
                value: UsuarioValues?.Endereco?.uf,
                onChange: (e) => handleNewValue("uf", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <Label>Status</Label>
            <CustomSelect
              options={status}
              customProps={{
                value: UsuarioValues.status,
                onChange: (e) =>
                  handleNewValue("status", e.target.value as string),
              }}
            />
          </BoxInput>
          <BoxInput>
            <Label>Tipo de acesso</Label>
            <AutoCompleteComponent
              options={Acessos && Acessos}
              label="Tipo de acesso"
              noOptionsText="Nenhum registro encontrado"
              setStateActionWithTarget={handleNewValue}
              value={UsuarioValues.role!}
              target="role"
            />
          </BoxInput>
        </div>
      </Form>
    </>
  );
};

const status = [
  {
    label: "Ativo",
    value: "ativo",
  },
  {
    label: "Inativo",
    value: "inativo",
  },
  {
    label: "Pendente",
    value: "pendente",
  },
];

const Acessos = [
  {
    label: "T.I",
    id: "TI",
  },
  {
    label: "Diretor",
    id: "director",
  },
  {
    label: "Admin",
    id: "admin",
  },
  {
    label: "Leitura",
    id: "lecturer",
  },
  {
    label: "Gerente",
    id: "manager",
  },
  {
    label: "Externo",
    id: "external",
  },
  {
    label: "RH",
    id: "rh",
  },
  {
    label: "CCO",
    id: "cco",
  },
];
