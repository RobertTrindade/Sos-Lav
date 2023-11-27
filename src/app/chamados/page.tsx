"use client"
import { ChamadosComponent } from "@/src/components/Chamados";
import { FilterProvider } from "@/src/contexts/filterContext";

export default function Chamados() {
  return (
    <FilterProvider>
      <ChamadosComponent />
    </FilterProvider>
  );
}
