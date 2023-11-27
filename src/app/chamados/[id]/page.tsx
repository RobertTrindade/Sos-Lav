"use client";

import { ChamadosComponentEdit } from "@/src/components/Chamados/Chamados-edit";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import chamadosService, {
  IChamado,
} from "@/src/services/chamados/chamados.service";
export default function MotoristasDetails() {
  const params = useParams();

  const [chamados, setChamados] = useState<IChamado>();
  useEffect(() => {
    (async () => {
      if (!params) return;
      const res = await chamadosService.listOne(params.id as string);
      setChamados(res);
    })();
  }, []);

  return <ChamadosComponentEdit  chamado={chamados!}/>;
}
