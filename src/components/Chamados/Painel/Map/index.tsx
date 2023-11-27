"use client";
import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import { Box } from "@mui/system";
import { styled } from "@mui/material";
import LocationMotoristasService, {
  ILocationMotoristaDTO,
} from "@/src/services/location/location.service";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";

import truckIcon from "./icon.svg";
import chamadowaintin from "./chamadowaintin.svg";
import chamadocomplete from "./chamadocomplete.svg";

const containerStyle = {
  width: "100%",
  height: "100%",
};

import { IChamado } from "@/src/services/chamados/chamados.service";
import { ativarNotificacao } from "@/src/utils/showPushNotification";
import { useGeolocation } from "@/src/hooks/useGeolocation";
import { TimeFormatter } from "@/src/utils/timeFormater";
import { socket } from "@/src/services/socket.io";

export const ChamadosPainelMap: FC<{
  chamados?: IChamado[];
}> = ({ chamados }) => {
  const { location, error } = useGeolocation();
  const [motoristas, setMotoristas] = useState<ILocationMotoristaDTO[]>([]);
  const [chamadosState, setChamadosState] = useState<IChamado[]>();

  const [center, setCenter] = useState<
    google.maps.LatLng | google.maps.LatLngLiteral | undefined
  >();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_APY_GOOGLE_MAP as string,
  });

  useLayoutEffect(() => {
    fetchDrivers();

    setCenter({
      lat: Number(location?.coords.latitude),
      lng: Number(location?.coords.longitude),
    });
  }, [location]);

  useEffect(() => {
    if (!chamados) return;
    setChamadosState(chamados);
  }, []);

  const fetchDrivers = async () => {
    const motoristas = await LocationMotoristasService.getMotoristas();
    setMotoristas(motoristas);
  };

  socket.on("new-chamado", (data: IChamado) => {
    if (!data) return;

    setCenter({
      lat: Number(data?.localizacao.latitude),
      lng: Number(data?.localizacao.longitude),
    });
    ativarNotificacao(
      "Novo Chamado Adicionado",
      `Novo chamado em ${data.localizacao.enderecoCompleto}`
    );
    setChamadosState((prevArray: any) => [...prevArray, data]);
  });

  const [map, setMap] = React.useState<google.maps.Map | null>();
  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <Container>
      {
        <GoogleMap
          mapContainerStyle={{
            ...containerStyle,
          }}
          options={{
            scrollwheel: true,
            gestureHandling: "greedy",
          }}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <>
            {motoristas &&
              motoristas.map(({ latitude, longitude, name, id }) => (
                <Marker
                  key={`${latitude}-${longitude}`} // Adicione uma chave única
                  position={{ lat: Number(latitude), lng: Number(longitude) }}
                  noClustererRedraw
                  icon={{
                    url: truckIcon.src,
                    scaledSize: new google.maps.Size(60, 50),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(20, 40),
                  }}
                  onClick={() => {
                    window.open(`/motoristas/${id}`);
                  }}
                  title={name}
                  label={{
                    text: name,
                    className: "marker",
                  }}
                />
              ))}
          </>

          <>
            {chamadosState &&
              chamadosState.map(
                ({
                  localizacao: { latitude, longitude },
                  createAt,
                  id,
                  status,
                }) => (
                  <Marker
                    key={id} // Adicione uma chave única
                    position={{ lat: Number(latitude), lng: Number(longitude) }}
                    noClustererRedraw
                    icon={{
                      url:
                        status === "Aguardando"
                          ? chamadowaintin.src
                          : chamadocomplete.src,
                      scaledSize: new google.maps.Size(60, 50),
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(20, 40),
                    }}
                    onClick={() => {
                      window.open(`/chamados/${id}`);
                    }}
                    title={TimeFormatter(createAt, true)}
                    label={{
                      text: TimeFormatter(createAt, true),
                      className: "marker",
                    }}
                  />
                )
              )}
          </>
        </GoogleMap>
      }
    </Container>
  ) : (
    <CustomCircularProgress />
  );
};

export default React.memo(ChamadosPainelMap);

const Container = styled(Box)`
  width: 100vw;
  height: 100vh;

  ${({ theme }) => theme.breakpoints.down("desktop")} {
    width: 100vw;
  }
`;
