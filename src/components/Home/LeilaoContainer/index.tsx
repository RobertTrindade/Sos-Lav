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

export const LeilaoContainerComponent: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const Carrousel = useRef<HTMLDivElement>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const leiloes: ILeilaoCardComponent["data"][] = [
    {
      name: "Leilao Ubatuba",
      description: `
          Bem-vindo ao Leilão Carvalho, onde você terá a oportunidade de
          explorar uma incrível seleção de veículos de alta qualidade
      `,
      type: "Leilão Detran",
      lotes: 12,
      lotes_leiloados: 12,
      views: 12,
      date: "26/10",
      time: "10:00",
      status: "Encerrado",
      id: "1",
    },
    {
      name: "Leilao São Paulo",
      description: `
          Junte-se a nós no Leilão São Paulo para uma grande variedade de
          arte e antiguidades exclusivas.
      `,
      type: "Leilão de Arte",
      lotes: 25,
      lotes_leiloados: 18,
      views: 32,
      date: "30/10",
      time: "14:00",
      status: "Em andamento",
      id: "2",
    },
    {
      name: "Leilao Rio de Janeiro",
      description: `
          Bem-vindo ao Leilão Rio de Janeiro, onde você pode encontrar
          uma seleção de itens de colecionador raros e valiosos.
      `,
      type: "Leilão de Colecionáveis",
      lotes: 8,
      lotes_leiloados: 4,
      views: 8,
      date: "28/10",
      time: "12:00",
      status: "Próximo",
      id: "3",
    },
    {
      name: "Leilao Brasília",
      description: `
          Participe do Leilão Brasília e descubra uma gama de móveis e
          decorações exclusivas para sua casa.
      `,
      type: "Leilão de Móveis",
      lotes: 15,
      lotes_leiloados: 9,
      views: 20,
      date: "27/10",
      time: "11:00",
      status: "Em andamento",
      id: "4",
    },
  ];

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
          {leiloes.map((data, key) => (
            <LeilaoCardComponent
              key={key}
              data={data}
              pos={
                key === 0
                  ? "isStart"
                  : key === leiloes.length - 1
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
