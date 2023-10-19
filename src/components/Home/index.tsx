import { BannerSliderComponent } from "./BannerSlider";
import { HomeCategoriesComponent } from "./HomeCategories";
import { LeilaoContainerComponent } from "./LeilaoContainer";
import { Container, Main } from "./styles";

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

  return (
    <Container>
      <BannerSliderComponent Banners={Banners} />
      <Main>
        <HomeCategoriesComponent Categories={Categories} />
        <LeilaoContainerComponent />
      </Main>
    </Container>
  );
};
