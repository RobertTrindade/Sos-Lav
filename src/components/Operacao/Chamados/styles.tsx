"use client";
import { Box, Button, styled } from "@mui/material";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  

  ${({ theme }) => theme.breakpoints.up("laptop")} {
    padding: 0px 32px;
  }

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 0px 16px;
  }
`;

export const ActionButton = styled(Button)`
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  overflow: hidden; /* Oculta o conteúdo excedente que não cabe */
  text-overflow: ellipsis; /* Adiciona reticências (...) para indicar que há mais texto */
  
  
`;

export const CustomDataGrid = styled(DataGrid)`
  width: 100%;
  color:${({ theme }) => theme.palette.secondary.main};
  font-weight: bold;
  top: 100px;

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


  ${({ theme }) => theme.breakpoints.down("desktop")} {
    margin-top: 300px;
  }

 

`;

export const CustomGridToolbarContainer = styled(GridToolbarContainer)`
  width: 100%;
  position: absolute;
  top: -120px; //posição dos botões
  

  ${({ theme }) => theme.breakpoints.down("desktop")} {
    display: flex;
    top: -300px;

    justify-content: space-between;
    button {
      flex-basis: calc(
        50% - 30px
      ); /* Adjust the width and margin according to your design */
      margin: 4px; /* Adjust the margin according to your design */
    }
  }
`;

export const CustomGridToolbarExport = styled(GridToolbarExport)`
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  
  line-height: normal;
`;

export const CustomGridToolbarColumnsButton = styled(GridToolbarColumnsButton)`
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomGridToolbarFilterButton = styled(GridToolbarFilterButton)`
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CustomGridToolbarDensitySelector = styled(
  GridToolbarDensitySelector
)`
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const chipsContainer = styled(Box)`
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;