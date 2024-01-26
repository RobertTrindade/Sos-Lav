"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { INewValue } from "../../shared/components/AutoComplete";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";
import UploadService from "@/src/services/upload/upload.service";


import patiosService, {
  IPatiosResponse,
} from "../../services/patios/patios.service";

export interface IPatioValues {
  nome: string,
  email: string,
  telefone: string,
  responsavel: string,
  observacao: string,
  patioDocs:  INewValue | undefined,
  startAt: string,
  endAt: string,
  observacaoDoc: string,
  pdf_contrato: string,
  bairro: string,
  cep: string, 
  cidade: string, 
  estado: string, 
  createdAt: string,
  longitude: string | number,
  latitude: string | number,
  endereco: string,
  ativo: boolean,
  documentos: IPatioDocument[];
}

interface IPatioDocument {
  id: string;
  tipo: string;
  observacao: string;
  startAt: string;
  endAt: string;
  file: string;
}



// Interface para o contexto de registro
interface IPatiosContext {
  handleNewValue: (
    target: keyof IPatioValues,
    value:
      | Dayjs
      | null
      | string
      | number
      | INewValue
      | INewValue[]
  ) => void;

  patioValues: IPatioValues;

  handleCreatePatio: () => Promise<IPatiosResponse>;
  reset: () => void;

  handleGuardarDados: (patioValues: IPatioValues) => void

  handleDeleteRow: (rowId: string) => void;

  handleDownloadPDF: (pdfUrl: string) => void;
  
  tableData: IPatioDocument[];
  setTableData: React.Dispatch<React.SetStateAction<any[]>>;
}

const initial: IPatioValues = {
  nome: "",
  email: "",
  responsavel: "",
  telefone: "",
  observacao: "",
  patioDocs: undefined,
  startAt: "",
  endAt: "",
  observacaoDoc: "",
  pdf_contrato: "",
  bairro: "",
  cep: "",
  cidade: "",
  estado: "",
  createdAt: "",
  longitude: "",
  latitude: "",
  endereco: "",
  ativo: true,
  documentos: [],
};

const initialTableValues = {
  patioDocs: undefined,
  observacaoDoc: "",
  startAt: "",
  endAt: "",
  pdf_contrato: "",
};

const PatiosContext = createContext<IPatiosContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const PatiosProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {

  const [patioValues, setPatioValues] = useState<IPatioValues>({
    ...initial,
  });

  const [tableData, setTableData] = useState<IPatioDocument[]>([]);

  const handleNewValue = (target: keyof IPatioValues, value: any) => {
    if (target === "startAt" || target === "endAt") {
      // Converter para string somente se for necessário para o contexto
      value = value ? value.toISOString() : null;
    }
    setPatioValues((data) => ({
      ...data,
      [target]: value,
    }));
  };

  const handleGuardarDados = () => {
    const { patioDocs, observacaoDoc, startAt, endAt, pdf_contrato } = patioValues;

    // Gere um ID único para cada linha
    const rowId = uuidv4();

    const newDocument: IPatioDocument = {
      id: rowId,
      tipo: patioDocs?.label || "",
      observacao: observacaoDoc || "",
      startAt: dayjs(startAt).toISOString() || "",
      endAt: dayjs(endAt).toISOString() ||"",
      file: pdf_contrato || "",
    };

    setTableData((prevData) => [...prevData, newDocument]);

    // Limpar apenas os dados relacionados à tabela
    setPatioValues((prevValues) => ({
      ...prevValues,
      ...initialTableValues,
    }));
  };

  const handleDeleteRow = (rowId: string) => {
    setTableData((prevData) => prevData.filter((row) => row.id !== rowId));
  };
  
  const handleDownloadPDF = async (pdfUrl: string) => {
    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();

      // Criar um objeto Blob e gerar um URL para o mesmo
      const blobUrl = URL.createObjectURL(blob);

      console.log(blobUrl);

      // Lógica para iniciar o download d o PDF
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "documento.pdf";
      link.click();

      // Liberar o objeto Blob quando não for mais necessário
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Erro ao baixar e abrir o PDF:", error);
    }
  };
  

  const handleCreatePatio = async () => {
    
    const { 
      nome,
      email,
      responsavel,
      telefone,
      observacao,
      bairro, 
      cep,
      cidade,
      estado,
      createdAt,
      longitude,
      latitude, 
      endereco,
      ativo,} = patioValues;
    
    const payload = {
      nome,
      email,
      responsavel,
      telefone,
      observacao,
      bairro,
      cep,
      cidade,
      estado,
      createdAt: dayjs(createdAt).format("DD/MM/YYYY").toString(),
      longitude,
      latitude,
      endereco,
      ativo,
      documentos: tableData,

    }
    console.log(payload);
    return await patiosService.createPatio(payload);
    
  };

  const reset = () => {
    setPatioValues(initial);
  };

  return (
    <PatiosContext.Provider
      value={{
        patioValues,
        handleNewValue,
        setTableData,
        tableData,
        handleGuardarDados,
        reset,
        handleCreatePatio,
        handleDeleteRow,
        handleDownloadPDF,
      }}
    >
      {children}
    </PatiosContext.Provider>
  );
};

export const usePatios = (): IPatiosContext => {
  const context = useContext(PatiosContext);
  if (!context) {
    throw new Error("usePatio deve ser usado dentro de um RegisterProvider");
  }
  return context;
};