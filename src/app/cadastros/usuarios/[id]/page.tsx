import { ChamadosComponentEdit } from "@/src/components/Operacao/Chamados/Chamados-edit";
import chamadosService from "@/src/services/chamados/chamados.service";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ChamadosDetails = async (props: PageProps) => {
  const res = await chamadosService.listOne(props.params.id as string);

  return <ChamadosComponentEdit chamado={res} />;
};

export default ChamadosDetails;
