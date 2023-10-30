import { css, styled } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

interface IProps {
  index: number;
  active: boolean;
}

export const CustomButtonGroup = styled(Button, {
  shouldForwardProp: (props) => props !== "index" && props !== "active",
})<IProps>`
  color: #3e4042;
  border-radius: 20px;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.palette.primary.main};
  }
  ${({ active, theme }) =>
    active &&
    css`
      color: white;
      background-color: ${theme.palette.primary.main};
    `}

  ${({ theme }) => theme.breakpoints.down("mobile")} {
    font-size: 12px;
  }
`;

export const CustomButtonGroupContainer = styled(ButtonGroup)`
  ${({ theme }) => theme.breakpoints.down("mobile")} {
    max-width: 350px;
  }
`;
