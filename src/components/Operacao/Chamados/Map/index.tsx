"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import { Library } from "@googlemaps/js-api-loader";

import { Box } from "@mui/system";
import { styled } from "@mui/material";
import LocationMotoristasService, {
  ILocationMotoristaDTO,
} from "@/src/services/location/location.service";
import { CustomCircularProgress } from "@/src/shared/components/Spinner";
import { AutoCompleteBox } from "@/src/shared/components/step/styles";

import truckIcon from "./icon.svg";
import PatioIcon from "./PatioIcon.svg";

const containerStyle = {
  width: "100%",
  height: "100%",
};

import { useChamados } from "@/src/contexts/chamados";
import { socket } from "@/src/services/socket.io";

export const ChamadosMap = () => {
  const {
    location,
    error,
    selectedLocation,
    setSelectedLocation,
    setSelectedPlace,
    handleNewValue,
    patioWithCoods,
  } = useChamados();

  const [motoristas, setMotoristas] = useState<ILocationMotoristaDTO[]>([]);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete>();
  const [libraries] = useState<Library[]>(["places"]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_APY_GOOGLE_MAP as string,
    libraries,
  });

  useEffect(() => {
    FetchDrivers();
  }, []);
  const FetchDrivers = async () => {
    const motoristas = await LocationMotoristasService.getMotoristas();
    setMotoristas(motoristas);
  };

  socket.on("updated", (data: ILocationMotoristaDTO) => {
    // Encontrar o motorista pelo id
    const motoristaAtualizado = motoristas.find(
      (motorista) => motorista.id === data.id
    );

    if (motoristaAtualizado) {
      // Atualizar as coordenadas convertendo de string para number
      motoristaAtualizado.latitude = data.latitude;
      motoristaAtualizado.longitude = data.longitude;

      // Atualizar o estado
      setMotoristas([...motoristas]);
    }
  });

  const center = useMemo(() => {
    return {
      lat: Number(location?.coords.latitude),
      lng: Number(location?.coords.longitude),
    };
  }, [location]);

  const [map, setMap] = React.useState<google.maps.Map | null>();
  const onLoad = React.useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  const onAutocompleteLoad = (
    autocomplete: google.maps.places.Autocomplete
  ) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const selectedPlace = autocomplete!.getPlace();

      if (map !== null) {
        if (selectedPlace) {
          map!.panTo(selectedPlace?.geometry?.location as any);
          setSelectedLocation(selectedPlace?.geometry?.location as any);
          setSelectedPlace(selectedPlace);
        }
      }
    }
  };

  return isLoaded ? (
    <Container>
      {center && (
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
          onClick={(e) => {
            setSelectedLocation(e.latLng);
          }}
        >
          <AutoCompleteBox>
            <Autocomplete
              onLoad={onAutocompleteLoad}
              onPlaceChanged={onPlaceChanged}
            >
              <input type="text" placeholder="Busque por um lugar" />
            </Autocomplete>
          </AutoCompleteBox>
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
            {selectedLocation && (
              <Marker position={selectedLocation} noClustererRedraw />
            )}
            {patioWithCoods &&
              patioWithCoods.map(
                (item) =>
                  item.latitude &&
                  item.longitude && (
                    <Marker
                      position={{
                        lat: Number(item.latitude),
                        lng: Number(item.longitude),
                      }}
                      title={item.nome}
                      label={{
                        text: item.nome,
                        className: "marker",
                      }}
                      onClick={() => {
                        handleNewValue("patio", {
                          label: item.nome,
                          id: item.id,
                        });
                      }}
                      noClustererRedraw
                      key={item.id} // Adicione uma chave única
                      icon={{
                        url: PatioIcon.src,

                        scaledSize: new google.maps.Size(60, 50),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(20, 40),
                      }}
                    />
                  )
              )}
          </>
        </GoogleMap>
      )}
    </Container>
  ) : (
    <CustomCircularProgress />
  );
};

export default React.memo(ChamadosMap);

const Container = styled(Box)`
  width: 100%;
  height: 100%;
`;
