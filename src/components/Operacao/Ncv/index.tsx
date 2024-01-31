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
import dayjs from "dayjs";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import { useRouter } from "next/navigation";

import useQueryParams from "@/src/hooks/usehandleQueryString";
import ncvService, { INCVResponse } from "@/src/services/ncv/ncv.service";
import { SearchTerm } from "@/src/shared/components/FIlters/searchTerm";
import { AutoCompleteContainer } from "../Usuarios/Usuarios-novo/styles";
import { BoxInput, Label } from "./ncv-edit/styles";
import { AutoCompleteComponentMultiple, INewValue } from "@/src/shared/components/AutoCompleteMultiple";
import { AutoCompleteFilterMultiple } from "@/src/shared/components/FIlters/autoCompleteMultiple";
import patiosService from "@/src/services/patios/patios.service";

export const NcvComponent = () => {
  const [chamados, setChamados] = React.useState<INCVResponse[]>();
  const router = useRouter();
  const [value, setValue] = React.useState("");
  const [patios, setPatios] = React.useState<INewValue[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { cleanSearch } = useQueryParams();

  React.useEffect(() => {
    handleSearchPatios();
  }, []);

  const handleSearchPatios = async () => {
    const res = await patiosService.getPatios();
    const patios = res.map((item) => ({
      id: item.id,
      label: item.nome,
    }));
    setPatios(patios);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      const chamados = await ncvService.listAll(window.location.search);
      const data = chamados.map((item) => ({
        ...item,
        createdAt: dayjs(item.created_at as string).format("DD/MM/YYYY HH:mm"),
        patioName: item?.Chamado?.patio.nome,
        status: item?.status,
        tipoApreensao: item?.Chamado.tipoApreensao,
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
    { field: "id", headerName: "NCV", width: 10 },
    { field: "marca", headerName: "Marca", width: 90 },

    { field: "modelo", headerName: "Modelo", width: 160 },
    { field: "placa", headerName: "Placa", width: 90 },

    { field: "patioName", headerName: "Pátio", width: 300 },
    { field: "status", headerName: "Status", width: 140 },
    { field: "tipoApreensao", headerName: "Tipo", width: 140 },

    { field: "createdAt", headerName: "Apreensão", width: 200 },
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
              window.open(`/operacao/ncv/${id}`);
            }}
          />,
        ];
      },
    },
  ];

  const chips = [
    {
      value: "APREENDIDO",
      label: "Apreendido",
    },
    {
      value: "LIBERADO",
      label: "Liberado",
    },

    {
      value: "LEBERADO_ARR",
      label: "Liberado Arr",
    },

    {
      value: "INATIVO",
      label: "Inativo",
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
                startIcon={<TuneIcon />}
                onClick={() => setOpen(true)}
              >
                Mais Filtros
              </ActionButton>
              <ActionButton
                startIcon={<FilterListOffIcon />}
                onClick={() => router.push("/operacao/ncv")}
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
        <SearchTerm label={"Ncv"} searchTarget="ncv" />
        <SearchTerm label={"Placa"} searchTarget="placa" />
        <AutoCompleteContainer>
          <AutoCompleteFilterMultiple
            options={patios && patios}
            label="Pátios"
            searchTarget="patios"
          />
      </AutoCompleteContainer>
      </Filters>
    </Container>
  );
};