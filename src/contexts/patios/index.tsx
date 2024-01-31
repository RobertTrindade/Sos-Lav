"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { INewValue } from "../../shared/components/AutoComplete";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";


import patiosService, {
  IPatiosResponse,
} from "../../services/patios/patios.service";
import uploadService from "@/src/services/upload/upload.service";

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
      startAt: dayjs(startAt).format("DD/MM/YYYY").toString() || "",
      endAt: dayjs(endAt).format("DD/MM/YYYY").toString() || "",
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

  const Upload = async (pdfBase64: string) => {
    try {
      // Verificar se a string é válida
      if (/^[A-Za-z0-9+/]+={0,2}$/.test(pdfBase64)) {
        // Decodificar o PDF base64 para bytes
        const byteCharacters = atob(pdfBase64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
  
        // Criar um blob a partir dos bytes
        const blob = new Blob([byteArray], { type: 'application/pdf' });
  
        // Criar um FormData e anexar o blob
        const formData = new FormData();
        formData.append('file', blob);
  
        // Enviar o FormData para o serviço de upload
        const { url } = await uploadService.uploadPDF(formData);
        return url;
      } else {
        console.log("String base64 inválida.");
        return null;
      }
    } catch (err) {
      console.log(err);
      return null; // ou lançar um erro, dependendo do comportamento desejado
    }
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
    console.log(tableData); // Verifica se tableData está corretamente preenchido com os dados dos documentos
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
      
    // Mapear os documentos na tableData e fazer upload dos PDFs
    const documentosComPDF = await Promise.all(tableData.map(async (documento) => {
      console.log(documento); // Verifica se os arquivos PDF estão corretamente acessados dentro do objeto documento
      if (documento.file !== null) {
        const pdfUrl = await Upload(documento.file.split(",")[1]); // Remover o cabeçalho "data:application/pdf;base64,"
        const { id, startAt, endAt, ...documentoSemId } = documento; // Remover o campo de ID e formatar as datas
        return {
          ...documentoSemId,
          file: pdfUrl,
          startAt: dayjs(startAt).toISOString() || "",
          endAt: dayjs(endAt).toISOString() || ""
        };
      }
      return documento;
    }));

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
      documentos:  documentosComPDF,

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