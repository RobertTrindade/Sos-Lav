import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface IScrollableTabsButtonAuto {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const ScrollableTabsButtonAuto: React.FC<IScrollableTabsButtonAuto> = ({
  value,
  setValue,
}) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Próximos" />
        <Tab label="Abertos" />
        <Tab label="Fechados" />
      </Tabs>
    </Box>
  );
};
