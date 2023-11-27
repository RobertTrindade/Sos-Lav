"use client";

import { ChamadosComponentNovo } from "@/src/components/Chamados/Chamados-novo";
import { ChamadosProvider } from "@/src/contexts/chamadosContext";

export default function MotoristasDetails() {
  return (
    <ChamadosProvider>
      <ChamadosComponentNovo />
    </ChamadosProvider>
  );
}
