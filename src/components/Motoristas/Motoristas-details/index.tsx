"use client";

import * as React from "react";
import {
  BackArea,
  Container,
  CustomIconButton,
  Loading,
  StyledBadge,
  Title,
} from "./styles";
import MotoristasService, {
  IMotoristaDto,
} from "@/src/services/motoristas/motoristas.service";
import { BreadCrumbsComponent } from "@/src/shared/components/breadcrumbs";
import Link from "next/link";

import { ButtonComponent } from "@/src/shared/components/Buttons";

import { MotoristasComponentEdit } from "../Motorista-edit";
import { Avatar } from "@mui/material";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { AlertDialog } from "@/src/shared/components/Dialog";
export const MotoristasComponentDatails: React.FC<{
  motorista?: IMotoristaDto;
  scriptTags?: string[] | undefined;
}> = ({ motorista, scriptTags }) => {
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = React.useState("aprovado");

  const handleAproveMotorista = async (status: string) => {
    try {
      if (!motorista) return;
      await MotoristasService.aproveDriver(motorista.id, {
        status,
      });
      setAction(status === "ativo" ? "aprovado" : "recusado");
      setOpen(true);
    } catch (error) {}
  };

  return motorista ? (
    <Container>
      <BreadCrumbsComponent />
      <BackArea>
        <div className="actionArea">
          <Link href={"/motoristas"}>
            <CustomIconButton>
              <BackIcon />
            </CustomIconButton>
          </Link>
          <Title>
            {motorista?.status === "pendente" ? "Aprovar" : "Editar"} Motorista{" "}
            {motorista?.name}
          </Title>
          <AvalibleComponent motorista={motorista!} />
          {motorista?.status === "pendente" && (
            <div className="ButtonArea">
              <ButtonComponent
                buttonProps={{
                  variant: "contained",
                  onClick: () => handleAproveMotorista("ativo"),
                }}
                customStyles={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "15px",
                  height: "50px",
                  width: "200px",
                  borderRadius: "14px",
                }}
              >
                Aprovar
              </ButtonComponent>

              <ButtonComponent
                buttonProps={{
                  variant: "contained",
                  onClick: () => handleAproveMotorista("inativo"),
                }}
                customStyles={{
                  color: "white",
                  fontWeight: "700",
                  fontSize: "15px",
                  height: "50px",
                  width: "200px",
                  borderRadius: "14px",
                  backgroundColor: "transparent",
                  border: "2px solid #303033",
                }}
              >
                Recusar
              </ButtonComponent>
            </div>
          )}
        </div>
        <MotoristasComponentEdit
          motorista={motorista!}
          scriptTags={scriptTags}
        />
      </BackArea>
      <AlertDialog
        title={`Aprovação de Motorista`}
        content={`Motorista ${motorista?.name} foi ${action} com sucesso, Aguarde 10 segundos e recarregue a página`}
        open={open}
        setOpen={setOpen}
      >
        <ButtonComponent
          buttonProps={{
            variant: "contained",
            onClick: () => setOpen(false),
          }}
          customStyles={{
            color: "white",
            fontWeight: "700",
            fontSize: "15px",
            height: "50px",
            width: "200px",
            borderRadius: "14px",
          }}
        >
          Fechar
        </ButtonComponent>
      </AlertDialog>
    </Container>
  ) : (
    <Loading>
      {" "}
      <CustomCircularProgress color="secondary" size={"large"} />
    </Loading>
  );
};

const AvalibleComponent: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) =>
  motorista && (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
      status={motorista.statusTrabalho}
    >
      <Avatar
        sizes="large"
        alt={motorista.name}
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${motorista.imageUrl}`}
      />
    </StyledBadge>
  );

export const BackIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0112 19.497L8.70322 12L16.0112 4.50299C16.1421 4.36905 16.2153 4.18923 16.2153 4.00199C16.2153 3.81475 16.1421 3.63494 16.0112 3.50099C15.9477 3.43614 15.8718 3.38461 15.7881 3.34944C15.7044 3.31426 15.6145 3.29614 15.5237 3.29614C15.4329 3.29614 15.343 3.31426 15.2593 3.34944C15.1756 3.38461 15.0998 3.43614 15.0362 3.50099L7.26022 11.4765C7.1237 11.6166 7.04729 11.8044 7.04729 12C7.04729 12.1956 7.1237 12.3834 7.26022 12.5235L15.0347 20.499C15.0983 20.5643 15.1743 20.6162 15.2583 20.6517C15.3423 20.6871 15.4326 20.7054 15.5237 20.7054C15.6149 20.7054 15.7051 20.6871 15.7891 20.6517C15.8731 20.6162 15.9491 20.5643 16.0127 20.499C16.1436 20.365 16.2168 20.1852 16.2168 19.998C16.2168 19.8108 16.1436 19.6309 16.0127 19.497H16.0112Z"
        fill="white"
      />
    </svg>
  );
};
