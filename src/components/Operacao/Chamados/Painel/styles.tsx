import { Box, Button, Modal, styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const CustomModal = styled(Modal)``;

export const CustomDialogContainer = styled(Box)`
  background: #242529;
  position: absolute;
  top: 0;
  width: 100vw;
  display: flex;
  height: 100vh;
overflow-y: scroll;
`;

export const TableBox = styled(Box)`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const ChamadosModoPainel = styled(DataGrid)`
  width: 100%;
  color:${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  margin-top: 30px;
  .MuiDataGrid-columnHeaderTitle {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-weight: bold;

  }
  .MuiTablePagination-selectLabel {
    color:${({ theme }) => theme.palette.secondary.main};
    font-weight: bold;

  }
  fill {
    color:${({ theme }) => theme.palette.secondary.main};
  }
  svg {
    color:${({ theme }) => theme.palette.secondary.main};
  }
  .MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput {
    color:${({ theme }) => theme.palette.secondary.main};
  }
  .MuiSelect-select {
    color:${({ theme }) => theme.palette.secondary.main};
  }

  .MuiDataGrid-cellContent[title="Aguardando"] {
    background-color: #e61919;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .MuiDataGrid-cellContent[title="Aceito"] {
    background-color: #e5e619;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiDataGrid-cellContent[title="Em checklist"] {
    background-color: #e5e619;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiDataGrid-cellContent[title="Em rota"] {
    background-color: #1d831d;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MuiDataGrid-cellContent[title="Concluido"] {
    background-color: #1d831d;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
  ${({ theme }) => theme.breakpoints.down("desktop")} {
    margin-top: 300px;
  }


`;

export const CustomPrimaryButtonVoltar = styled(Box)`
margin-top: 30px;
display: flex;
justify-content: flex-end;
width: 100%;

`;

export const ButtonVoltar = styled(Button)`
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #303033;
  color: #fff;
  
 
  width: 200px;
  border-radius: 8px;
  &:disabled {
    color: #b8b9bb;
    background-color: #ededed;
  }

  
`;
