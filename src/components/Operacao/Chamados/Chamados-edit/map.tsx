import React, { FC, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Box } from "@mui/system";
import { styled } from "@mui/material";
import { IChamado } from "@/src/services/chamados/chamados.service";

import chamadowaintin from "./chamadowaintin.svg";
import chamadocomplete from "./chamadocomplete.svg";
import motoIcom from "../Map/icon.svg";
import { socket } from "@/src/services/socket.io";
import { ILocationMotoristaDTO } from "@/src/services/location/location.service";

const containerStyle = {
  width: "100%",
  height: "700px",
};
export const ChamadoEditarMap: FC<{
  chamadoLocation: IChamado;
}> = ({ chamadoLocation }) => {
  const center = {
    lat: Number(chamadoLocation?.localizacao?.latitude),
    lng: Number(chamadoLocation?.localizacao?.longitude),
  };

  const [motoLocation, setMotoLocation] = useState({
    lat: 0,
    lng: 0,
    name: "",
  });

  useEffect(() => {
    if (!chamadoLocation?.Aceite?.length) return;
    setMotoLocation({
      lat: +chamadoLocation?.Aceite[0].Motoristas.latitude,
      lng: +chamadoLocation?.Aceite[0].Motoristas.longitude,
      name: chamadoLocation?.Aceite[0].Motoristas.name,
    });
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_APY_GOOGLE_MAP as string,
  });

  const [map, setMap] = React.useState<google.maps.Map | null>();

  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  socket.on("updated", (data: ILocationMotoristaDTO) => {
    // Encontrar o motorista pelo id
    if (chamadoLocation?.Aceite?.length) {
      setMotoLocation({
        lat: data.latitude,
        lng: data.longitude,
        name: chamadoLocation?.Aceite[0].Motoristas.name,
      });
      // Atualizar o estado
    }
  });

  const ReturnIcon = (status: string) => {
    if (status === "Em checklist") return chamadocomplete.src;

    return chamadowaintin.src;
  };

  return isLoaded && center ? (
    <Container>
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
          <Marker
            position={{ ...center }}
            noClustererRedraw
            icon={{
              url: ReturnIcon(chamadoLocation.status as string),
              scaledSize: new google.maps.Size(60, 50),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(20, 40),
            }}
          />

          {motoLocation && (
            <Marker
              position={{
                lat: motoLocation.lat,
                lng: motoLocation.lng,
              }}
              title={motoLocation.name}
              noClustererRedraw
              icon={{
                url: motoIcom.src,

                scaledSize: new google.maps.Size(60, 50),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(20, 40),
              }}
            />
          )}
        </>
      </GoogleMap>
    </Container>
  ) : (
    <></>
  );
};

export default React.memo(ChamadoEditarMap);

const Container = styled(Box)``;
