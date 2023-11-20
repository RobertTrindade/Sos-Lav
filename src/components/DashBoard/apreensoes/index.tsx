"use client";
import {
  ApreensoesContainer,
  ApreensoesContainerTitle,
  CustomLineChart,
} from "../styles";

export const Apreensoes = () => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const uData = Array.from({ length: 12 }, (_, i) => (i + 1) * 1000);
  const pData = Array.from({ length: 12 }, (_, i) => (i + 1) * 800);
  const cData = Array.from({ length: 12 }, (_, i) => (i + 1) * 300);
  const iData = Array.from({ length: 12 }, (_, i) => (i + 1) * 100);

  const xLabels = months.slice(0, 12);

  return (
    <ApreensoesContainer>
      <ApreensoesContainerTitle>
        Top 10 Apreenções por Pátio
      </ApreensoesContainerTitle>
      <CustomLineChart
        height={300}
        series={[
          { data: pData, label: "pv" },
          { data: uData, label: "uv" },
          { data: cData, label: "pt" },
          { data: iData, label: "pa" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
      />
    </ApreensoesContainer>
  );
};
