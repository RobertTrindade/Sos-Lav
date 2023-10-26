"use client";

import { Container, CustomDataGrid } from "./styles";
import { IAnnounceBarDto } from "@/src/services/announceBar/announceBar.service";

import * as React from "react";
import { GridColDef } from "@mui/x-data-grid";

interface IGrid {
  Announces: IAnnounceBarDto[];
}
const columns: GridColDef[] = [

  { field: "message", headerName: "Mensagem", width: 600 },
  { field: "link", headerName: "Link", width: 300 },
  { field: "active", headerName: "Ativo", width: 130 },
];


export const AnnounceTablesComponent: React.FC<IGrid> = ({ Announces }) => {

  return (
    <Container>
      <CustomDataGrid
        rows={Announces}
        columns={columns}
        getRowId={(Announces) => Announces.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Container>
  );
};
