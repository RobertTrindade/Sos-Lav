"use client";

import { FC, useEffect, useState } from "react";

import { BoxUploadButtonContainer, Form } from "../../Usuarios-novo/styles";
import usuariosService, {
  IUserDto,
} from "@/src/services/usuarios/usuarios.service";
import { Button, Card, CardActions, CardMedia } from "@mui/material";
import { CustomInputText } from "@/src/shared/components/Inputs/styles";
import { UploadInputComponent } from "@/src/shared/components/UploadInput";
import uploadService from "@/src/services/upload/upload.service";

export const ContratoUsuario: FC<{
  user: IUserDto;
}> = ({ user }) => {
  const [file, setFile] = useState<FileList | null>();
  const [userPdf, setUserPdf] = useState<string>(user.pdfContrato);

  const Upload = async (data: FileList) => {
    if (data) {
      try {
        const formData = new FormData();

        // Adicione o arquivo ao formulário
        formData.append("file", data[0]);
        const { url } = await uploadService.uploadPDF(formData);

        const {
          name,
          email,
          emailPessoal,
          imageUrl,
          cargosId,
          celular,
          status,
          Endereco: { endereco, bairro, cidade, cep, uf },
          birthdate,
          cpf,
        } = user;
        const payload = {
          name,
          email,
          imageUrl,
          cargosId,
          status,
          pdfContrato: url,
          celular,
          emailPessoal,
          birthdate,
          cpf,
          Endereco: {
            endereco,
            bairro,
            cidade,
            cep,
            uf,
          },
        };
        const result = await usuariosService.updateUser(user.id, payload);
        setUserPdf(result.pdfContrato);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (file) {
      Upload(file!);
    }
  }, [file]);

  return (
    <>
      <BoxUploadButtonContainer>
        <CustomInputText> Contrato de Trabalho</CustomInputText>
        <UploadInputComponent
          file={file!}
          setFile={setFile!}
          labelInitial={userPdf ? userPdf : " Clique para adicionar"}
          buttonProps={{
            variant: "contained",
            component: "label",
          }}
          customStyles={{
            color: "white",
            fontWeight: "bold",
            height: "100%",
            width: "500px",
          }}
        >
          Clique para adicionar
        </UploadInputComponent>
      </BoxUploadButtonContainer>
      <Form>
        <MediaCard
          data={{
            file: userPdf,
          }}
        />
      </Form>
    </>
  );
};

const MediaCard: FC<{
  data: {
    file: string;
  };
}> = ({ data }) => {
  const file = data.file ;
  return (
    <>
      <Card
        sx={{
          backgroundColor: "rgb(18, 18, 18)",
        }}
        elevation={4}
      >
        <CardMedia
          component="iframe"
          src={file}
          className="iframe"
          sx={{
            width: "600px",
            height: "600px",
          }}
        />

        <CardActions>
          <Button size="small">Apagar</Button>
          <Button size="small" onClick={() => window.open(file)}>
            Visualizar
          </Button>
          <Button size="small">Baixar</Button>
        </CardActions>
      </Card>
    </>
  );
};
