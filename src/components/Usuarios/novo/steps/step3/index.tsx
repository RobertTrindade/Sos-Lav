import { InputComponent } from "@/src/shared/components/Inputs";
import { useChamados } from "@/src/contexts/chamadosContext";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Container, Label, BoxInput, Row, Title } from "./styles";

export const ChamadosStep3 = () => {
  const {
    chamadosValues: { vehiclesQuantity, driversQuantity, multiple },
    handleNewValue,
  } = useChamados();

  return (
    <Container>
      <Row>
        <BoxInput>
          <FormControlLabel
            control={
              <Checkbox
                size="medium"
                value={multiple}
                onChange={(e) => {
                  handleNewValue("multiple", e.target.checked as any);
                }}
              />
            }
            label={<Label>Múltiplos Veiculos</Label>}
          />
        </BoxInput>
        {multiple && (
          <>
            <InputComponent
              label="Quantidade "
              content="Quantidade"
              customProps={{
                value: vehiclesQuantity,
                type: "number",
                onChange: (e) => {
                  if (Number(e.target.value) < 1) return;
                  handleNewValue("vehiclesQuantity", e.target.value);
                },
              }}
            />

            <InputComponent
              label="Motoristas"
              content="Motoristas"
              customProps={{
                value: driversQuantity,
                type: "number",
                onChange: (e) => {
                  if (Number(e.target.value) < 1) return;

                  handleNewValue("driversQuantity", e.target.value);
                },
              }}
            />
          </>
        )}
      </Row>
      <Title>
        {vehiclesQuantity && (vehiclesQuantity as number)}
        {vehiclesQuantity == 1 ? " Veiculo será " : " Veiculos serão "}
        adicionados a esse chamado, com {driversQuantity as number}
        {(driversQuantity as number) == 1 ? " Motorista" : " Motoristas"}
      </Title>
    </Container>
  );
};
