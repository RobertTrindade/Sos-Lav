import { AnnounceTablesComponent } from "@/src/components/Adm/AnnounceTables";
import AnnounceService from "@/src/services/announceBar/announceBar.service";

export default async function Login() {
  const Announces = await AnnounceService.getMessages(100);

  return <AnnounceTablesComponent Announces={Announces} />;
}
