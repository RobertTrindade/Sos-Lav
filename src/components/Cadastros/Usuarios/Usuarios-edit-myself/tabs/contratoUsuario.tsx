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

export const FotoPerfil: FC<{
  user: IUserDto;
}> = ({ user }) => {
  const [file, setFile] = useState<FileList | null>();
  const [userPdf, setUserPdf] = useState<string>(user.imageUrl);

  const Upload = async (data: FileList) => {
    if (data) {
      try {
        const formData = new FormData();

        // Adicione o arquivo ao formulário
        formData.append("file", data[0]);
        const { url } = await uploadService.upload(formData);

        const { name, celular, birthdate, password } = user;
        const payload = {
          name,
          imageUrl: url,
          celular,
          birthdate,
          password,
        };
        const result = await usuariosService.updateMyself(user.id, payload);
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
          accept=".png,.jpg,.JPEG"
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
  const file =data.file ;
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
            width: "400px",
            height: "400px",
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
