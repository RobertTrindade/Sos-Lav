"use client";

import * as React from "react";
import {
  CustomDataGrid,
  Container,
  CustomGridToolbarColumnsButton,
  CustomGridToolbarFilterButton,
  CustomGridToolbarDensitySelector,
  CustomGridToolbarContainer,
  ActionButton,
  CustomGridToolbarExport,
} from "./styles";
import { GridActionsCellItem, GridColDef, ptBR } from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import { Filters } from "@/src/shared/components/FIlters";
import TuneIcon from "@mui/icons-material/Tune";
import Link from "next/link";
import { Chips } from "@/src/shared/components/FIlters/chip";
import { DataFilter } from "@/src/shared/components/FIlters/data";
import { useFilter } from "@/src/contexts/filterContext";

export const MotoristasComponent = () => {
  const { motoristas, isLoading } = useFilter();

  const [open, setOpen] = React.useState(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 30 },
    { field: "name", headerName: "Nome", width: 250 },
    { field: "celular", headerName: "Celular", width: 150 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "createdAt", headerName: "Criado em", width: 200 },
    { field: "xp", headerName: "Nível", width: 30 },
    { field: "statusTrabalho", headerName: "Status de Trabalho", width: 200 },
    { field: "cnhId", headerName: "CNH", width: 150 },
    {
      field: "editar",
      type: "actions",
      headerName: "Editar",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <Link href={`/motoristas/${id}`}>
            <GridActionsCellItem icon={<EditIcon />} label="Editar" />
          </Link>,
        ];
      },
    },
  ];

  const chips = [
    {
      value: "ativo",
      label: "Ativo",
    },

    {
      value: "inativo",
      label: "Inativo",
    },
    {
      value: "pendente",
      label: "Pendente",
    },
  ];

  return (
    <Container>
      <CustomDataGrid
        rows={motoristas ? motoristas : []}
        columns={columns}
        getRowId={(motoristas) => motoristas.id}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        rowSelection={false}
        slots={{
          toolbar: () => (
            <CustomGridToolbarContainer>
              <CustomGridToolbarColumnsButton />
              <CustomGridToolbarFilterButton />
              <CustomGridToolbarDensitySelector />
              <CustomGridToolbarExport
                printOptions={{
                  hideFooter: true,
                  hideToolbar: true,
                  copyStyles:true,
                  fileName:"motoristas.pdf"
                }}
              />
              <ActionButton
                startIcon={<TuneIcon />}
                onClick={() => setOpen(true)}
              >
                Mais Filtros
              </ActionButton>
            </CustomGridToolbarContainer>
          ),
        }}
        loading={isLoading}
        pageSizeOptions={[5, 50]}
      />
      <Filters open={open} setOpen={setOpen}>
        <DataFilter />
        <Chips chips={chips} />
      </Filters>
    </Container>
  );
};
