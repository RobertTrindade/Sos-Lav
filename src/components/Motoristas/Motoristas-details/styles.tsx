"use client";
import {
  Badge,
  Box,
  CircularProgress,
  IconButton,
  Typography,
  css,
  keyframes,
  styled,
} from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 50px 32px;
`;

export const CustomIconButton = styled(IconButton)`
  border: 1px solid;
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  path {
    color: white;
    text-align: center;
    margin: 0 auto;
  }
`;

export const BackArea = styled(Box)`
  display: flex;
  gap: 40px;
  flex-direction: column;
  .actionArea {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
  }
  .ButtonArea {
    margin-left: 80px;
    gap: 20px;
    display: flex;
  }
`;

export const Title = styled(Typography)`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Loading = styled(Box)`
  display: flex;

  justify-content: center;
  align-items: center;
  margin-top: 300px;
`;

export const CustomCircularProgress = styled(CircularProgress)`
  color: white;
  width: 100px;
`;

const ripple = keyframes`
   0% {
    transform: scale(.8);
    opacity: 1;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
  `;

export const StyledBadge = styled(Badge, {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: string }>`
  .MuiBadge-badge {
    ${({ status }) =>
      status === "disponivel" &&
      css`
        background-color: #44b700;
        color: #44b700;
      `}

    ${({ status }) =>
      status === "ocupado" &&
      css`
        background-color: yellow;
        color: yellow;
      `}


    ${({ status }) =>
      status === "indisponivel" &&
      css`
        background-color: red;
        color: red;
      `}



    ::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      animation: ${ripple} 1.2s infinite ease-in-out;
      border: 1px solid black;
      content: '"';
    }
  }
`;
