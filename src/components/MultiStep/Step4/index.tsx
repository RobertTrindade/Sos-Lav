"use client";

import { UploadInputComponent } from "../../UploadInput";
import { Container } from "./styles";
import { useRegister } from "@/src/contexts/registerContext";
import { useState } from "react";
export const Step4Component = () => {
  const { handleChangeContext, user } = useRegister();

  const [value, setValue] = useState();

  return (
    user.step1.userType && (
      <Container>
        {user.step1.userType === "pf" ? (
          <>
            <UploadInputComponent
              buttonProps={{
                variant: "contained",
                fullWidth: true,
                component: "label",
              }}
              customStyles={{
                color: "white",
              }}
            >
              Comprovante de Endereço
            </UploadInputComponent>

            <UploadInputComponent
              buttonProps={{
                variant: "contained",
                fullWidth: true,
                component: "label",
              }}
              customStyles={{
                color: "white",
              }}
            >
              Cópia simples do CPF (ou CNH){" "}
            </UploadInputComponent>

            <UploadInputComponent
              buttonProps={{
                variant: "contained",
                fullWidth: true,
                component: "label",
              }}
              customStyles={{
                color: "white",
              }}
            >
              Cópia simples do RG{" "}
            </UploadInputComponent>
          </>
        ) : (
          <>
            <UploadInputComponent
              buttonProps={{
                variant: "contained",
                fullWidth: true,
                component: "label",
              }}
              customStyles={{
                color: "white",
              }}
            >
              Contrato Social
            </UploadInputComponent>

            <UploadInputComponent
              buttonProps={{
                variant: "contained",
                fullWidth: true,
                component: "label",
              }}
              customStyles={{
                color: "white",
              }}
            >
              Cópia do cartão do CNPJ{" "}
            </UploadInputComponent>
            <UploadInputComponent
              buttonProps={{
                variant: "contained",
                fullWidth: true,
                component: "label",
              }}
              customStyles={{
                color: "white",
              }}
            >
              CPF, RG ou CNH dos sócios
            </UploadInputComponent>
          </>
        )}
      </Container>
    )
  );
};
