import { ProfileComponent } from "@/src/components/Profile";
import { SideBarProfileComponent } from "@/src/components/Profile/SideBarProfile";

export default function profile() {
  return (
    <>
      <SideBarProfileComponent />
      <ProfileComponent />
    </>
  );
}
