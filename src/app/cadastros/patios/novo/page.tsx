"use client";

import { PatiosComponentNovo } from "@/src/components/Cadastros/Patios/Patios-novo";
import { PatiosProvider } from "@/src/contexts/patios";

export default function PatiosNovo() {
  return (
    <PatiosProvider>
      <PatiosComponentNovo />
    </PatiosProvider>
  );
}
