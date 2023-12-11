"use client";

import { UsuariosComponentNovo } from "@/src/components/Usuarios/novo";
import { UsuariosProvider } from "@/src/contexts/usuarios";

export default function UsuarioNovo() {
  return (
    <UsuariosProvider>
      <UsuariosComponentNovo />
    </UsuariosProvider>
  );
}
