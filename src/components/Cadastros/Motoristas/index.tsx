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
import {
  GridActionsCellItem,
  GridColDef,
  GridPaginationModel,
  ptBR,
} from "@mui/x-data-grid";

import EditIcon from "@mui/icons-material/Edit";
import { Filters } from "@/src/shared/components/FIlters";
import TuneIcon from "@mui/icons-material/Tune";
import Link from "next/link";
import { Chips } from "@/src/shared/components/FIlters/chip";
import { DataFilter } from "@/src/shared/components/FIlters/data";
import motoristasService, {
  IMotoristaDto,
} from "@/src/services/motoristas/motoristas.service";
import useQueryParams from "@/src/hooks/usehandleQueryString";
import { TimeFormatter } from "@/src/utils/timeFormater";
import { useRouter } from "next/navigation";
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
export const MotoristasComponent = () => {
  const [open, setOpen] = React.useState(false);
  const [motoristas, setMotoristas] = React.useState<IMotoristaDto[]>([]);
  const [loading, setLoading] = React.useState(false);
  const { cleanSearch } = useQueryParams();

  const router = useRouter();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const motoristas = await motoristasService.getMotoristas(
        window.location.search
      );

      // Mapeie os motoristas e formate a propriedade 'createdAt'
      const data = motoristas.map((item) => ({
        ...item,
        createdAt: TimeFormatter(item.createdAt),
        cnh: item.Cnh.cnh,
      }));

      // Atualize o estado com os motoristas formatados
      setMotoristas(data);
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
    { field: "id", headerName: "ID", width: 20 },
    { field: "name", headerName: "Nome", width: 200 },
    { field: "celular", headerName: "Celular", width: 150 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "createdAt", headerName: "Criado em", width: 150 },
    { field: "xp", headerName: "Nível", width: 30 },
    { field: "statusTrabalho", headerName: "Status de Trabalho", width: 200 },
    { field: "cnh", headerName: "CNH", width: 300 },
    {
      field: "editar",
      type: "actions",
      headerName: "Editar",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <Link href={`/cadastros/motoristas/${id}`} key={id} target="_blank">
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
                  copyStyles: true,
                  fileName: "motoristas.pdf",
                }}
              />
              <ActionButton
                startIcon={<TuneIcon />}
                onClick={() => setOpen(true)}
              >
                Mais Filtros
              </ActionButton>
              <ActionButton
                startIcon={<FilterListOffIcon />}
                onClick={() => router.push("/cadastros/motoristas")}
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
        handleSearch={handleSearch}
        handleClear={handleClear}
      >
        <DataFilter />
        <Chips chips={chips} />
      </Filters>
    </Container>
  );
};
