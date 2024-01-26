// export const GeneratorValues = (
//   selectedPlace: google.maps.places.PlaceResult | null | undefined
// ) => {


//   const estado = selectedPlace?.address_components?.find((value) =>
//     value.types.includes("administrative_area_level_1")
//   )?.long_name as string;

//   const uf = selectedPlace?.address_components?.find((value) =>
//     value.types.includes("administrative_area_level_1")
//   )?.short_name as string;

//   const municipio = selectedPlace?.address_components?.find((value) =>
//     value.types.includes("administrative_area_level_2")
//   )?.short_name as string;

//   const distrito =
//     selectedPlace?.address_components?.find((value) =>
//       value.types.includes("administrative_area_level_4")
//     )?.short_name ||
//     (selectedPlace?.address_components?.find((value) =>
//       value.types.includes("sublocality_level_1")
//     )?.short_name as string) ||
//     "";

//   const cep =
//     selectedPlace?.address_components?.find((value) =>
//       value.types.includes("postal_code")
//     )?.short_name || ("" as string);

//   const endereco = selectedPlace?.formatted_address as string;

//   return { estado, uf, municipio, distrito, cep, endereco };
// };
