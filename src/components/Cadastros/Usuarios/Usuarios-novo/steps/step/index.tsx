"use client";
import { InputComponent } from "@/src/shared/components/Inputs";

import { BoxInput, BoxUploadButtonContainer, Form, Label } from "../../styles";
import { useUsuario } from "@/src/contexts/usuarios";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DataPickerComponent } from "@/src/shared/components/Inputs/datePIcker";
import { CpfMask, PhoneMask } from "@/src/utils/Masks";
import { useEffect, useState } from "react";
import viaCepService from "@/src/services/IBGE/viaCep.service";
import { cepMask } from "@/src/utils/cepMask";
import { UploadInputComponent } from "@/src/shared/components/UploadInput";
import { CustomInputText } from "@/src/shared/components/Inputs/styles";
import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";
import { Box } from "@mui/material";

export const UsuariosStep = () => {
  const { UsuarioValues, handleNewValue, cargos } = useUsuario();
  const [file, setFile] = useState<FileList | null>(UsuarioValues.pdfContrato);
  const [fileimageUrl, setFileimageUrl] = useState<FileList | null>(
    UsuarioValues.imageUrl
  );

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
        if (UsuarioValues.cep.length === 9) {
          const data = await viaCepService.getDataByCep(UsuarioValues.cep);
          if ("bairro" in data) {
            handleNewValue("bairro", data.bairro);
            handleNewValue("endereco", data.logradouro);
            handleNewValue("cidade", data.localidade);
            handleNewValue("uf", data.uf);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [UsuarioValues.cep]);

  useEffect(() => {
    handleNewValue("pdfContrato", file);
  }, [file]);

  useEffect(() => {
    handleNewValue("imageUrl", fileimageUrl);
  }, [fileimageUrl]);

  return (
    <>
      <Form>
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
                value: UsuarioValues.telefone,
                onChange: (e) =>
                  handleNewValue("telefone", PhoneMask(e.target.value)),
              }}
            />
          </BoxInput>
          <BoxInput>
            <DataPickerComponent
              handleChangeTime={handleChangeTime}
              value={UsuarioValues.dataNascimento}
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

        <div className="row2">
          <BoxInput>
            <InputComponent
              label="CEP"
              content="CEP"
              customProps={{
                value: UsuarioValues.cep,
                onChange: (e) => handleNewValue("cep", cepMask(e.target.value)),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Endereço"
              content="Endereço"
              customProps={{
                value: UsuarioValues.endereco,
                onChange: (e) => handleNewValue("endereco", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Bairro"
              content="Bairro"
              customProps={{
                value: UsuarioValues.bairro,
                onChange: (e) => handleNewValue("bairro", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Cidade"
              content="Cidade"
              customProps={{
                value: UsuarioValues.cidade,
                onChange: (e) => handleNewValue("cidade", e.target.value),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="UF"
              content="UF"
              customProps={{
                value: UsuarioValues.uf,
                onChange: (e) => handleNewValue("uf", e.target.value),
              }}
            />
          </BoxInput>
          <BoxInput>
            <Label>Profissão</Label>
            <AutoCompleteComponent
              options={cargos && cargos}
              label="Profissão"
              noOptionsText="Nenhum registro encontrado"
              setStateActionWithTarget={handleNewValue}
              value={UsuarioValues.cargoSetor!}
              target="cargoSetor"
            />
          </BoxInput>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "80px",
              marginTop: "20px",
            }}
          >
            <BoxUploadButtonContainer>
              <CustomInputText>Foto de Perfil</CustomInputText>
              <UploadInputComponent
                file={fileimageUrl}
                setFile={setFileimageUrl}
                accept=".jpeg,.png,.jpg"
                labelInitial={
                  UsuarioValues.imageUrl?.length
                    ? UsuarioValues.imageUrl[0].name
                    : " Clique para adicionar"
                }
                buttonProps={{
                  variant: "contained",
                  component: "label",
                }}
                customStyles={{
                  color: "white",
                  fontWeight: "bold",
                  height: "100%",
                }}
              >
                Clique para adicionar
              </UploadInputComponent>
            </BoxUploadButtonContainer>
            <BoxUploadButtonContainer>
              <CustomInputText> Contrato de Trabalho</CustomInputText>
              <UploadInputComponent
                file={file}
                setFile={setFile}
                labelInitial={
                  UsuarioValues.pdfContrato?.length
                    ? UsuarioValues.pdfContrato[0].name
                    : " Clique para adicionar"
                }
                buttonProps={{
                  variant: "contained",
                  component: "label",
                }}
                customStyles={{
                  color: "white",
                  fontWeight: "bold",
                  height: "100%",
                }}
              >
                Clique para adicionar
              </UploadInputComponent>
            </BoxUploadButtonContainer>
          </Box>
        </div>
      </Form>
    </>
  );
};

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
