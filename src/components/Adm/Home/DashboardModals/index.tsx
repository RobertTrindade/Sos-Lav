"use client";

import { Container, CustomPaper, Title, Value } from "./styles";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import GavelIcon from "@mui/icons-material/Gavel";
import { useTheme } from "@mui/material";
export const DashboardModalsComponent = () => {
  const theme = useTheme();
  const paperOptions = [
    {
      title: "Usuários",
      icon: <PersonAddIcon color="primary" fontSize="large" />,
      value: 100,
      color: theme.palette.primary.main,
    },
    {
      title: "Lotes Vendidos",
      icon: (
        <DataThresholdingIcon
          color="primary"
          fontSize="large"
          className="lotes"
        />
      ),
      value: 200,
      color: theme.palette.primary.main,
    },

    {
      title: "Leilões Realizados",
      icon: <GavelIcon color="primary" fontSize="large" />,
      value: 300,
      color: theme.palette.primary.main,
    },
  ];

  return (
    <Container>
      {paperOptions &&
        paperOptions.map((item, key) => (
          <CustomPaper
            elevation={3}
            square={false}
            key={key}
            color={item.color}
          >
            <div className="icon">{item.icon}</div>
            <div className="values">
              <Value>{item.value}</Value>
              <Title>{item.title}</Title>
            </div>
          </CustomPaper>
        ))}
    </Container>
  );
};
