import { CircularProgress, styled } from "@mui/material";

export const CustomCircularProgress = styled(CircularProgress)`
  color:${({ theme }) => theme.palette.secondary.main};
  width: 100px;
`;
