import { BannerSliderComponent } from "./BannerSlider";
import { Container } from "./styles";

export const HomeComponent = () => {
  const Banners = [
    {
      imgUrl: `img1.jpg`,
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
    </Container>
  );
};
