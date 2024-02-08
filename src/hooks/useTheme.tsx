import { useTheme } from "@mui/material";

export const useThemeHook = () => {
  const { palette } = useTheme();

  return { palette };
};
