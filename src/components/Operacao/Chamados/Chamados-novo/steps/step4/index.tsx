import { useChamados } from "@/src/contexts/chamados";
import {
  Container,
  Title,
  DriverContainer,
  DriverCard,
  DriverName,
  DriverStatus,
  DriverPrice,
} from "./styles";
import { useEffect, useState } from "react";
import motoristasService, {
  IMotoristaDto,
} from "@/src/services/motoristas/motoristas.service";
import { Avatar } from "@mui/material";
import { NivelGenerate } from "@/src/utils/Xp";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";

export const ChamadosStep4 = () => {
  const [motoristas, setMotoristas] = useState<IMotoristaDto[]>([]);
  const [selectedMotoristas, setSelectedMotoristas] = useState<IMotoristaDto>();
  const {
    chamadosValues: { motoristaId },
    handleNewValue,
  } = useChamados();

  useEffect(() => {
    (async () => {
      const res = await motoristasService.getMotoristasFromChamados(
        "?status=ativo"
      );
      setMotoristas(res);
    })();
  }, []);

  const handleSelectedDriver = (driver: IMotoristaDto) => {
    if (!driver) return;
    setSelectedMotoristas(driver);
    handleNewValue("motoristaId",driver.id)
  };

  return (
    <Container>
      {selectedMotoristas ? (
        <Title>O Motorista {selectedMotoristas.name} foi selecionado</Title>
      ) : (
        <Title>Seleção de motorista</Title>
      )}
      {motoristas.length ? (
        <DriverContainer>
          {motoristas.map((moto) => (
            <DriverCard
              key={moto.id}
              onClick={() => handleSelectedDriver(moto)}
              active={moto.id === selectedMotoristas?.id}
            >
              <div className="header">
                <Avatar
                  src={moto?.imageUrl}
                  alt={moto?.name}
                  className="avatar"
                />
                <div className="col">
                  <DriverName>{moto?.name}</DriverName>
                  <DriverStatus>{moto?.statusTrabalho}</DriverStatus>
                </div>
              </div>

              <div className="priceContainer">
                <DriverPrice>Tarifa : 200,00</DriverPrice>
              </div>

              <div className="XpContainer">
                <DriverPrice> Nível : {NivelGenerate(moto.xp)}</DriverPrice>
              </div>

              <div className="XpContainer">
                <DriverPrice> Distancia : {moto.xp}</DriverPrice>
              </div>
            </DriverCard>
          ))}
        </DriverContainer>
      ) : (
        <CustomCircularProgress />
      )}
    </Container>
  );
};
