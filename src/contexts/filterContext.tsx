"use client";
import React, { createContext, useContext, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MotoristasService, {
  IMotoristaDto,
} from "@/src/services/motoristas/motoristas.service";
import { createQueryString } from "../hooks/useSearchParams";
import chamadosService, {
  IChamado,
} from "../services/chamados/chamados.service";

// Interface para representar os dados do usuário
interface IFilterValues {
  dataInicio: Dayjs | null;
  dataFinal: Dayjs | null;
  status: string | null;
}

// Interface para o contexto de registro
interface IFilterContext {
  filterValues: IFilterValues;
  handleNewValue: (
    target: keyof IFilterValues,
    value: Dayjs | null | string | number
  ) => void;
  isLoading: boolean;
  motoristas: IMotoristaDto[];
  chamados: IChamado[];

  fetchMotoristas: () => void;
  fetchChamados: () => void;
  cleanFilters: () => void;
  cleanFiltersChamados: () => void;
}

// Crie o contexto de registro
const FilterContext = createContext<IFilterContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const FilterProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [motoristas, setMotoristas] = useState<IMotoristaDto[]>([]);
  const [chamados, setChamados] = useState<IChamado[]>([]);

  const [isLoading, setLoading] = useState<boolean>(false);

  const [filterValues, setFilterValues] = useState<IFilterValues>({
    dataInicio: new AdapterDayjs().date(new Date()),
    dataFinal: new AdapterDayjs().date(new Date()),
    status: "",
  });

  const cleanFiltersChamados = async () => {
    setLoading(true);

    setFilterValues({
      dataInicio: new AdapterDayjs().date(new Date()),
      dataFinal: new AdapterDayjs().date(new Date()),
      status: "",
    });
    const chamados = await chamadosService.listAllNoPag();

    // Mapeie os motoristas e formate a propriedade 'createdAt'
    const data = chamados.map((item) => ({
      ...item,
      createdAt: dayjs(item.createAt).format("DD/MM/YYYY HH:mm"),
      patioName: item.patio.nome,
      chamadorName: item.chamador.name,
      localizacaoName: item?.localizacao?.enderecoCompleto,
    }));

    // Atualize o estado com os motoristas formatados
    setChamados(data!);
    setLoading(false);
  };

  const fetchChamados = async () => {
    try {
      setLoading(true);
      const { status, dataFinal, dataInicio } = filterValues;
      const params = createQueryString({
        dataInicio: dataInicio?.toDate(),
        dataFinal: dataFinal?.toDate(),
        status: status,
      });

      const chamados = await chamadosService.listAll(params);

      // Mapeie os motoristas e formate a propriedade 'createdAt'
      const data = chamados.data.map((item) => ({
        ...item,
        createdAt: dayjs(item.createAt).format("DD/MM/YYYY HH:mm"),
        patioName: item.patio.nome,
        chamadorName: item.chamador.name,
        localizacaoName: item?.localizacao?.enderecoCompleto,
      }));

      // Atualize o estado com os motoristas formatados
      setChamados(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar motoristas:", error);
      // Lide com o erro conforme necessário
      setLoading(false);
    }
  };

  // Motorista

  const fetchMotoristas = async () => {
    try {
      setLoading(true);
      const { status, dataFinal, dataInicio } = filterValues;
      // Obtenha os motoristas usando MotoristasService
      const params = createQueryString({
        dataInicio: dataInicio?.toDate(),
        dataFinal: dataFinal?.toDate(),
        status: status,
      });

      const motoristas = await MotoristasService.getMotoristas(params);

      // Mapeie os motoristas e formate a propriedade 'createdAt'
      const data = motoristas.data.map((item) => ({
        ...item,
        createdAt: dayjs(item.createdAt).format("DD/MM/YYYY HH:mm"),
      }));

      // Atualize o estado com os motoristas formatados
      setMotoristas(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar motoristas:", error);
      // Lide com o erro conforme necessário
      setLoading(false);
    }
  };

  const cleanFilters = async () => {
    setLoading(true);

    setFilterValues({
      dataInicio: new AdapterDayjs().date(new Date()),
      dataFinal: new AdapterDayjs().date(new Date()),
      status: "",
    });
    const motoristas = await MotoristasService.getMotoristas();
    const data = motoristas.data.map((item) => ({
      ...item,
      createdAt: dayjs(item.createdAt).format("DD/MM/YYYY HH:mm"),
    }));
    setMotoristas(data);
    setLoading(false);
  };

  const handleNewValue = (
    target: keyof IFilterValues,
    value: Dayjs | null | string | number
  ) => {
    setFilterValues({
      ...filterValues,
      [target]: value,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        filterValues,
        handleNewValue,
        fetchMotoristas,
        motoristas,
        isLoading,
        cleanFilters,
        fetchChamados,
        chamados,
        cleanFiltersChamados,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): IFilterContext => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter deve ser usado dentro de um RegisterProvider");
  }
  return context;
};
