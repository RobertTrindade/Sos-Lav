"use client";
import React, { createContext, useContext, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// Interface para representar os dados do usuário
interface IFilterValues {
  dataInico: Dayjs | null;
  dataFinal: Dayjs | null;
}

// Interface para o contexto de registro
interface IFilterContext {
  filterValues: IFilterValues;
  handleNewValue: (
    target: keyof IFilterValues,
    value: Dayjs | null | string | number
  ) => void;
}

// Crie o contexto de registro
const FilterContext = createContext<IFilterContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const FilterProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [filterValues, setFilterValues] = useState<IFilterValues>({
    dataInico: new AdapterDayjs().date(new Date()),
    dataFinal: new AdapterDayjs().date(new Date()),
  });

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
    <FilterContext.Provider value={{ filterValues, handleNewValue }}>
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
