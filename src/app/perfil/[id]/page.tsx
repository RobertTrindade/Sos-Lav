import { UsuariosEditMyselfComponent } from "@/src/components/Cadastros/Usuarios/Usuarios-edit-myself";
import usuariosService from "@/src/services/usuarios/usuarios.service";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

const ChamadosDetails = async (props: PageProps) => {
  const res = await usuariosService.getById(props.params.id as string);

  return <UsuariosEditMyselfComponent usuario={res} />;
};

export default ChamadosDetails;
