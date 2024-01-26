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
import usuariosService, {
  IUsuariosDto,
} from "@/src/services/usuarios/usuarios.service";

export const UsuariosComponent = () => {
  const [chamados, setChamados] = React.useState<IUsuariosDto[]>([]);
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { cleanSearch } = useQueryParams();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const usuarios = await usuariosService.getAll(window.location.search);

      const mapped = usuarios.map((user) => ({
        ...user,
        cargo: user?.Cargo?.description,
        dataCriacao: dayjs(user.createdAt as string).format("DD/MM/YYYY"),
      }));
      setChamados(mapped);
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
    { field: "name", headerName: "Nome", width: 200 },
    { field: "email", headerName: "E-mail", width: 400 },
    { field: "cargo", headerName: "Cargo", width: 400 },
    { field: "dataCriacao", headerName: "Data Criação", width: 400 },

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
              window.open(`/cadastros/usuarios/${id}`);
            }}
          />,
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
                  window.open(`/cadastros/usuarios/novo`);
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
                onClick={() => router.push("/cadastros/usuarios")}
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
