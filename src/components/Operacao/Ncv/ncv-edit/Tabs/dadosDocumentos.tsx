"use client";
import ncvService, { INCVResponse } from "@/src/services/ncv/ncv.service";
import {
  BoxInput,
  DocContainer,
  DocumentoButton,
  Form,
  Label,
} from "../styles";
import { CustomSelect } from "@/src/shared/components/select";
import React, { FC } from "react";
import UploadService from "@/src/services/upload/upload.service";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { UploadInputComponent } from "@/src/shared/components/UploadInput";
import { InputComponent } from "@/src/shared/components/Inputs";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const tipoDocumento = [
  {
    label: "ALVARA",
    value: "alvaradocumento",
  },
  {
    label: "C.R",
    value: "crdocumento",
  },
  {
    label: "CHECKLIST",
    value: "checklistdocumento",
  },
  {
    label: "DOCTOS APREENSÃO",
    value: "doctosapreensaodocumento",
  },
  {
    label: "DOCTOS LIBERAÇÃO",
    value: "doctosliberacaodocumento",
  },
  {
    label: "GERAL",
    value: "geraldocumento",
  },
  {
    label: "NOTA DE VENDA",
    value: "notavendadocumento",
  },
  {
    label: "NOTA FISCAL ESTADIA",
    value: "notafiscalestadiadocumento",
  },
  {
    label: "NOTA FISCAL GUINCHO",
    value: "notafiscalguinchodocumento",
  },
  {
    label: "JUDICIAL",
    value: "judicialdocumento",
  },
];

export const Documentos: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  // state de file, onde salva o file
  const [file, setFile] = React.useState<FileList | null>(null);

  // state de loading.
  const [loading, setLoading] = React.useState(false);

  // Carrega do valor vindo da api
  const [pdf, setPdf] = React.useState<INCVResponse["Documentos"]>(
    chamado.Documentos
  );

  // State de tipo
  const [tipo, setTipo] = React.useState<string>("");

  // State detalhes
  const [detalhes, setDetalhes] = React.useState<string>("");

  const Upload = async (data: FileList) => {
    if (data) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", data[0]);

        // Upoload do arquivo para o back end
        const { url } = await UploadService.uploadPDF(formData);

        // Criamos a referencia para o arquivo que foi salvo para o ncv atual
        const res = await ncvService.uploadDocsNcv(chamado.id, {
          tipo,
          detalhes,
          file: url,
        });

        if (pdf.length === 0) {
          setPdf([res]);
        } else {
          // Pegando o array que ja existe, .. e concatetando
          setPdf((currentFiles) => [...currentFiles, res]);
        }

        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  React.useEffect(() => {
    if (file) {
      Upload(file);
    }
  }, [file]);

  return (
    chamado && (
      <>
        <Form>
          <BoxInput>
            <Label>Tipo de Documento </Label>
            <CustomSelect
              options={tipoDocumento}
              customProps={{
                value: tipo,
                onChange: (e) => setTipo(e.target.value as string),
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Detalhes"
              content="Detalhes"
              customProps={{
                value: detalhes,
                onChange: (e) => setDetalhes(e.target.value as string),
              }}
            />
          </BoxInput>
        </Form>
        <DocumentoButton>
          <div className="InputContainer">
            {loading ? (
              <CustomCircularProgress />
            ) : (
              <UploadInputComponent
                file={file}
                setFile={setFile}
                buttonProps={{
                  variant: "contained",
                  component: "label",
                  //Aqui bloquamos o botão caso não haja valores
                  disabled:!tipo || !detalhes
                }}
                customStyles={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Novo Contrato
              </UploadInputComponent>
            )}
          </div>
        </DocumentoButton>

        <DocContainer>
          {pdf && pdf.map((item) => <MediaCard data={item} key={item.id} />)}
        </DocContainer>
      </>
    )
  );
};

const MediaCard: FC<{
  data: {
    file: string;
    tipo: string;
    detalhes: string;
  };
}> = ({ data }) => {
  const file = data.file ;
  return (
    <Card
      sx={{
        backgroundColor: "rgb(18, 18, 18)",
      }}
      elevation={4}
    >
      <CardMedia component="iframe" src={file} className="iframe" />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={"bold"}
        >
          {tipoDocumento.find((item) => item.value === data.tipo)?.label}
        </Typography>
        <Typography
         
        >
       {data.detalhes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apagar</Button>
        <Button size="small" onClick={() => window.open(file)}>
          Visualizar
        </Button>
        <Button size="small">Baixar</Button>
      </CardActions>
    </Card>
  );
};
