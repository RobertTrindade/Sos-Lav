"use client";
import React, { createContext, useContext } from "react";

interface IChamadosContext {}

const initial = {};
// Crie o contexto de registro
const UsuariosContext = createContext<IChamadosContext | undefined>(undefined);

// Provedor de registro que mantém o estado dos usuários
export const UsuariosProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <UsuariosContext.Provider value={{}}>{children}</UsuariosContext.Provider>
  );
};

export const useChamados = (): any => {
  const context = useContext(UsuariosContext);
  if (!context) {
    throw new Error("useChamados deve ser usado dentro de um RegisterProvider");
  }
  return context;
};
