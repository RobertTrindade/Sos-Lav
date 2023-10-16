"use client";

import { FC, useEffect, useState } from "react";
import { Container, ExtraOptions, KnowMoreAndClose, Title } from "./styles";
import { IAnnounceBarDto } from "@/src/services/announceBar/announceBar.service";
import Link from "next/link";

interface IHeaderComponent {
  Announces: IAnnounceBarDto[];
}

export const AnnounceBarComponent: FC<IHeaderComponent> = ({ Announces }) => {
  const [counter, setCounter] = useState(0);
  const [slideInAnimation, setSlideInAnimation] = useState(true);
  const [slideOutAnimation, setSlideOutAnimation] = useState(false);

  useEffect(() => {
    if(!Announces) return
    const announceCount = Announces.length;

    const updateCounter = () => {
      setSlideInAnimation(false); // Desativar animação de entrada
      setSlideOutAnimation(true); // Ativar animação de saída

      setTimeout(() => {
        setCounter((prevCounter) => (prevCounter + 1) % announceCount);
        setSlideInAnimation(true); // Ativar animação de entrada novamente
        setSlideOutAnimation(false); // Desativar animação de saída
      }, 500); // Tempo de espera antes de atualizar o contador
    };

    const intervalId = setInterval(updateCounter, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [Announces]);

  const closeAnnounceBarComponent = () => {
    const AnnounceBarComponent = document.getElementById(
      "AnnounceBarComponent"
    );
    if (AnnounceBarComponent) {
      AnnounceBarComponent.style.display = "none";
    }
  };

  return Announces &&  (
    <Container id="AnnounceBarComponent">
      <ExtraOptions
        key={counter}
        slideInAnimation={slideInAnimation}
        slideOutAnimation={slideOutAnimation}
      >
        <Title>{Announces[counter].message}</Title>
        <div className="options">
          <KnowMoreAndClose>
            <Link href={Announces[counter].link} target="_blanck">
              Saiba mais
            </Link>
          </KnowMoreAndClose>
          <KnowMoreAndClose onClick={() => closeAnnounceBarComponent()}>
            Fechar
          </KnowMoreAndClose>
        </div>
      </ExtraOptions>
    </Container>
  );
};
