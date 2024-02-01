"use client";

import * as React from "react";
import { Container, Content, MapArea, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";
import { InputComponent } from "@/src/shared/components/Inputs";

import chamadosService, {
  IChamado,
  IChamadosResponse,
} from "@/src/services/chamados/chamados.service";
import { ChamadoEditarMap } from "./map";
import Link from "next/link";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import { BoxInput, Form, Label } from "../Chamados-novo/styles";
import {
  AutoCompleteComponent,
  INewValue,
} from "@/src/shared/components/AutoComplete";
import {
  equipamentoSolicitadoOptions,
  tipoVeiculoOptions,
  tipoapreensaoOptions,
  urgencia,
  origens,
} from "../Chamados-novo/steps/step1";
import patiosService from "@/src/services/patios/patios.service";
import dayjs from "dayjs";
import { FC, useEffect, useState } from "react";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { cepMask } from "@/src/utils/cepMask";
import { IAvarias } from "@/src/services/ncv/ncv.service";
import { SwipeableTextMobileStepper } from "@/src/shared/components/Carousel";
import { CardContainer } from "../../Ncv/ncv-edit/styles";
import { CustomIconButton } from "@/src/components/Navbar/styles";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { BackIcon } from "@/src/components/Cadastros/Motoristas/Motoristas-details";
import { AlertDialog } from "@/src/shared/components/Dialog";
import ChamadosService from "@/src/services/chamados/chamados.service";
import { EncaminharMotorista } from "./tabs/encaminnharMotorista";
const chamadosStatus = [
  {
    label: "Aguardando",
    id: 1,
  },
  {
    label: "Concluido",
    id: 2,
  },
  {
    label: "Em Checklist",
    id: 2,
  },
  {
    label: "Aceito",
    id: 2,
  },
];

export const ChamadosComponentEdit: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = [
    "Chamado",
    "Endereço",
    "NCVs",
    "Motorista",
    "Encaminhamento",
    "Fotos",
  ];

  return (
    <Container>
      <Content>
        <TabResultArea>
          <BreadCrumbsComponent />
          <div className="actionArea">
            <Link href={"/operacao/chamados"}>
              <CustomIconButton>
                <BackIcon />
              </CustomIconButton>
            </Link>
            <Title>Editar chamado </Title>
          </div>
          <ScrollableTabsButtonAuto
            onChange={handleChange}
            value={value}
            tabLabels={tabLabels}
          />
          {chamado ? (
            <>
              {value === 0 && <ChamadoDetails chamado={chamado} />}
              {value === 1 && <ChamadoEndereco chamado={chamado} />}
              {value === 2 && <ChamadoNcvs chamado={chamado} />}
              {value === 3 && <ChamadoMoto chamado={chamado} />}
              {value === 4 && <EncaminharMotorista chamado={chamado} />}
              {value === 5 && <ChamadosFotos chamado={chamado} />}
            </>
          ) : (
            <CustomCircularProgress />
          )}
        </TabResultArea>
        <MapArea>
          <ChamadoEditarMap chamadoLocation={chamado} />
        </MapArea>
      </Content>
    </Container>
  );
};

const ChamadoDetails: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  const [chamadoState, setChamado] = React.useState(chamado);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleNewValue = (target: keyof IChamadosResponse, value: any) => {
    setChamado((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };
  const [patios, setPatios] = React.useState<INewValue[]>([]);

  const [chamadosValues] = React.useState({
    patio: chamado?.patio?.nome,
  });
  React.useEffect(() => {
    (async () => {
      const response = (await patiosService.getPatios()).map((item) => ({
        label: item.nome,
        id: item.id,
      }));

      setPatios(response);
    })();
  }, []);
  const [initialStatus] = useState(chamado.status);
  const handleUploadChamado = async () => {
    try {
      setOpen(false);

      let {
        equipamentoSolicitado,
        tipoVeiculo,
        tipoApreensao,
        urgencia,
        origem,
        status,
        patioId,
      } = chamadoState;

      if ("label" in (equipamentoSolicitado as INewValue)) {
        equipamentoSolicitado = (equipamentoSolicitado as INewValue).label;
      }
      if ("label" in (tipoVeiculo as INewValue)) {
        tipoVeiculo = (tipoVeiculo as INewValue).label;
      }
      if ("label" in (tipoApreensao as INewValue)) {
        tipoApreensao = (tipoApreensao as INewValue).label;
      }
      if ("label" in (urgencia as INewValue)) {
        urgencia = (urgencia as INewValue).label;
      }
      if ("label" in (origem as INewValue)) {
        origem = (origem as INewValue).label;
      }
      if ("label" in (status as INewValue)) {
        status = (status as INewValue).label;
      }

      const payload = {
        equipamentoSolicitado,
        tipoVeiculo,
        tipoApreensao,
        urgencia,
        origem,
        status,
        patioId,
      };
      const result = await ChamadosService.editChamado(
        chamadoState.id,
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
          content={`Deseja alterar os dados modificado do chamad ${chamado.id}`}
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
                onClick: () => handleUploadChamado(),
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
          <Label>Equipamento solicitado</Label>
          <AutoCompleteComponent
            options={
              equipamentoSolicitadoOptions && equipamentoSolicitadoOptions
            }
            label="Equipamento solicitado"
            noOptionsText="Nenhum equipamento encontrado"
            setStateActionWithTarget={handleNewValue}
            target="equipamentoSolicitado"
            value={chamadoState.equipamentoSolicitado}
          />
        </BoxInput>

        <BoxInput>
          <Label>Tipo de Veículo</Label>
          <AutoCompleteComponent
            options={tipoVeiculoOptions && tipoVeiculoOptions}
            label="Tipo de Veículo"
            noOptionsText="Nenhum equipamento encontrado"
            setStateActionWithTarget={handleNewValue}
            value={chamadoState.tipoVeiculo}
            target="tipoVeiculo"
          />
        </BoxInput>

        <BoxInput>
          <Label>Tipo de Apreensão</Label>
          <AutoCompleteComponent
            options={tipoapreensaoOptions && tipoapreensaoOptions}
            label="Tipo de Veículo"
            noOptionsText="Nenhum equipamento encontrado"
            setStateActionWithTarget={handleNewValue}
            value={chamadoState.tipoApreensao}
            target="tipoApreensao"
          />
        </BoxInput>

        <BoxInput>
          <Label>Urgência</Label>
          <AutoCompleteComponent
            options={urgencia && urgencia}
            label="Tipo de Apreensão"
            noOptionsText="Nenhum equipamento encontrado"
            setStateActionWithTarget={handleNewValue}
            value={chamadoState.urgencia}
            target="urgencia"
          />
        </BoxInput>

        <BoxInput>
          <Label>Origem</Label>
          <AutoCompleteComponent
            options={origens && origens}
            label="Tipo de Apreensão"
            noOptionsText="Nenhuma origem encontrada"
            setStateActionWithTarget={handleNewValue}
            value={chamadoState.origem}
            target="origem"
          />
        </BoxInput>

        <BoxInput>
          <Label>Status</Label>
          <AutoCompleteComponent
            options={chamadosStatus && chamadosStatus}
            label="Chamados Status"
            noOptionsText="Nenhuma status encontrado"
            setStateActionWithTarget={handleNewValue}
            value={chamadoState.status}
            target="status"
          />
        </BoxInput>

        <BoxInput>
          <Label>Pátio</Label>
          <AutoCompleteComponent
            options={patios && patios}
            label="Pátio"
            value={chamadosValues.patio}
            target="patio"
            noOptionsText="Nenhum Pátio encontrado"
            setStateActionWithTarget={handleNewValue}
          />
        </BoxInput>
      </Form>
      <Box sx={{ marginTop: "20px", width: "100%" }}>
        <ButtonComponent
          buttonProps={{
            variant: "contained",
            onClick: () => setOpen(true), // Sempre permitir abrir a janela de confirmação ao clicar
            disabled: initialStatus !== "Aguardando", // Desabilitar o botão se o status inicial não for Aguardando
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
    </>
  );
};

const ChamadoEndereco: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  const [patios, setPatios] = React.useState<INewValue[]>([]);

  const [chamadosValues, setChamadosValues] = React.useState({
    estado: chamado.localizacao.estado,
    uf: chamado.localizacao.uf,
    municipio: chamado.localizacao.municipio,
    distrito: chamado.localizacao.distrito,
    cep: chamado.localizacao.cep,
    enderecoCompleto: chamado.localizacao.enderecoCompleto,
    latitude: chamado.localizacao.latitude,
    longitude: chamado.localizacao.longitude,
    patio: chamado?.patio?.nome,
    detalhes: chamado.detalhes,
  });

  const handleNewValue = (campo: string, valor: string) => {
    setChamadosValues((prevState) => ({
      ...prevState,
      [campo]: valor,
    }));
  };
  React.useEffect(() => {
    (async () => {
      const response = (await patiosService.getPatios()).map((item) => ({
        label: item.nome,
        id: item.id,
      }));

      setPatios(response);
    })();
  }, []);

  return (
    <Form sx={{ maxWidth: "800px" }}>
      <BoxInput>
        <InputComponent
          label="Estado"
          content="Estado"
          customProps={{
            value: chamadosValues.estado,
            onChange: (e) => {
              handleNewValue("estado", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="UF"
          content="UF"
          customProps={{
            value: chamadosValues.uf,
            onChange: (e) => {
              handleNewValue("uf", e.target.value);
            },
          }}
        />
      </BoxInput>
      <BoxInput>
        <InputComponent
          label="Município"
          content="Município"
          customProps={{
            value: chamadosValues.municipio,
            onChange: (e) => {
              handleNewValue("municipio", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Distrito"
          content="Distrito"
          customProps={{
            value: chamadosValues.distrito,
            onChange: (e) => {
              handleNewValue("distrito", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="CEP"
          content="CEP"
          customProps={{
            value: chamadosValues.cep,
            onChange: (e) => {
              handleNewValue("cep", cepMask(e.target.value));
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Endereço Completo"
          content="Endereço Completo"
          customProps={{
            value: chamadosValues?.enderecoCompleto,
            onChange: (e) => {
              handleNewValue("enderecoCompleto", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Latitude"
          content="Latitude"
          customProps={{
            value: chamadosValues?.latitude,
            readOnly: true,
            onChange: (e) => {
              handleNewValue("latitude", e.target.value);
            },
          }}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Longitude"
          content="Longitude"
          customProps={{
            value: chamadosValues.longitude,
            readOnly: true,
            onChange: (e) => {
              handleNewValue("longitude", e.target.value);
            },
          }}
        />
      </BoxInput>
      <BoxInput>
        <Label>Pátio</Label>
        <AutoCompleteComponent
          options={patios}
          label="Pátio"
          value={chamadosValues.patio}
          target="patio"
          noOptionsText="Nenhum Pátio encontrado"
          setStateActionWithTarget={handleNewValue}
        />
      </BoxInput>

      <BoxInput>
        <InputComponent
          label="Detalhes"
          content="Detalhes"
          customStyles={{
            color: "${({ theme }) => theme.palette.secondary.main}",
            height: "auto",
          }}
          customProps={{
            value: chamadosValues.detalhes,
            multiline: true,
            onChange: (e) => {
              handleNewValue("detalhes", e.target.value);
            },
          }}
        />
      </BoxInput>
    </Form>
  );
};

const ChamadoNcvs: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  const [index, setIndex] = React.useState(
    chamado.Ncv.length ? chamado.Ncv[0].id : 0
  );
  const [ncv, setNcv] = React.useState<IChamado["Ncv"]["0"]>();

  React.useEffect(() => {
    if (!chamado.Ncv.length) return;

    const ncv = chamado.Ncv.find((cham) => cham.id === index);
    setNcv(ncv);
  }, [index]);

  return (
    ncv && (
      <>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          {chamado.Ncv.map((item) => (
            <Button
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
              key={item.id}
              onClick={() => setIndex(item.id)}
            >
              Ncv {item.id}
            </Button>
          ))}
        </ButtonGroup>

        <Form>
          <BoxInput>
            <InputComponent
              label="NCV"
              content="NCV"
              customProps={{
                value: ncv.id,
              }}
            />
          </BoxInput>
          <BoxInput>
            <InputComponent
              label="Placa"
              content="Placa"
              customProps={{
                value: ncv.placa,
              }}
            />
          </BoxInput>
          <BoxInput>
            <InputComponent
              label="Cor"
              content="Cor"
              customProps={{
                value: ncv.cor,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Marca"
              content="Marca"
              customProps={{
                value: ncv.marca,
              }}
            />
          </BoxInput>

          <BoxInput>
            <InputComponent
              label="Modelo"
              content="Modelo"
              customProps={{
                value: ncv.modelo,
              }}
            />
          </BoxInput>
        </Form>
      </>
    )
  );
};

const ChamadoMoto: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  const [chamadoState, setChamado] = React.useState({
    nome: chamado?.Aceite?.length && chamado?.Aceite[0].Motoristas.name,
    kmStimado: chamado?.Aceite?.length && chamado?.Aceite[0].kmsEstimado,

    hrsStimado: chamado?.Aceite?.length && chamado?.Aceite[0].tempoEstimado,
    hrsAceite: chamado?.Aceite?.length && chamado?.Aceite[0].aceiteHora,
  });

  // Função para atualizar o estado dos campos
  const handleNewValue = (campo: string, valor: string) => {
    setChamado((prevState) => ({
      ...prevState,
      [campo]: valor,
    }));
  };

  return (
    chamado.Aceite?.length && (
      <Form>
        <BoxInput>
          <InputComponent
            label="Nome"
            content="Nome"
            customProps={{
              value: chamadoState.nome,
              onChange: (e) => {
                handleNewValue("estado", e.target.value);
              },
            }}
          />
        </BoxInput>

        <BoxInput>
          <InputComponent
            label="Distancia Patio"
            content="Distancia ate o Pátio"
            customProps={{
              value: chamadoState.kmStimado,
              onChange: (e) => {
                handleNewValue("estado", e.target.value);
              },
            }}
          />
        </BoxInput>
        <BoxInput>
          <InputComponent
            label="Distancia Chamado"
            content="Distancia ate o Chamado"
            customProps={{
              value: chamadoState.kmStimado,
              onChange: (e) => {
                handleNewValue("estado", e.target.value);
              },
            }}
          />
        </BoxInput>
        <BoxInput>
          <InputComponent
            label="Local chamado"
            content="Local do aceite do chamado"
            customProps={{
              value: chamadoState.kmStimado,
              onChange: (e) => {
                handleNewValue("estado", e.target.value);
              },
            }}
          />
        </BoxInput>
        <BoxInput>
          <InputComponent
            label="Tempo Estimado"
            content="Tempo Estimado"
            customProps={{
              value: chamadoState.hrsStimado,
              onChange: (e) => {
                handleNewValue("estado", e.target.value);
              },
            }}
          />
        </BoxInput>
        <BoxInput>
          <InputComponent
            label="Horas Aceite"
            content="Horas Aceite"
            customProps={{
              value: dayjs(chamadoState.hrsAceite).format("DD/MM/YYYY HH:mm"),
              onChange: (e) => {
                handleNewValue("estado", e.target.value);
              },
            }}
          />
        </BoxInput>
      </Form>
    )
  );
};

const ChamadosFotos: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  const [index, setIndex] = React.useState(
    chamado.Ncv.length ? chamado.Ncv[0].id : 0
  );

  const [ncv, setNcv] = React.useState<IChamado["Ncv"]["0"]>();

  React.useEffect(() => {
    if (!chamado.Ncv.length) return;
    const ncv = chamado.Ncv.find((cham) => cham.id === index);
    setNcv(ncv);
  }, [index]);

  return (
    ncv && (
      <>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          {chamado.Ncv.map((item) => (
            <Button
              sx={{
                color: "white",
                fontWeight: "bold",
              }}
              key={item.id}
              onClick={() => setIndex(item.id)}
            >
              Ncv {item.id}
            </Button>
          ))}
        </ButtonGroup>

        <CardContainer>
          {ncv.Avarias.map((item) => (
            <MediaCard key={item.id} data={item} />
          ))}
        </CardContainer>

        <CardContainer>
          <MediaCardUnique data={ncv.combustivelFotos} title={"Combustivel"} />
        </CardContainer>

        <CardContainer>
          <MediaCardUnique data={ncv.kmFotos} title={"Km"} />
        </CardContainer>
      </>
    )
  );
};

const MediaCardUnique: React.FC<{
  data: string[];
  title: string;
}> = ({ data, title }) => {
  return (
    <Card
      sx={{
        maxWidth: "500px",
        backgroundColor: "rgb(18, 18, 18)",
        width: "100%",
      }}
      elevation={4}
    >
      <SwipeableTextMobileStepper images={data} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={"bold"}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apagar</Button>
        <Button size="small">Visualizar</Button>
        <Button size="small">Baixar</Button>
      </CardActions>
    </Card>
  );
};

const MediaCard: React.FC<{
  data: IAvarias;
}> = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: "500px",
        backgroundColor: "rgb(18, 18, 18)",
        width: "100%",
      }}
      elevation={4}
    >
      <SwipeableTextMobileStepper images={data.fotos} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={"bold"}
        >
          {data.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apagar</Button>
        <Button size="small">Visualizar</Button>
        <Button size="small">Baixar</Button>
      </CardActions>
    </Card>
  );
};
