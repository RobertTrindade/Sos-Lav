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
  color: white;
  font-weight: bold;
  margin-top: 100px;

  .MuiDataGrid-columnHeaderTitle {
    color: #999a9a;
    font-weight: bold;

  }
  .MuiTablePagination-selectLabel {
    color: white;
    font-weight: bold;

  }

  fill {
    color: white;
  }
  svg {
    color: white;
  }
  .MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput {
    color: white;
  }
  .MuiSelect-select {
    color: white;
  }


  ${({ theme }) => theme.breakpoints.down("desktop")} {
    margin-top: 300px;
  }


`;

export const CustomGridToolbarContainer = styled(GridToolbarContainer)`
  width: 100%;
  position: absolute;
  top: -90px;

 

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
