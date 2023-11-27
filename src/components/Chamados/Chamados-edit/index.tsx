"use client";

import * as React from "react";
import { Container, Content, MapArea, TabResultArea, Title } from "./styles";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";
import { InputComponent } from "@/src/shared/components/Inputs";

import { IChamado } from "@/src/services/chamados/chamados.service";
import { ChamadoEditarMap } from "./map";
import Link from "next/link";
import { CustomIconButton } from "../../Navbar/styles";
import { BackIcon } from "../../Motoristas/Motoristas-details";
import { useParams } from "next/navigation";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import { BoxInput, Form, Label } from "../Chamados-novo/styles";
import {
  AutoCompleteComponent,
  INewValue,
} from "@/src/shared/components/AutoComplete";
import { CustomCircularProgress } from "../../Motoristas/Motoristas-details/styles";
import {
  equipamentoSolicitadoOptions,
  tipoVeiculoOptions,
  tipoapreensaoOptions,
  urgencia,
  origens,
} from "../Chamados-novo/steps/step1";
import patiosService from "@/src/services/patios/patios.service";

export const ChamadosComponentEdit: React.FC<{
  chamado: IChamado;
}> = ({ chamado }) => {
  const [value, setValue] = React.useState(0);
  const params = useParams();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = ["Chamado", "Endereço", "NCVs", "Motorista", "Fotos"];

  return (
    <Container>
      <Content>
        <TabResultArea>
          <BreadCrumbsComponent />

          <div className="actionArea">
            <Link href={"/chamados"}>
              <CustomIconButton>
                <BackIcon /> 
              </CustomIconButton>
            </Link>
            <Title>Editar chamado {params && params.id}</Title>
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
              {value === 3 && <ChamadosFotos chamado={chamado} />}
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
  const [chamadoState, setChamado] = React.useState({
    equipamentoSolicitado: chamado.equipamentoSolicitado,
    tipoVeiculo: chamado.tipoVeiculo,
    tipoApreensao: chamado.tipoApreensao,
    urgencia: chamado.urgencia,
    origem: chamado.origem,
  });
  // Função para atualizar o estado dos campos
  const handleNewValue = (campo: string, valor: string) => {
    setChamado((prevState) => ({
      ...prevState,
      [campo]: valor,
    }));
  };

  return (
    chamadoState && (
      <Form>
        <BoxInput>
          <Label>Equipamento solicitado</Label>
          <AutoCompleteComponent
            options={equipamentoSolicitadoOptions}
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
            options={tipoVeiculoOptions}
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
            options={tipoapreensaoOptions}
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
            options={urgencia}
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
            options={origens}
            label="Tipo de Apreensão"
            noOptionsText="Nenhuma origem encontrada"
            setStateActionWithTarget={handleNewValue}
            value={chamadoState.origem}
            target="origem"
          />
        </BoxInput>
      </Form>
    )
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
              handleNewValue("cep", e.target.value);
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
            color: "#999a9a",
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
    chamado.Ncv.length !== 0 && (
      <Form>
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
                handleNewValue("cep", e.target.value);
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
              color: "#999a9a",
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
    )
  );
};

const ChamadosFotos: React.FC<{
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
    chamado.fotos.length !== 0 && (
      <Form>
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
                handleNewValue("cep", e.target.value);
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
              color: "#999a9a",
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
    )
  );
};
