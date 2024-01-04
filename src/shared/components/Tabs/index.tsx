import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material";

interface IScrollableTabsButton {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  tabLabels: string[];
}

export const ScrollableTabsButtonAuto: React.FC<IScrollableTabsButton> = ({
  value,
  onChange,
  tabLabels,
}) => {
  return (
    tabLabels && (
      <CustomTabs
        value={value}
        onChange={onChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {tabLabels.map((label, index) => (
          <CustomTab key={label} label={label} value={index} />
        ))}
      </CustomTabs>
    )
  );
};

const CustomTabs = styled(Tabs)`
  .MuiButtonBase-root {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

const CustomTab = styled(Tab)`
  color: ${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  font-size: 15px;
`;
