import * as React from "react";
import { ButtonVoltar, ChamadosModoPainel, CustomDialogContainer, CustomModal, CustomPrimaryButtonVoltar, TableBox } from "./styles";
import chamadosService, {
  IChamado,
} from "@/src/services/chamados/chamados.service";
import { CustomDataGrid } from "../styles";
import { GridColDef, ptBR } from "@mui/x-data-grid";
import { socket } from "@/src/services/socket.io";
import dayjs from "dayjs";
import { ativarNotificacao } from "@/src/utils/showPushNotification";

interface IPainelChamados {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openPainel: boolean;
}

export const Painel: React.FC<IPainelChamados> = ({ openPainel, setOpen }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [chamados, setChamados] = React.useState<IChamado[]>();

  const handleClose = () => {
    setOpen(false);
  };
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "status", headerName: "Status", width: 260 },

    { field: "chamadorName", headerName: "Chamador", width: 160 },
    { field: "motoristaName", headerName: "Motorista", width: 160 },

    { field: "patioName", headerName: "Pátio", width: 200 },
    { field: "localizacaoName", headerName: "Local", width: 200 },

    { field: "createdAt", headerName: "Data/hora", width: 200 },

    { field: "dataHoraAceite", headerName: "Data/hora Aceite", width: 200 },

    { field: "km", headerName: "Km estimado", width: 200 },
    { field: "tempoEstimadoo", headerName: "Tempo estimado", width: 200 },
  ];

  React.useEffect(() => {
    socket.on("new-chamado", async (item: IChamado) => {
      setLoading(true);

      const chamados = await chamadosService.listAll(window.location.search);
      const data = chamados.map((item) => ({
        ...item,
        createdAt: dayjs(item.createAt).format("DD/MM/YYYY HH:mm"),
        patioName: item.patio.nome,
        chamadorName: item.chamador.name,
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

      ativarNotificacao(
        "Novo Chamado Adicionado",
        `Novo chamado em ${item.localizacao.enderecoCompleto}`
      );

      setLoading(false);
    });
    

    return () => {
      socket.off("new-chamado");
    };
  }, []);

  React.useEffect(() => {
    socket.on("update-chamado", async (data: IChamado) => {
      if (!data) return;
      setLoading(true);

      ativarNotificacao("Chamado Atualizado", `Chamado ${data.id} atualizado: status ${data.status}`);

      const chamados = await chamadosService.listAll(window.location.search);
      const datas = chamados.map((item) => ({
        ...item,
        createdAt: dayjs(item.createAt).format("DD/MM/YYYY HH:mm"),
        patioName: item.patio.nome,
        chamadorName: item.chamador.name,
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

      setChamados(datas);

      setLoading(false);
    });
    return () => {
      socket.off("new-chamado");
    };
  }, []);
  
  const handleSair = () => {
    // Lógica para lidar com a ação de sair do modo painel
    // Pode ser necessário fazer alguma limpeza ou navegação aqui
    setOpen(false);
  };

  return (
    <CustomModal
    open={openPainel}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >   
  
    <CustomDialogContainer>
      
      
      <TableBox>
        
      <CustomPrimaryButtonVoltar>
            <ButtonVoltar
            variant="contained"
            color="primary"
            onClick={handleSair}
          >
          Voltar
          </ButtonVoltar>
        </CustomPrimaryButtonVoltar>
       
          <ChamadosModoPainel
            rows={chamados ? chamados : []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  page: 1,
                  pageSize: 100,
                },
              },
            }}
            getRowId={(chamado) => chamado.id}
            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
            rowSelection={false}
            loading={loading}
            pageSizeOptions={[5, 100]}
          />{" "}
        </TableBox>
      </CustomDialogContainer>
    </CustomModal>
  );
};
