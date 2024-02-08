interface Coordinates {
  lat: number;
  lng: number;
}

export const generateDefaultCoordinates = (
  latitude?: number,
  longitude?: number
): Coordinates => {
  const defaultLat = -22.888481933656266;
  const defaultLng = -49.52175307151231;

  if (latitude && longitude !== undefined) {
    // Se latitude e longitude são fornecidas, retorna os valores fornecidos
    return { lat: latitude, lng: longitude };
  } else {
    // Caso contrário, gera valores aleatórios dentro do modelo
    const randomLat = defaultLat + (Math.random() - 0.9) * 0.8; // Ajuste o intervalo conforme necessário
    const randomLng = defaultLng + (Math.random() - 0.6) * 0.6; // Ajuste o intervalo conforme necessário

    return {
      lat: latitude || randomLat,
      lng: longitude || randomLng,
    };
  }
};

// Exemplo de uso
const item = {
  // latitude: 123, // Descomente para testar com valores fornecidos
  // longitude: 456, // Descomente para testar com valores fornecidos
};
