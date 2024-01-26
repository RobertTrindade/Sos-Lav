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

import { IMotoristaDto } from "../../../services/motoristas/motoristas.service";

import EditIcon from "@mui/icons-material/Edit";
import { Filters } from "@/src/shared/components/FIlters";
import TuneIcon from "@mui/icons-material/Tune";
import Link from "next/link";
import { DataFilter } from "@/src/shared/components/FIlters/data";

import useQueryParams from "@/src/hooks/usehandleQueryString";
import { TimeFormatter } from "@/src/utils/timeFormater";
import { useRouter } from "next/navigation";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { SearchTerm } from "@/src/shared/components/FIlters/searchTerm";
import motoristasService from "../../../services/motoristas/motoristas.service";

export const RelatorioMotoristaComponent = () => {
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
    { field: "patio", headerName: "patios", width: 150 },
    { field: "email", headerName: "Email", width: 300 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "createdAt", headerName: "Criado em", width: 150 },
    { field: "xp", headerName: "Nível", width: 30 },
    { field: "statusTrabalho", headerName: "Status de Trabalho", width: 200 },
    { field: "cnh", headerName: "CNH", width: 300 },

    // { field: "pa", headerName: "Pátio", width: 20 },
    // { field: "", headerName: "Ncv", width: 200 },
    // { field: "", headerName: "Placa", width: 150 },
    // { field: "", headerName: "Tipo de veículo", width: 300 },
    // { field: "", headerName: "Valor saída", width: 150 },
    // { field: "", headerName: "KM excedido Saída", width: 150 },
    // { field: "", headerName: "Valor excedido Saída", width: 30 },
    // { field: "", headerName: "Pedágio", width: 200 },
    // { field: "", headerName: "Desconto", width: 300 },
    // { field: "", headerName: "Extras", width: 300 },
    // { field: "", headerName: "Total a receber", width: 300 },
    // { field: "", headerName: "Pendencia", width: 300 },
    {
      field: "editar",
      type: "actions",
      headerName: "Editar",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <Link href={`/motoristas/${id}`} key={id} target="_blank">
            <GridActionsCellItem icon={<EditIcon />} label="Editar" />
          </Link>,
        ];
      },
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
              <CustomGridToolbarColumnsButton /> {/*botão coluna */}
              <CustomGridToolbarFilterButton /> {/*botão filtro */}
              <CustomGridToolbarDensitySelector /> {/*botão densidade */}
              <CustomGridToolbarExport
                printOptions={{
                  hideFooter: true,
                  hideToolbar: true,
                  copyStyles: true,
                  fileName: "FechamentoMotorista.pdf",
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
                onClick={() => router.push("/relatorio")}
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
        <DataFilter /> {/*FILTRO DATA */}
        <SearchTerm label={"Nome Motorista"} searchTarget="Nome Motorista" />
      </Filters>
    </Container>
  );
};
