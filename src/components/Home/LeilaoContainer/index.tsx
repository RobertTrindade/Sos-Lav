"use client";
import { useRef, useState, MouseEvent, useEffect, Fragment } from "react";
import {
  Container,
  LeilaoContainer,
  Title,
  Main,
  PrevIconButton,
  NextIconButton,
  ContainerLeiloes,
  BlurEffect,
} from "./styles";
import { BasicButtonGroup } from "./tab";
import {
  ILeilaoCardComponent,
  LeilaoCardComponent,
} from "@/src/shared/components/LeilaoCard";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface ILeiloes {
  name: string;
  description: string;
  type: string;
  lotes: number;
  lotes_leiloados: number;
  views: number;
  date: string;
  time: string;
  status: "Em andamento" | "Encerrado" | "Próximo";
  id: string;
}

interface ILeilaoContainerComponent {
  Leiloes: ILeiloes[];
}

export const LeilaoContainerComponent: React.FC<ILeilaoContainerComponent> = ({
  Leiloes,
}) => {
  const [value, setValue] = useState<number>(0);
  const Carrousel = useRef<HTMLDivElement>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const description: string[] = [
    "Todos os Leilões",
    "Leilões Abertos",
    "Leilões Próximos",
    "Leilões Fechados",
    "Leilões Exclusivo Grupo Carvalho",
  ];

  const handleLeftClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (Carrousel.current) {
      Carrousel.current.scrollLeft -= Carrousel.current.offsetWidth;
    }
  };

  const handleRightClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (Carrousel.current) {
      Carrousel.current.scrollLeft += Carrousel.current.offsetWidth;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsEnd(true);
          } else {
            setIsEnd(false);
          }
        });
      },
      { threshold: 1 }
    );

    const end = document.querySelector("#isEnd");

    if (end) {
      observer.observe(end);
    }

    return () => {
      if (end) {
        observer.unobserve(end);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStart(true);
          } else {
            setIsStart(false);
          }
        });
      },
      { threshold: 1 }
    );

    const start = document.querySelector("#isStart");

    if (start) {
      observer.observe(start);
    }

    return () => {
      if (start) {
        observer.unobserve(start);
      }
    };
  }, []);
  return (
    <Container>
      <Main>
        <Title>{description[value]}</Title>
        <BasicButtonGroup value={value} setValue={setValue} />
      </Main>

      <LeilaoContainer>
        <PrevIconButton
          size="large"
          onClick={handleLeftClick}
          disabled={isStart}
        >
          <KeyboardArrowLeftIcon />
        </PrevIconButton>
        <ContainerLeiloes ref={Carrousel}>
          {Leiloes &&
            Leiloes.map((data, key) => (
              <LeilaoCardComponent
                key={key}
                data={data}
                pos={
                  key === 0
                    ? "isStart"
                    : key === Leiloes.length - 1
                    ? "isEnd"
                    : ""
                }
              />
            ))}
        </ContainerLeiloes>

        <NextIconButton
          size="large"
          onClick={handleRightClick}
          disabled={isEnd}
        >
          <KeyboardArrowRightIcon />
        </NextIconButton>
        <BlurEffect />
      </LeilaoContainer>
    </Container>
  );
};
