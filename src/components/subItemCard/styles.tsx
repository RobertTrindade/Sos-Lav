import { Box, Typography, styled } from "@mui/material";

export const Container = styled(Box)`
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  width: 200px;
  height: 200px;
  padding: 16px;

  display: flex;
  flex-direction: column;
`;

export const Content = styled(Box)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: center;
    .circle {
      width: 80px;
      height: 80px;
      background-color: ${({ theme }) => theme.palette.primary.main};
      border-radius: 100%;
      position: absolute;
      top: -40px;
      box-shadow: 0 0 50px ${({ theme }) => theme.palette.primary.main}; /* Brilho ao redor da div */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .body{
    display: flex;
    flex-direction: column;
    
    gap: 40px;
  }
`;

export const Title = styled(Typography)`
  margin-top: 40px;
  color: ${({ theme }) =>
    theme.palette.secondary.main}; /* Brilho ao redor da div */
  font-weight: bold;
  text-align: center;
  
`;
