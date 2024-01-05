"use client";

import { ChamadosComponentNovo } from "@/src/components/Chamados/Chamados-novo";
import { ChamadosProvider } from "@/src/contexts/chamados";

export default function ChamadosNovo() {
  return (
    <ChamadosProvider>
      <ChamadosComponentNovo />
    </ChamadosProvider>
  );
}
