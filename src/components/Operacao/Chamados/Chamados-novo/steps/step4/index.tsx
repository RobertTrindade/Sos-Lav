import { InputComponent } from "@/src/shared/components/Inputs";
import { useChamados } from "@/src/contexts/chamados";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Container, Label, BoxInput, Row, Title } from "./styles";
import { useEffect, useState } from "react";
import motoristasService, {
  IMotoristaDto,
} from "@/src/services/motoristas/motoristas.service";

export const ChamadosStep4 = () => {
  const [motoristas, setMotoristas] = useState<IMotoristaDto[]>([]);

  const {
    chamadosValues: { vehiclesQuantity, driversQuantity, multiple },
    handleNewValue,
  } = useChamados();

  useEffect(() => {
    (async () => {
      const res = await motoristasService.getMotoristas("?status=ativo");
      setMotoristas(res);
    })();
  }, []);

  return (
    <Container>
      <Title>Seleção de motorista</Title>
      {motoristas.map((moto) => (
        <div key={moto.id}>{moto.name}</div>
      ))}
    </Container>
  );
};
