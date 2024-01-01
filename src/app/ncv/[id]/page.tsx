import { NcvEdit } from "@/src/components/Ncv/ncv-edit";
import ncvService from "@/src/services/ncv/ncv.service";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ChamadosDetails = async (props: PageProps) => {

  const res = await ncvService.listOne(props.params.id as string);

  return <NcvEdit chamado={res} />;
};

export default ChamadosDetails;
