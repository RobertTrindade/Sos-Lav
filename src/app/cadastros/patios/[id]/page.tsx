import { PatiosComponentEdit } from "@/src/components/Cadastros/Patios/Patios-edit";
import patiosService from "@/src/services/patios/patios.service";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const PatiosDetails = async (props: PageProps) => {
  const res = await patiosService.listOne(props.params.id as string);

  return <PatiosComponentEdit patio={res} />;
};

export default PatiosDetails;
