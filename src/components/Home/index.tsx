import { BannerSliderComponent } from "./BannerSlider";
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

  return (
    <Container>
      <BannerSliderComponent Banners={Banners} />
      <Main>
        <LeilaoContainerComponent />
      </Main>
    </Container>
  );
};
