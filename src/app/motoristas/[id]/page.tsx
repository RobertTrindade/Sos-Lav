import { MotoristasComponentDatails } from "@/src/components/Motoristas/Motoristas-details";
import motoristasService from "@/src/services/motoristas/motoristas.service";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
const MotoristasDetails = async (props: PageProps) => {
  const motoristas = await motoristasService.getMotorista(
    Number(props.params.id),
    10
  );
  const stringWithoutSpecialChars = motoristas.EmpresaReboque.cnpj.replace(
    /[^\w\s]/g,
    ""
  );

  const data = await fetch("https://cnpj.biz/" + stringWithoutSpecialChars, {
    next: { revalidate: 30000 },
  });

  const html = await data.text();

  let pTags = html.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi);

  pTags = pTags!.length > 50 ? ["<p>Empresa não encotrada</p>"] : pTags;

  return (
    <MotoristasComponentDatails
      motorista={motoristas}
      scriptTags={[...pTags!]}
    />
  );
};

export default MotoristasDetails;
