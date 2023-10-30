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

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { DepoimentoCardComponent } from "@/src/shared/components/DepoimentosCard";

export interface IDepoimento {
  description: string;
  name: string;
  cliente: string;
  cidade: string;
}

interface IDepoimentosData {
  depoimentos: IDepoimento[];
}

export const DepoimentosHome: React.FC<IDepoimentosData> = ({
  depoimentos,
}) => {
  const Carrousel = useRef<HTMLDivElement>(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isStart, setIsStart] = useState(false);



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
        <Title>Leia o que as pessoas estão dizendo sobre os leilões do Grupo Carvalho.</Title>
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
          {depoimentos &&
            depoimentos.map((data, key) => (
              <DepoimentoCardComponent
                key={key}
                data={data}
                pos={
                  key === 0
                    ? "isStart"
                    : key === depoimentos.length - 1
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
