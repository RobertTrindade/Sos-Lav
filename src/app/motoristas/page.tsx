"use client";

import { MotoristasComponent } from "@/src/components/Motoristas";
import { FilterProvider } from "@/src/contexts/filterContext";

export default function Motoristas() {
  return (
    <FilterProvider>
      <MotoristasComponent />
    </FilterProvider>
  );
}
