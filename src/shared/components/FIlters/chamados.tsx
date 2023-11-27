"use client";
import { FC } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import {
  CleanButton,
  CloseButton,
  Content,
  CustomDrawer,
  Modal,
  ModalFooter,
  ModalHeader,
} from "./styles";
import { ButtonComponent } from "../Buttons";
import CloseIcon from "@mui/icons-material/Close";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useFilter } from "@/src/contexts/filterContext";

interface IFilters {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export const Filters: FC<IFilters> = ({ open, setOpen, children }) => {
  const { fetchChamados, cleanFiltersChamados } = useFilter();

  const toggleDrawer = (Open: boolean, action: string | null) => {
    if (action === "filter") fetchChamados();
    if (action === "clean") cleanFiltersChamados();

    setOpen(Open);
  };

  const filters = () => (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-BR">
      <Modal role="presentation">
        <Content>
          <ModalHeader>
            <CloseButton
              variant="contained"
              onClick={() => toggleDrawer(false, null)}
            >
              <CloseIcon />
            </CloseButton>
          </ModalHeader>
          {children}

          <ModalFooter>
            <CleanButton onClick={() => toggleDrawer(false, "clean")}>
              Limpar
            </CleanButton>

            <ButtonComponent
              buttonProps={{
                variant: "contained",
                onClick: () => {
                  toggleDrawer(false, "filter");
                },
              }}
              customStyles={{
                color: "white",
                fontWeight: "700",
                fontSize: "15px",
                height: "50px",
                width: "260px",

                borderRadius: "10px",
              }}
            >
              Aplicar Filtros
            </ButtonComponent>
          </ModalFooter>
        </Content>
      </Modal>
    </LocalizationProvider>
  );

  return (
    <div>
      <CustomDrawer anchor={"right"} open={open} keepMounted={true}>
        {filters()}
      </CustomDrawer>
    </div>
  );
};
