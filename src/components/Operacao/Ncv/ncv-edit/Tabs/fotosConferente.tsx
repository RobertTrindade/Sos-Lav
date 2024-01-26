"use client";
import { IAvarias, INCVResponse } from "@/src/services/ncv/ncv.service";
import { CardContainer } from "../styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import {SwipeableTextMobileStepper} from "@/src/shared/components/Carousel";

export const FotosConferente: React.FC<{
  chamado: INCVResponse;
}> = ({ chamado }) => {
  return (
    chamado && (
      <CardContainer>
        {chamado.Avarias.map((item) => (
          <MediaCard key={item.id} data={item} />
        ))}
      </CardContainer>
    )
  );
};

const MediaCard: FC<{
  data: IAvarias;
}> = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: "500px",
        backgroundColor: "rgb(18, 18, 18)",
        width: "100%",
      }}
      elevation={4}
    >
      <SwipeableTextMobileStepper images={data.fotos} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={"bold"}
        >
          {data.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Apagar</Button>
        <Button size="small" >Visualizar</Button>
        <Button size="small" >Baixar</Button>

      </CardActions>
    </Card>
  );
};
