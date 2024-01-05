import { INCVResponse } from "@/src/services/ncv/ncv.service";
import { TimeLineContainer } from "../styles";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import * as React from "react";
import dayjs from "dayjs";

export const NcvTimeline: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  return (
    chamado && (
      <TimeLineContainer>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="secondary">
              {dayjs(chamado.Chamado.createAt).format("DD/MM/YYYY HH:mm")}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Chamado foi criado por {chamado?.Chamado?.chamador?.name}{" "}
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary">
              {dayjs(chamado!.Chamado!.Aceite![0].aceiteHora).format(
                "DD/MM/YYYY HH:mm"
              )}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Chamado foi aceito por{" "}
              {chamado!.Chamado!.Aceite![0].Motoristas?.name}{" "}
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary">
              {dayjs(chamado!.Apreensao.created_at).format("DD/MM/YYYY HH:mm")}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Check list foi finalizado</TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent color="secondary">
              {dayjs(chamado!.created_at).format("DD/MM/YYYY HH:mm")}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Ncv foi criado</TimelineContent>
          </TimelineItem>
        </Timeline>
      </TimeLineContainer>
    )
  );
};
