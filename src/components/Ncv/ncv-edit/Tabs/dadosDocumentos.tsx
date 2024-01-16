"use client";
import ncvService, { INCVResponse } from "@/src/services/ncv/ncv.service"
import { BoxInput, DocumentoButton, Form,Label } from "../styles";
import { CustomSelect } from "@/src/shared/components/select";
import React from "react";
import UploadService from "@/src/services/upload/upload.service";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { UploadInputComponent } from "@/src/shared/components/UploadInput";
import { InputComponent } from "@/src/shared/components/Inputs";

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
        label: "DOCTOS APREENSAO",
        value: "doctosapreensaodocumento",
    },
    {
        label: "DOCTOS LIBERACAO",
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
    const [file, setFile] = React.useState<FileList | null>(null);
    const [loading, setLoading] = React.useState(false);
    
  const [pdf, setPdf] = React.useState<string>(
    chamado.pdfDocumento ? chamado.pdfDocumento : ""
  );

    const Upload = async (data: FileList) => {
        if (data) {
          try {
            setLoading(true);
            const urlDoArquivo = URL.createObjectURL(data[0]);
           
            const formData = new FormData();

            formData.append("file", data[0]);
            const { url } = await UploadService.upload(formData);
            await ncvService.editNcv(chamado.id,{
                pdfDocumento: url,
            });

            setPdf(urlDoArquivo);
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
                        />
                    </BoxInput>
                    
                <BoxInput>
            <InputComponent
              label="Detalhes"
              content="Detalhes"
             
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
        {pdf && (
          <div className="fileArea">
            <iframe src={pdf} />
          </div>
        )}
      </DocumentoButton>
     

            </>)
    )
  };
 
