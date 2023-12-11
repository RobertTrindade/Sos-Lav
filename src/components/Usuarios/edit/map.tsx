import React, { FC } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Box } from "@mui/system";
import { styled } from "@mui/material";
import { IChamado } from "@/src/services/chamados/chamados.service";

import chamadowaintin from "./chamadowaintin.svg";
import chamadocomplete from "./chamadocomplete.svg";

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

  return isLoaded ? (
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
              url:
              chamadoLocation?.status === "Aguardando"
                  ? chamadowaintin.src
                  : chamadocomplete.src,
              scaledSize: new google.maps.Size(60, 50),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(20, 40),
            }}
          />

        
        </>
      </GoogleMap>
    </Container>
  ) : (
    <></>
  );
};

export default React.memo(ChamadoEditarMap);

const Container = styled(Box)``;
