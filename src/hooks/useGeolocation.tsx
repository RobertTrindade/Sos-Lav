import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation(position);
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError("Geolocalização não suportada pelo navegador");
      }
    };

    getLocation();
  }, []); // O array vazio assegura que a função só é executada uma vez, semelhante ao componentDidMount

  return { location, error };
};
