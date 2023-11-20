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
import { DataFilter } from "./data";
import { FilterProvider } from "@/src/contexts/filterContext";
import { PatiosFilter } from "./patios";
import { Chips } from "./chip";

interface IFilters {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Filters: FC<IFilters> = ({ open, setOpen }) => {
  const toggleDrawer = (action: boolean) => {
    setOpen(action);
  };

  const filters = () => (
    <FilterProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Modal role="presentation">
          <Content>
            <ModalHeader>
              <CloseButton
                variant="contained"
                onClick={() => toggleDrawer(false)}
              >
                <CloseIcon />
              </CloseButton>
            </ModalHeader>
            <DataFilter />
            <PatiosFilter />
            <Chips />
            <ModalFooter>
              <CleanButton>Limpar</CleanButton>
              <ButtonComponent
                buttonProps={{
                  variant: "contained",
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
    </FilterProvider>
  );

  return (
    <div>
      <CustomDrawer
        anchor={"right"}
        open={open}
        onClose={() => toggleDrawer(false)}
        keepMounted={false}
      >
        {filters()}
      </CustomDrawer>
    </div>
  );
};
