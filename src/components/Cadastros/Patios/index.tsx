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
import { Chips } from "@/src/shared/components/FIlters/chip";
import { DataFilter } from "@/src/shared/components/FIlters/data";
import AddIcon from "@mui/icons-material/Add";
import dayjs from "dayjs";
import chamadosService, {
  IChamado,
} from "@/src/services/chamados/chamados.service";
import useQueryParams from "@/src/hooks/usehandleQueryString";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { useRouter } from "next/navigation";

export const PatiosComponent = () => {
  const [chamados, setChamados] = React.useState<IChamado[]>();
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openPainel, setOpenPainel] = React.useState(false);
  const { cleanSearch } = useQueryParams();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const chamados = await chamadosService.listAll(window.location.search);
      const data = chamados.map((item) => ({
        ...item,
        createdAt: dayjs(item.createAt).format("DD/MM/YYYY HH:mm"),
        patioName: item?.patio?.nome,
        chamadorName: item?.chamador?.name,
        localizacaoName: item?.localizacao?.enderecoCompleto,
        motoristaName: item.Aceite?.length
          ? item!.Aceite![0].Motoristas.name
          : "",

        dataHoraAceite: item.Aceite?.length
          ? dayjs(item!.Aceite![0].aceiteHora).format("DD/MM/YYYY HH:mm")
          : "",
        km: item.Aceite?.length ? item!.Aceite![0].kmsEstimado : "",
        tempoEstimadoo: item.Aceite?.length
          ? item!.Aceite![0].tempoEstimado
          : "",
      }));

      // Atualize o estad o com os motoristas formatados

      setChamados(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar motoristas:", error);
      // Lide com o erro conforme necessário
      setLoading(false);
    }
  };

  const handleClear = async () => {
    try {
      cleanSearch();
    } catch (error) {
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "status", headerName: "Status", width: 150 },

    { field: "chamadorName", headerName: "Chamador", width: 160 },
    { field: "motoristaName", headerName: "Motorista", width: 160 },

    { field: "patioName", headerName: "Pátio", width: 200 },
    { field: "localizacaoName", headerName: "Local", width: 300 },

    { field: "createdAt", headerName: "Data/hora", width: 200 },

    { field: "dataHoraAceite", headerName: "Data/hora Aceite", width: 200 },

    { field: "km", headerName: "Km estimado", width: 200 },
    { field: "tempoEstimadoo", headerName: "Tempo estimado", width: 200 },

    {
      field: "editar",
      type: "actions",
      headerName: "Editar",
      width: 70,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Editar"
            key={id}
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
            paginationModel: {
              page: 1,
              pageSize: 50,
            },
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
                  copyStyles: false,
                  fileName: "motoristas.pdf",
                }}
              />
              <ActionButton
                startIcon={<AddIcon />}
                onClick={() => {
                  window.open(`/cadastros/patios/novo`);
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
                startIcon={<FilterListOffIcon />}
                onClick={() => router.push("/cadastros/patios")}
              >
                Limpar Filtros
              </ActionButton>
            </CustomGridToolbarContainer>
          ),
        }}
        loading={loading}
        pageSizeOptions={[5, 50]}
      />

      <Filters
        open={open}
        setOpen={setOpen}
        handleClear={handleClear}
        handleSearch={handleSearch}
      >
        <DataFilter />
        <Chips chips={chips} />
      </Filters>
    </Container>
  );
};
