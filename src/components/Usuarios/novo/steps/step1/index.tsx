import { AutoCompleteComponent } from "@/src/shared/components/AutoComplete";
import { BoxInput, Form, Label } from "../../../novo/styles";
import { useChamados } from "@/src/contexts/chamadosContext";
import { useUsuarios } from "@/src/contexts/usuarios";
import { InputComponent } from "@/src/shared/components/Inputs";

export const equipamentoSolicitadoOptions = [
  {
    label: "Prancha",
    id: 0,
  },
  {
    label: "Lança",
    id: 1,
  },
  {
    label: "Munck",
    id: 2,
  },
];
export const tipoVeiculoOptions = [
  {
    label: "BICICLETA",
    id: 1,
  },
  {
    label: "CAÇAMBAS/CONTAINER/SIMILARES (OUTROS)",
    id: 2,
  },
  {
    label: "CAMINHÃO (PESADO)",
    id: 3,
  },
  {
    label: "CARRETAS (PESADO)",
    id: 4,
  },
  {
    label: "CARRO (LEVE)",
    id: 5,
  },
  {
    label: "EMBARCAÇÃO ACIMA 7,5 METROS",
    id: 6,
  },
  {
    label: "EMBARCAÇÃO ATÉ 7,5 METROS",
    id: 7,
  },
  {
    label: "MEDIO",
    id: 8,
  },
  {
    label: "MOTO (LEVE)",
    id: 9,
  },
  {
    label: "ONIBUS (PESADO)",
    id: 10,
  },
  {
    label: "OUTROS",
    id: 11,
  },
];

export const tipoapreensaoOptions = [
  {
    label: "Administrativo",
    id: 1,
  },
  {
    label: "Judicial",
    id: 2,
  },
];

export const origens = [
  {
    label: "Ligação",
    id: 1,
  },
  {
    label: "E-mail",
    id: 2,
  },
  {
    label: "Outros",
    id: 2,
  },
];

export const urgencia = [
  {
    label: "Baixa",
    id: 1,
  },
  {
    label: "Media",
    id: 2,
  },
  {
    label: "Alta",
    id: 2,
  },
];
export const ChamadosStep1 = () => {
  const { user, handleNewValue } = useUsuarios();

  return (
    <>
      <Form>
        <BoxInput>
          <InputComponent
            label="Nome"
            content="Nome"
            customProps={{
              value: user.name,
              onChange: (e) => {
                handleNewValue("name", e.target.value);
              },
            }}
          />
        </BoxInput>
      </Form>
    </>
  );
};
