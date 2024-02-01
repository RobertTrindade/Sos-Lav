"use client";
import chamadosService, {
  IChamado,
} from "@/src/services/chamados/chamados.service";
import { BoxInput, Form } from "../../Chamados-novo/styles";
import { InputComponent } from "@/src/shared/components/Inputs";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { useEffect, useState } from "react";
import motoristasService, {
  IMotoristaDto,
} from "@/src/services/motoristas/motoristas.service";

import {
  Container,
  Title,
  DriverContainer,
  DriverCard,
  DriverName,
  DriverStatus,
  DriverPrice,
} from "../../Chamados-novo/./steps/step4/styles";
import { Avatar } from "@mui/material";
import { NivelGenerate } from "@/src/utils/Xp";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";

export const EncaminharMotorista: React.FC<{
  chamado: IChamado;
  remakeCall: () => Promise<void>;
}> = ({ chamado, remakeCall }) => {
  const [motoristas, setMotoristas] = useState<IMotoristaDto[]>([]);
  const [selectedMotoristas, setSelectedMotoristas] = useState<IMotoristaDto>();

  const handleSelectedDriver = (driver: IMotoristaDto) => {
    if (!driver) return;
    setSelectedMotoristas(driver);
  };

  useEffect(() => {
    (async () => {
      const res = await motoristasService.getMotoristasFromChamados(
        "?status=ativo"
      );
      setMotoristas(res);
    })();
  }, []);

  const handleRemoveAt = async () => {
    try {
      await chamadosService.removeChamadoFromDriver(chamado.id, {
        idMotorista: chamado.Motoristas.id,
      });
      remakeCall();
    } catch (error) {}
  };

  const handleAtr = async () => {
    try {
      if (!selectedMotoristas) return;
      await chamadosService.atrChamadoToDriver(chamado.id, {
        idMotorista: selectedMotoristas.id,
      });
      remakeCall();
    } catch (error) {}
  };

  return chamado?.Motoristas?.name ? (
    <>
      <Form sx={{ maxWidth: "800px" }}>
        <BoxInput>
          <InputComponent
            label="Motorista"
            content="Motorista"
            customProps={{
              value: chamado?.Motoristas?.name,
              onChange: (e) => {},
            }}
          />
        </BoxInput>
      </Form>

      <ButtonComponent
        buttonProps={{
          variant: "contained",
          onClick: () => handleRemoveAt(),
        }}
        customStyles={{
          color: "white",
          fontWeight: "700",
          fontSize: "15px",
          height: "50px",
          borderRadius: "14px",
          width: "200px",
        }}
      >
        Desatribuir
      </ButtonComponent>
    </>
  ) : (
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
          <ButtonComponent
            buttonProps={{
              variant: "contained",
              onClick: () => handleAtr(),
            }}
            customStyles={{
              color: "white",
              fontWeight: "700",
              fontSize: "15px",
              height: "50px",
              borderRadius: "14px",
              width: "200px",
            }}
          >
            Atribuir
          </ButtonComponent>
        </DriverContainer>
      ) : (
        <CustomCircularProgress />
      )}
    </Container>
  );
};
