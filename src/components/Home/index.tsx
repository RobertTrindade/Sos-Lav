import { BannerSliderComponent } from "./BannerSlider";
import { DepoimentosHome } from "./Depoimentos";
import { HomeCategoriesComponent } from "./HomeCategories";
import { LeilaoContainerComponent } from "./LeilaoContainer";
import { Container, Main } from "./styles";
import { ILeilaoCardComponent } from "@/src/shared/components/LeilaoCard";

export const HomeComponent = () => {
  const Banners = [
    {
      imgUrl: `img2.jpg`,
      link: "link",
    },

    {
      imgUrl: `img2.jpg`,
      link: "link",
    },
    {
      imgUrl: `img3.jpg`,
      link: "link",
    },
  ];

  const Categories = [
    {
      bgColor: "#5ED778",
      icon: `tec.svg`,
      title: "Tecnologia",
    },
    {
      bgColor: "#EF5F63",
      icon: `car.svg`,
      title: `Carros & Motos`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
    {
      bgColor: "#CD5ED7",
      icon: `bus.svg`,
      title: `Testes`,
    },
  ];

  const Leiloes: ILeilaoCardComponent["data"][] = [
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

  const Depoimentos = [
    {
      description:
        "A equipe do Grupo Carvalho Leilões fez com que minha primeira experiência em leilões de carros fosse incrivelmente fácil e emocionante. Eles foram muito úteis e esclarecedores em todas as etapas do processo. Estou muito contente com meu novo carro e com o excelente serviço prestado.",
      name: "Rafael Oliveira",
      cliente: "Novo Participante de Leilões",
      cidade: "São Paulo",
    },
    {
      description:
        "Nunca imaginei que participar de leilões de carros pudesse ser tão emocionante. O Grupo Carvalho Leilões tornou todo o processo simples e acessível, e agora estou desfrutando de um carro incrível a um preço excelente. Obrigado pela ótima experiência!",
      name: "Mariana Santos",
      cliente: "Entusiasta de Leilões",
      cidade: "Rio de Janeiro",
    },
    {
      description:
        "O Grupo Carvalho Leilões superou todas as minhas expectativas. Eles forneceram um serviço excepcional, tornando a compra do meu novo carro uma experiência tranquila e agradável. Estou muito satisfeito com a eficiência e a qualidade do serviço prestado.",
      name: "José Silva",
      cliente: "Cliente Recorrente de Leilões",
      cidade: "Belo Horizonte",
    },
    {
      description:
        "Agradeço ao Grupo Carvalho Leilões pela experiência maravilhosa que tive ao adquirir meu novo carro através de seus leilões. O processo foi transparente e eficiente, e a equipe foi muito prestativa em todas as etapas. Estou muito feliz com meu novo veículo!",
      name: "Amanda Costa",
      cliente: "Participante Regular de Leilões",
      cidade: "Curitiba",
    },
  ];
  return (
    <Container>
      <BannerSliderComponent Banners={Banners} />
      <Main>
        <HomeCategoriesComponent Categories={Categories} />
        <LeilaoContainerComponent Leiloes={Leiloes} />
        <DepoimentosHome depoimentos={Depoimentos} />
      </Main>
    </Container>
  );
};
