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

import useQueryParams from "@/src/hooks/usehandleQueryString";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { useRouter } from "next/navigation";
import patiosService, { IPatio } from "@/src/services/patios/patios.service";

export const PatiosComponent = () => {
  const [patios, setPatios] = React.useState<IPatio[]>();
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { cleanSearch, addTodayToqueryeParams } = useQueryParams();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const patios = await patiosService.listAll(window.location.search);
      const data = patios.map((item) => ({
        ...item,
        id: item?.id,
        nome: item?.nome,
        createdAt: dayjs(item.createdAt).format("DD/MM/YYYY HH:mm"),
        cidade: item?.cidade,
        telefone: item?.telefone,
        ativo: item?.ativo ? true : false,
      }));

      setPatios(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar patios:", error);
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
    { field: "nome", headerName: "Nome Patio", width: 200 },
    { field: "cidade", headerName: "Cidade", width: 400 },
    { field: "telefone", headerName: "Telefone", width: 400 },
    { field: "ativo", headerName: "Ativo", width: 400, 
      valueGetter: (params) => params.value ? 'sim' : 'não', // Converte true para 'sim' e false para 'não'
    },

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
              window.open(`/cadastros/patios/${id}`);
            }}
          />,
        ];
      },
    },
  ];

  React.useEffect(() => {
    addTodayToqueryeParams();
    handleSearch();
  }, []);
  return (
    <Container>
      <CustomDataGrid
        rows={patios ? patios : []}
        columns={columns}
        getRowId={(patio) => patio.id}
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
      </Filters>
    </Container>
  );
};
