  "use client";
  import * as React from "react";
  import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";
  import { usePatios } from "@/src/contexts/patios";
  import { InputComponent } from "@/src/shared/components/Inputs";
  import { BoxInput, Container, Form, Label } from "../../../Patios-novo/styles";
  import { DataPickerComponent } from "@/src/shared/components/Inputs/datePIcker";
  import PatiosServices, { IPatiosServiceDTO } from "@/src/services/patios/patios.service";
  import VisibilityIcon from '@mui/icons-material/Visibility';
  import DeleteIcon from "@mui/icons-material/Delete";
  import {
    DateValidationError,
    PickerChangeHandlerContext,
  } from "@mui/x-date-pickers";
  import dayjs from "dayjs";
  import {
    BoxInputRow,
  } from "../../styles";
  import { UploadInputComponent } from "@/src/shared/components/UploadInput";
  import { CustomCircularProgress } from "../../styles";
  import UploadService from "@/src/services/upload/upload.service";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { ActionButton, CustomDataGrid, CustomGridToolbarColumnsButton, CustomGridToolbarContainer, CustomGridToolbarDensitySelector, CustomGridToolbarExport, CustomGridToolbarFilterButton } from "../../../styles";
import { Filters } from "@/src/shared/components/FIlters";
import { Chips } from "@/src/shared/components/FIlters/chip";
import { DataFilter } from "@/src/shared/components/FIlters/data";
import { GridActionsCellItem, GridCellParams, GridColDef, ptBR } from "@mui/x-data-grid";
import router from "next/router";
import { IconButton } from "@mui/material";
import { set } from "react-hook-form";

  export const patioDocsOptions = [
    {
      label: "Contrato",
      id: 0,
    },
    {
      label: "Seguro",
      id: 1,
    },
    {
      label: "Vistoria",
      id: 2,
    },
    {
      label: "Detização",
      id: 3,
    },
  ];

  export const PatiosStep2 = () => {
    const { patioValues, handleNewValue, handleGuardarDados, tableData, handleDeleteRow,handleDownloadPDF } = usePatios();

    const handleGuardarDadosClick = () => {
      handleGuardarDados(patioValues);
      setPdf("");
    };
    
    const [file, setFile] = React.useState<FileList | null>(null);
    const [loading, setLoading] = React.useState(false);

    const [pdf, setPdf] = React.useState<string>(
      patioValues.pdf_contrato ? patioValues.pdf_contrato : ""
    );

    // Função para ler o conteúdo do arquivo como base64
    const readFileAsBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
    
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
    
        reader.onerror = (error) => {
          reject(error);
        };
    
        reader.readAsDataURL(file);
      });
    };

    const Upload = async (data: FileList) => {
      if (data) {
        try {
          setLoading(true);
          const urlDoArquivo = URL.createObjectURL(data[0]);
    
          const formData = new FormData();
    
          // Adicione o arquivo ao formulário
          formData.append("file", data[0]);
    
          // Converta o conteúdo do arquivo para base64
          const fileContent = await readFileAsBase64(data[0]);
          formData.append("base64File", fileContent);
    
          // Adicione o URL do arquivo ao contexto antes de enviar
          handleNewValue("pdf_contrato", fileContent as string);
    
          setPdf(urlDoArquivo);
          setLoading(false);
        } catch (err) {
          console.error(err);
        }
      }
    };
    
    

    React.useEffect(() => {
      if (file) {
        Upload(file);
      }
    }, [file]);

    const columns: GridColDef[] = [
      { field: "tipo", headerName: "Tipo", width: 150 },
      { field: "observacao", headerName: "Observação", width: 300 },
  
      { field: "startAt", headerName: "Data Inicio", width: 160, },
      { field: "endAt", headerName: "Data Fim", width: 160,  },
  
      {
        field: "pdf_contrato",
        headerName: "Documento",
        width: 130,
        renderCell: (params) => (
          <ButtonComponent
            buttonProps={{
              variant: "contained",
              onClick: () => handleDownloadPDF(params.row.pdf_contrato),
            }}
            
          >
            <VisibilityIcon />
          </ButtonComponent>
        ),
      },

      {
        field: "action",
        headerName: "Deletar",  
        width: 100,
        renderCell: (params: GridCellParams) => (
          <ButtonComponent
          buttonProps={{
            variant: "contained",
            onClick: () => handleDeleteRow(params.row.id),
          }}

          >
            <DeleteIcon />
          </ButtonComponent>
        ),
      },
    ];


    return (
      <>
        <Form>
          <BoxInput>
            <Label>Tipo</Label>
            <AutoCompleteComponent
              options={patioDocsOptions}
              label="Tipo"
              noOptionsText="Nenhum tipo encontrado"
              setStateActionWithTarget={handleNewValue}
              target="patioDocs"
              value={patioValues.patioDocs}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent 
              label="Observação" 
              content="Observação"
              customProps={{
                value: patioValues.observacaoDoc,
                onChange: (e) => {
                  handleNewValue("observacaoDoc", e.target.value)
                },
              }}
            />
          </BoxInput>
          
          <BoxInputRow>
            <DataPickerComponent
              handleChangeTime={(value) => {
                const time = value as Date;
                const date = dayjs(time.toISOString()).toDate();
                handleNewValue("startAt", dayjs(date)); 
              }}
              value={patioValues.startAt ? new Date(patioValues.startAt) : null}
              label="Data de Inicio"
              
            />
          </BoxInputRow>

          <BoxInputRow>
            <DataPickerComponent
              handleChangeTime={(value) => {
                const time = value as Date;
                const date = dayjs(time.toISOString()).toDate();
                handleNewValue("endAt", dayjs(date)); 
              }}
              value={patioValues.endAt ? new Date(patioValues.endAt) : null}
              label="Data Fim"
            />
          </BoxInputRow>
          
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
                Novo Documento
              </UploadInputComponent>
            )}
            
            {pdf && (
              <div className="fileArea">
                <iframe src={pdf} />
              </div>
            )}
          </div>
          
          <ButtonComponent
            buttonProps={{
              variant: "contained",
              onClick: () => handleGuardarDadosClick(),
            }}
            customStyles={{
              color: "white",
              fontWeight: "700",
              fontSize: "15px",
              height: "40px",
              width: "200px",
              borderRadius: "8px",
              marginTop: "30px",
              backgroundColor: "#FF6600",
            }}
          >
            Guardar dados
          </ButtonComponent>
        </Form>

        <Container>
          <CustomDataGrid
            rows={tableData}
            columns={columns}
            getRowId={(row) => row.id}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            rowSelection={false}
            loading={loading}
          />
        </Container>
      </>
    );
  };