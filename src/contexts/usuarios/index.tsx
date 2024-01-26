"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import PatiosService, { IPatio } from "../../services/patios/patios.service";
import { INewValue } from "../../shared/components/AutoComplete";
import { Dayjs } from "dayjs";

import permissionsService from "@/src/services/permissions/permissions.service";
import cargosService from "@/src/services/cargos/cargos.service";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import uploadService from "@/src/services/upload/upload.service";
import usuariosService from "@/src/services/usuarios/usuarios.service";
import { IPermission } from "@/src/components/Cadastros/Usuarios/Usuarios-novo/steps/step3";

export interface IUsuarioValues {
  patios: IPatio[];
  permission: IPermission[];
  name: string;
  email: string;
  cargoSetor: INewValue | null;
  telefone: string;
  dataNascimento: Dayjs | null;
  emailPessoal: string;
  cep: string;
  endereco: string;
  bairro: string;
  cidade: string;
  uf: string;
  cpf: string;
  pdfContrato: FileList | null;
  imageUrl: FileList | null;
}

// Interface para o contexto de registro
interface IUsuariosContext {
  handleNewValue: (
    target: keyof IUsuarioValues,
    value:
      | Dayjs
      | null
      | string
      | number
      | INewValue
      | INewValue[]
      | IPatio
      | IPatio[]
      | FileList
  ) => void;

  UsuarioValues: IUsuarioValues;
  cargos: INewValue[];

  patios: INewValue[];
  permission: INewValue[];
  handleCreateUsuario: () => Promise<void>;
  reset: () => void;
}

const initial = {
  name: "",
  email: "",
  cargoSetor: null,
  telefone: "",
  dataNascimento: new AdapterDayjs().date(new Date()),
  emailPessoal: "",
  cpf: "",
  endereco: "",
  cep: "",
  bairro: "",
  cidade: "",
  uf: "",
  patios: [],
  permission: [],
  pdfContrato: null,
  imageUrl: null,
};

const UsuariosContext = createContext<IUsuariosContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const UsuariosProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [patios, setPatios] = useState<INewValue[]>([]);
  const [permission, setPermissions] = useState<INewValue[]>([]);
  const [cargos, setCargos] = useState<INewValue[]>([]);

  useEffect(() => {
    (async () => {
      const response = (await PatiosService.getPatios()).map((item) => ({
        label: item.nome,
        id: item.id,
      }));

      setPatios(response);
    })();
  }, []);

  const Upload = async (data: FileList) => {
    if (data) {
      try {
        const formData = new FormData();
        formData.append("file", data[0]);
        const { url } = await uploadService.upload(formData);
        return url;
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const response = await permissionsService.getPermissions();

      const permissions = response.map((item) => ({
        label: item.title,
        id: item.id,
      }));
      setPermissions(permissions);
    })();
  }, []);

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

  const [UsuarioValues, setUsuarioValues] = useState<IUsuarioValues>({
    ...initial,
  });

  const handleNewValue = (target: keyof IUsuarioValues, value: any) => {
    setUsuarioValues((data) => ({
      ...data,
      [target]: value,
    }));
  };
  const handleCreateUsuario = async () => {
    const {
      patios,
      permission,
      name,
      email,
      emailPessoal,
      pdfContrato,
      imageUrl,
      cargoSetor,
      cep,
      cidade,
      telefone,
      dataNascimento,
      cpf,
      uf,
      bairro,
      endereco,
    } = UsuarioValues;

    const pdfContratoUrl = await Upload(pdfContrato!);
    const ProfileimageUrl = await Upload(imageUrl!);

    const payload = {
      name,
      email,
      imageUrl: ProfileimageUrl,
      cargosId: cargoSetor!.id,
      permissions: permission.map((item) => item?.id),
      patios: patios.map((item) => item?.id),
      celular: telefone,
      emailPessoal: emailPessoal,
      birthdate: dataNascimento?.toISOString(),
      cpf,
      pdfContrato: pdfContratoUrl,
      Endereco: {
        endereco,
        bairro,
        cidade,
        cep,
        uf,
      },
    };

    const data = await usuariosService.createUser(payload);
    console.log(data);
  };

  const reset = () => {
    setUsuarioValues(initial);
  };

  return (
    <UsuariosContext.Provider
      value={{
        UsuarioValues,
        handleNewValue,
        patios,
        reset,
        permission,
        handleCreateUsuario,
        cargos,
      }}
    >
      {children}
    </UsuariosContext.Provider>
  );
};

export const useUsuario = (): IUsuariosContext => {
  const context = useContext(UsuariosContext);
  if (!context) {
    throw new Error("useUsuario deve ser usado dentro de um RegisterProvider");
  }
  return context;
};
