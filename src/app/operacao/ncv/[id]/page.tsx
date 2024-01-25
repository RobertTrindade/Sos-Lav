import { NcvEdit } from "@/src/components/Operacao/Ncv/ncv-edit";
import ncvService from "@/src/services/ncv/ncv.service";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const NcvDetails = async (props: PageProps) => {
  const res = await ncvService.listOne(props.params.id as string, 0);

  return <NcvEdit chamado={res} />;
};

export default NcvDetails;
