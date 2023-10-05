"use client";
import { Container } from "@/src/components/Adm/styles";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface IDataChart {
  Mês: string;
  "Novos Usuários": number;
  "Lotes Vendidos": number;
  "Leilões Realizados": number;
}

const months = [
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];

export const DashboardChartComponent = () => {
  const [data, setData] = useState<IDataChart[]>([]);
  const theme = useTheme();

  useEffect(() => {
    const randomData = Array.from({ length: 13 }, (_, i) => ({
      Mês: months[i],
      "Novos Usuários": Math.floor(Math.random() * 500) + 100,
      "Lotes Vendidos": Math.floor(Math.random() * 500) + 100,
      "Leilões Realizados": Math.floor(Math.random() * 3000) + 1000,
    }));

    setData(randomData);
  }, []);

  return (
    data.length > 0 && (
      <Container>
        <LineChart width={900} height={300} data={data}>
          <XAxis dataKey="Mês" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <YAxis yAxisId={0} />
          <YAxis yAxisId={1} />
          <YAxis yAxisId={2} />
          <Line
            type="monotone"
            dataKey="Novos Usuários"
            stroke={theme.palette.primary.main}
            yAxisId={0}
          />
          <Line
            type="monotone"
            dataKey="Lotes Vendidos"
            stroke="#387908"
            yAxisId={1}
          />
          <Line
            type="monotone"
            dataKey="Leilões Realizados"
            stroke="red"
            yAxisId={2}
          />
        </LineChart>
      </Container>
    )
  );
};
