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
import MapIcon from "@mui/icons-material/Map";
import EditIcon from "@mui/icons-material/Edit";
import { Filters } from "@/src/shared/components/FIlters/chamados";
import TuneIcon from "@mui/icons-material/Tune";
import Link from "next/link";
import { Chips } from "@/src/shared/components/FIlters/chip";
import { DataFilter } from "@/src/shared/components/FIlters/data";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { useFilter } from "@/src/contexts/filterContext";
import { Painel } from "./Painel";

export const ChamadosComponent = () => {
  const { chamados, isLoading } = useFilter();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);
  const [openPainel, setOpenPainel] = React.useState(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "status", headerName: "Status", width: 120 },

    { field: "chamadorName", headerName: "Chamador", width: 150 },

    { field: "patioName", headerName: "Pátio", width: 400 },
    { field: "localizacaoName", headerName: "Local", width: 600 },

    { field: "createdAt", headerName: "Data/Hora", width: 200 },

    {
      field: "editar",
      type: "actions",
      headerName: "Editar",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Editar"
            onClick={() => {
              window.open(`/chamados/${id}`);
            }}
          />,
        ];
      },
    },
  ];

  const chips = [
    {
      value: "Aguardando",
      label: "Aguardando",
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
        rows={chamados ? chamados : []}
        columns={columns}
        getRowId={(chamado) => chamado.id}
        localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        onStateChange={(data) => {
          console.log("State changed", data);
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
                  copyStyles: false,
                  fileName: "motoristas.pdf",
                }}
              />
              <ActionButton
                startIcon={<AddIcon />}
                onClick={() => {
                  window.open(`/chamados/novo`);
                }}
              >
                Novo
              </ActionButton>

              <ActionButton
                startIcon={<TuneIcon />}
                onClick={() => setOpen(true)}
              >
                Mais Filtros
              </ActionButton>
              <ActionButton
                startIcon={<MapIcon />}
                onClick={() => setOpenPainel(true)}
              >
                Modo Painel
              </ActionButton>
            </CustomGridToolbarContainer>
          ),
        }}
        loading={isLoading}
        pageSizeOptions={[5, 50]}
      />
      <Painel
        openPainel={openPainel}
        setOpen={setOpenPainel}
        chamados={chamados}
      />
      <Filters open={open} setOpen={setOpen}>
        <DataFilter />
        <Chips chips={chips} />
      </Filters>
    </Container>
  );
};
