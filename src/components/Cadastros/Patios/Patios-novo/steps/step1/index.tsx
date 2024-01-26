import { InputComponent } from "@/src/shared/components/Inputs";
import { BoxInput, Form } from "../../styles";

export const ChamadosStep1 = () => {
  return (
    <>
      <Form>
        <BoxInput>
          <InputComponent label="Estado" content="Estado" />
        </BoxInput>
      </Form>
    </>
  );
};
