"use client";

import { InputComponent } from "../../../../shared/components/Inputs";
import { Container } from "./styles";
import { useRegister } from "@/src/contexts/registerContext";

export const Step3Component = () => {
  const { handleChangeContext, user } = useRegister();
  console.log(user.step1.userType);
  return (
    user.step1.userType && (
      <Container>
        {user.step1.userType === "pf" ? (
          <>
            <InputComponent
              label={`Nome`}
              type="text"
              customProps={{
                required: true,
              }}
            />
            <InputComponent
              label={`CPF`}
              type="text"
              customProps={{
                required: true,
              }}
            />
            <InputComponent
              label={`RG`}
              type="text"
              customProps={{
                required: true,
              }}
            />{" "}
            <InputComponent
              label={`Nascimento`}
              type="date"
              customProps={{
                required: true,
              }}
            />{" "}
            <InputComponent
              label={`Estado civil`}
              type="text"
              customProps={{
                required: true,
              }}
            />{" "}
            <InputComponent
              label={`E-mail`}
              type="text"
              customProps={{
                required: true,
              }}
            />{" "}
            <InputComponent
              label={`Celular`}
              type="text"
              customProps={{
                required: true,
              }}
            />{" "}
          </>
        ) : (
          <>
            <InputComponent
              label={`Razão social`}
              type="text"
              customProps={{
                required: true,
              }}
            />

            <InputComponent
              label={`CNPJ`}
              type="text"
              customProps={{
                required: true,
              }}
            />

            <InputComponent
              label={`Inscrição`}
              type="text"
              customProps={{
                required: true,
              }}
            />

            <InputComponent
              label={`Nome fantasia`}
              type="text"
              customProps={{
                required: true,
              }}
            />

            <InputComponent
              label={`Sócio`}
              type="text"
              customProps={{
                required: true,
              }}
            />
            <InputComponent
              label={`CPF Títular`}
              type="text"
              customProps={{
                required: true,
              }}
            />

            <InputComponent
              label={`RG Títular`}
              type="text"
              customProps={{
                required: true,
              }}
            />

            <InputComponent
              label={`E-mail`}
              type="text"
              customProps={{
                required: true,
              }}
            />

            <InputComponent
              label={`Celular`}
              type="text"
              customProps={{
                required: true,
              }}
            />
          </>
        )}
      </Container>
    )
  );
};
