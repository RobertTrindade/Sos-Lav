"use client";

import { UsuariosComponentNovo } from "@/src/components/Cadastros/Usuarios/Usuarios-novo";
import { UsuariosProvider } from "@/src/contexts/usuarios";

export default function ChamadosNovo() {
  return (
    <UsuariosProvider>
      <UsuariosComponentNovo />
    </UsuariosProvider>
  );
}
