"use client";
import { Box, Button, styled } from "@mui/material";
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 32px;
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
`;


export const CustomGridToolbarContainer = styled(GridToolbarContainer)`

width: 100%;
position: absolute;
top: -90px;
`


export const CustomGridToolbarExport= styled(GridToolbarExport)`
   border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;;
`

export const CustomGridToolbarColumnsButton= styled(GridToolbarColumnsButton)`
   border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const CustomGridToolbarFilterButton= styled(GridToolbarFilterButton)`
   border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const CustomGridToolbarDensitySelector= styled(GridToolbarDensitySelector)`
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 10px 40px;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`