"use client";

import * as React from "react";
import { Container, Content, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";
import { InputComponent } from "@/src/shared/components/Inputs";

import Link from "next/link";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import { BoxInput, Form, Label } from "../Patios-novo/styles";
import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";
import { IPatio } from "@/src/services/patios/patios.service";
import dayjs from "dayjs";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { cepMask } from "@/src/utils/cepMask";
import { CustomIconButton } from "@/src/components/Navbar/styles";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { BackIcon } from "@/src/components/Cadastros/Motoristas/Motoristas-details";
import { PhoneMask } from "@/src/utils/Masks";

import axios from "axios";
import { AlertDialog } from "@/src/shared/components/Dialog";
import { Box } from "@mui/material";

export const PatiosComponentEdit: React.FC<{
  patio: IPatio;
}> = ({ patio }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = ["Dados", "Documentos", "Endereço"];

  return (
    <Container>
      <Content>
        <TabResultArea>
          <BreadCrumbsComponent />
          <div className="actionArea">
            <Link href={"/cadastros/patios"}>
              <CustomIconButton>
                <BackIcon />
              </CustomIconButton>
            </Link>
            <Title>Editar patio </Title>
          </div>
          <ScrollableTabsButtonAuto
            onChange={handleChange}
            value={value}
            tabLabels={tabLabels}
          />
          {patio ? (
            <>
              {value === 0 && <PatioDetails patio={patio} />}
              {/* {value === 1 && <PatioDocumento patio={patio} />} */}
              {value === 2 && <PatioEndereco patio={patio} />}
            </>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
      </Content>
    </Container>
  );
};

const PatioDetails: React.FC<{
  patio: IPatio;
}> = ({ patio: { nome, responsavel, email, telefone, observacao, id } }) => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [payload, setPayload] = React.useState({
    nome,
    responsavel,
    email,
    telefone,
    observacao,
  });
  const [disabled, setDisabled] = React.useState(false);

  const handleSave = async () => {
    try {
      setOpen(false);
      // await PatiosService.editPatio(id, {
      //   ...payload,
      // });
      console.log(payload);
      setOpenAlert(true);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const handleChange = (target: keyof IPatio, value: any) => {
    setPayload((prev) => ({
      ...prev,
      [target]: value,
    }));
  };
  React.useEffect(() => {
    const { nome, responsavel, email, telefone, observacao } = payload;
    setDisabled(!nome || !responsavel || !email || !telefone || !observacao);
  }, [payload]);

  return (
    <Form>
      <AlertDialog
        title={`Alteração de patio`}
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
        title={`Alteração de patio`}
        content={`Deseja alterar os dados do patio ${payload.nome}`}
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
              onClick: () => handleSave(),
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
      <BoxInput>
        <InputComponent
          label="Nome Patio"
          content="Nome Patio"
          customProps={{
            value: payload.nome,
            onChange: (e) => {
              handleChange("nome", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Responsável"
          content="Responsável"
          customProps={{
            value: payload.responsavel,
            onChange: (e) => {
              handleChange("responsavel", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Telefone"
          content="Telefone"
          customProps={{
            value: payload.telefone,
            onChange: (e) => {
              handleChange("telefone", PhoneMask(e.target.value));
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="E-mail"
          content="E-mail"
          customProps={{
            value: payload.email,
            onChange: (e) => {
              handleChange("email", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Observação"
          content="Observaçâo"
          customProps={{
            value: payload.observacao,
            onChange: (e) => {
              handleChange("observacao", e.target.value);
            },
          }}
        />
      </BoxInput>

      <ButtonComponent
        buttonProps={{
          variant: "contained",
          onClick: () => setOpen(true),
          disabled: disabled,
        }}
        customStyles={{
          color: "white",
          fontWeight: "600",
          fontSize: "18px",
          height: "40px",
          width: "200px",
          marginTop: "45px",
        }}
      >
        Salvar
      </ButtonComponent>
    </Form>
  );
};

// const PatioDocumento: React.FC<{
//   patio: IPatio;
// }> = ({
//   patio: { documentos, id },
// }) => {

//   const patioDocsOptions = [
//     {
//       label: "Contrato",
//       id: 0,
//     },
//     {
//       label: "Seguro",
//       id: 1,
//     },
//     {
//       label: "Vistoria",
//       id: 2,
//     },
//     {
//       label: "Detização",
//       id: 3,
//     },
//   ];

//   const [payload, setPayload] = React.useState({
//     documentos,
//   });

//   const handleSave = async () => {
//     try {
//       setOpen(false);
//       // await PatiosService.editPatio(id, {
//       //   ...payload,
//       // });
//       const enviarDados = {

//       }
//       console.log(enviarDados);
//       setOpenAlert(true);
//     } catch (error) {
//       alert(JSON.stringify(error));
//     }
//   };

//   const handleChange = (target: keyof IPatio, value: any) => {
//     setPayload((prev) => ({
//       ...prev,
//       [target]: value,
//     }));
//   };

//   const initialTableValues = {
//     patioDocs: "",
//     observacaoDoc: "",
//     startAt: "",
//     endAt: "",
//     pdf_contrato: "",
//   };

//   const [open, setOpen] = React.useState(false);
//   const [openAlert, setOpenAlert] = React.useState(false);
//   const [file, setFile] = React.useState<FileList | null>(null);
//   const [loading, setLoading] = React.useState(false);

//   const [pdf, setPdf] = React.useState<string>(
//     payload.documentos.pdf_contrato ? payload.documentos.pdf_contrato : ""
//   );

//   const columns: GridColDef[] = [
//     { field: "tipo", headerName: "Tipo", width: 150 },
//     { field: "observacao", headerName: "Observação", width: 300 },

//     { field: "startAt", headerName: "Data Inicio", width: 160, },
//     { field: "endAt", headerName: "Data Fim", width: 160,  },

//     {
//       field: "pdf_contrato",
//       headerName: "Documento",
//       width: 130,
//       renderCell: (params) => (
//         <ButtonComponent
//           buttonProps={{
//             variant: "contained",
//             // onClick: () => handleDownloadPDF(params.row.pdf_contrato),
//           }}

//         >
//           <VisibilityIcon />
//         </ButtonComponent>
//       ),
//     },

//     {
//       field: "action",
//       headerName: "Deletar",
//       width: 100,
//       renderCell: (params: GridCellParams) => (
//         <ButtonComponent
//         buttonProps={{
//           variant: "contained",
//           // onClick: () => handleDeleteRow(params.row.id),
//         }}

//         >
//           <DeleteIcon />
//         </ButtonComponent>
//       ),
//     },
//   ];

//   // Converter documentos em array de objetos
//   const documentoArray = Object.keys(payload.documentos).map((key) => ({
//     tipo: key,
//     value: payload.documentos[key as keyof IPatio]
//   }));

//   return (
//     <>
//       <Form>
//         <AlertDialog
//           title={`Alteração de patio`}
//           content={`Alteração concluida com sucesso`}
//           open={openAlert}
//           setOpen={setOpenAlert}
//         >
//           <ButtonComponent
//             buttonProps={{
//               variant: "contained",
//               onClick: () => setOpenAlert(false),
//             }}
//             customStyles={{
//               color: "white",
//               fontWeight: "700",
//               fontSize: "15px",
//               height: "50px",
//               borderRadius: "14px",
//               width: "200px",
//             }}
//           >
//             Fechar
//           </ButtonComponent>
//         </AlertDialog>
//         <AlertDialog
//           title={`Alteração de patio`}
//           content={`Deseja alterar os dados do patio`}
//           open={open}
//           setOpen={setOpen}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               width: "100%",
//               justifyContent: "space-between",
//             }}
//           >
//             <ButtonComponent
//               buttonProps={{
//                 variant: "contained",
//                 onClick: () => handleSave(),
//               }}
//               customStyles={{
//                 color: "white",
//                 fontWeight: "700",
//                 fontSize: "15px",
//                 height: "50px",
//                 borderRadius: "14px",
//                 width: "200px",
//               }}
//             >
//               Continuar
//             </ButtonComponent>

//             <ButtonComponent
//               buttonProps={{
//                 variant: "contained",
//                 onClick: () => setOpen(false),
//               }}
//               customStyles={{
//                 color: "white",
//                 fontWeight: "700",
//                 fontSize: "15px",
//                 height: "50px",
//                 borderRadius: "14px",
//                 width: "200px",
//               }}
//             >
//               Fechar
//             </ButtonComponent>
//           </Box>
//         </AlertDialog>
//         <BoxInput>
//           <Label>Tipo</Label>
//           <AutoCompleteComponent
//             options={patioDocsOptions}
//             label="Tipo"
//             noOptionsText="Nenhum tipo encontrado"
//             setStateActionWithTarget={handleChange}
//             target="patioDocs"
//             value={payload.documentos.patioDocs} />
//         </BoxInput>

//         <BoxInput>
//           <InputComponent
//             label="Observação"
//             content="Observação"
//             customProps={{
//               value: payload.documentos.observacaoDoc,
//               onChange: (e) => {
//                 handleChange("observacaoDoc", e.target.value);
//               },
//             }} />
//         </BoxInput>

//         <BoxInputRow>
//           <DataPickerComponent
//             handleChangeTime={(value) => {
//               const time = value as Date;
//               const date = dayjs(time.toISOString()).toDate();
//               handleChange("startAt", date.toString());
//             } }
//             value={payload.documentos.startAt ? new Date(payload.documentos.startAt) : null}
//             label="Data de Inicio" />
//         </BoxInputRow>

//         <BoxInputRow>
//           <DataPickerComponent
//             handleChangeTime={(value) => {
//               const time = value as Date;
//               const date = dayjs(time.toISOString()).toDate();
//               handleChange("endAt", date.toString());
//             } }
//             value={payload.documentos.endAt ? new Date(payload.documentos.endAt) : null}
//             label="Data Fim" />
//         </BoxInputRow>

//         <div className="InputContainer">
//           {loading ? (
//             <CustomCircularProgress />
//           ) : (
//             <UploadInputComponent
//               file={file}
//               setFile={setFile}
//               buttonProps={{
//                 variant: "contained",
//                 component: "label",
//               }}
//               customStyles={{
//                 color: "white",
//                 fontWeight: "bold",
//               }}
//             >
//               Novo Documento
//             </UploadInputComponent>
//           )}

//           {pdf && (
//             <div className="fileArea">
//               <iframe src={pdf} />
//             </div>
//           )}
//         </div>

//         <ButtonComponent
//           buttonProps={{
//             variant: "contained",
//             // onClick: () => handleGuardarDadosClick(),
//           }}
//           customStyles={{
//             color: "white",
//             fontWeight: "700",
//             fontSize: "15px",
//             height: "40px",
//             width: "200px",
//             borderRadius: "8px",
//             marginTop: "30px",
//             backgroundColor: "#FF6600",
//           }}
//         >
//           Guardar dados
//         </ButtonComponent>
//       </Form>
//       <Container>
//         <CustomDataGrid
//           rows={documentoArray}
//           columns={columns}
//           getRowId={(row) => row.id}
//           localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
//           rowSelection={false}
//           loading={loading} />
//       </Container>

//       <ButtonComponent
//         buttonProps={{
//           variant: "contained",
//           onClick: () => setOpen(true),
//         }}
//         customStyles={{
//           color: "white",
//           fontWeight: "600",
//           fontSize: "18px",
//           height: "40px",
//           width: "200px",
//           marginTop: "45px",
//         }}
//       >
//         Salvar
//       </ButtonComponent>
//     </>
//   );
// };

const PatioEndereco: React.FC<{
  patio: IPatio;
}> = ({
  patio: {
    bairro,
    cep,
    cidade,
    estado,
    longitude,
    latitude,
    endereco,
    createdAt,
    ativo,
    id,
  },
}) => {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [payload, setPayload] = React.useState({
    bairro,
    cep,
    cidade,
    estado,
    longitude,
    latitude,
    endereco,
    createdAt,
    ativo: ativo ? "Sim" : "Não",
  });
  const [disabled, setDisabled] = React.useState(false);

  const handleSave = async () => {
    try {
      setOpen(false);
      // await PatiosService.editPatio(id, {
      //   ...payload,
      // });
      const enviarDados = {
        ...payload,
        ativo: payload.ativo === "Sim",
      };
      console.log(enviarDados);
      setOpenAlert(true);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const handleChange = (target: keyof IPatio, value: any) => {
    // Se o campo for 'ativo', convertemos o valor de 'Sim' ou 'Não' para true ou false
    const newValue = target === "ativo" ? value === "Sim" : value;
    setPayload((prev) => ({
      ...prev,
      [target]: newValue,
    }));
  };
  React.useEffect(() => {
    const {
      bairro,
      cep,
      cidade,
      estado,
      longitude,
      latitude,
      endereco,
      createdAt,
      ativo,
    } = payload;
    setDisabled(
      !bairro ||
        !cep ||
        !cidade ||
        !estado ||
        !longitude ||
        !latitude ||
        !endereco ||
        !createdAt ||
        !ativo
    );
  }, [payload]);

  const ativoOptions = [
    {
      label: "Sim",
      id: true,
    },
    {
      label: "Não",
      id: false,
    },
  ];

  const getViaCepData = async (cep: any) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados do ViaCep:", error);
      return null;
    }
  };

  const handleCepChange = async (cep: any) => {
    // Chame a função do ViaCep para obter os detalhes do endereço
    const viaCepData = await getViaCepData(cep);

    // Atualize o estado com os dados obtidos
    if (viaCepData) {
      handleChange("bairro", viaCepData.bairro || "");
      handleChange("cidade", viaCepData.localidade || "");
      handleChange("estado", viaCepData.uf || "");
      handleChange("endereco", viaCepData.logradouro || "");
    }
  };

  return (
    <Container>
      <Form>
        <AlertDialog
          title={`Alteração de patio`}
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
          title={`Alteração de patio`}
          content={`Deseja alterar os dados do patio?`}
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
                onClick: () => handleSave(),
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
        <BoxInput>
          <InputComponent
            label="Bairro"
            content="Bairro"
            customProps={{
              value: payload.bairro,
              onChange: (e) => {
                handleChange("bairro", e.target.value);
              },
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="CEP"
            content="CEP"
            customProps={{
              value: payload.cep,
              onChange: (e) => {
                const newCep = cepMask(e.target.value);
                handleChange("cep", newCep);
                // Chame a função para buscar os dados do ViaCep quando o CEP é alterado
                handleCepChange(newCep);
              },
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="Cidade"
            content="Cidade"
            customProps={{
              value: payload.cidade,
              onChange: (e) => {
                handleChange("cidade", e.target.value);
              },
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="Estado"
            content="Estado"
            customProps={{
              value: payload.estado,
              onChange: (e) => {
                handleChange("estado", e.target.value);
              },
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            content="Data de Cadastro"
            type="email"
            customProps={{
              value: dayjs(createdAt).format("DD/MM/YYYY"),
              readOnly: true,
            }}
            customStyles={{
              color: "white",
            }}
          />
        </BoxInput>

        <BoxInput>
          <Label>Ativo</Label>
          <AutoCompleteComponent
            options={ativoOptions}
            label="Ativo"
            noOptionsText="Nenhum tipo encontrado"
            setStateActionWithTarget={handleChange}
            target="ativo"
            value={payload.ativo}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="Longitude"
            content="Longitude"
            customProps={{
              value: payload.longitude,
              onChange: (e) => {
                handleChange("longitude", e.target.value);
              },
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="Latitude"
            content="Latitude"
            customProps={{
              value: payload.latitude,
              onChange: (e) => {
                handleChange("latitude", e.target.value);
              },
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="Endereço"
            content="Endereço"
            customProps={{
              value: payload.endereco,
              onChange: (e) => {
                handleChange("endereco", e.target.value);
              },
            }}
          />
        </BoxInput>
        <ButtonComponent
          buttonProps={{
            variant: "contained",
            onClick: () => setOpen(true),
            disabled: disabled,
          }}
          customStyles={{
            color: "white",
            fontWeight: "600",
            fontSize: "18px",
            height: "40px",
            width: "200px",
            marginTop: "45px",
          }}
        >
          Salvar
        </ButtonComponent>
      </Form>
    </Container>
  );
};
