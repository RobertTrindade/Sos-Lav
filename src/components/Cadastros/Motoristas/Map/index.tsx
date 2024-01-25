import React, { FC } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { IMotoristaDto } from "@/src/services/motoristas/motoristas.service";
import { Box } from "@mui/system";
import { styled } from "@mui/material";

const containerStyle = {
  width: "700px",
  height: "700px",
};

export const MotoristaMap: FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  const center = {
    lat: Number(motorista.latitude),
    lng: Number(motorista.longitude),
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
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          <Marker
            position={{ ...center }}
            icon={motorista.imageUrl}
            title={motorista.name}
            noClustererRedraw
          />
        </>
      </GoogleMap>
    </Container>
  ) : (
    <></>
  );
};

export default React.memo(MotoristaMap);

const Container = styled(Box)`
`;
