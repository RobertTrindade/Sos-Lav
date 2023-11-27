import { Box, Modal, styled } from "@mui/material";

export const CustomModal = styled(Modal)``;

export const CustomDialogContainer = styled(Box)`
  height: 100vh;

  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .marker {
    color: black !important;
    font-weight: bold !important;
    font-family: "Poppins";
    position: absolute;
    top: 0 !important;
    left: 0 !important;
    margin-left: -50px;
    word-break: break-all !important;
    max-width: 120px !important;
    white-space: nowrap; /* Impede que o texto quebre em várias linhas */
    overflow: hidden; /* Oculta o conteúdo excedente que não cabe */
    text-overflow: ellipsis; /* Adiciona reticências (...) para indicar que há mais texto */
  }


  ${({ theme }) => theme.breakpoints.down("tablet")} {

    
   

  }
`;
