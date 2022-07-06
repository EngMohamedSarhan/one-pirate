import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import ProductHero from '@components-ui/ProductHero/ProductHero';
import CarouselButton from '@components-styled/CarouselButton/CarouselButton';

const HomeProductHero = () => (
  <Carousel
    infiniteLoop
    emulateTouch
    autoPlay
    showThumbs={false}
    showStatus={false}
    interval={2000}
    renderArrowNext={(handler, isVisible) => (
      <CarouselButton
        isInverted
        color="inherit"
        backgroundColor="white"
        isVisible={isVisible}
        onClick={handler}
      />
    )}
    renderArrowPrev={(handler, isVisible) => (
      <CarouselButton
        color="inherit"
        backgroundColor="white"
        isVisible={isVisible}
        onClick={handler}
      />
    )}
  >
    <ProductHero
      title="Amal Al-Sarraf"
      subtitle="Engineering & Consultants"
      description="Experience, creativity and technical expertise are combined together in every server we offer."
      backgroundImage="/images/architecture-2.jpg"
    />
    <ProductHero
      description="Experience, creativity and technical expertise are combined together in every server we offer."
      backgroundImage="/images/architecture.jpg"
    />
    <ProductHero
      description="Experience, creativity and technical expertise are combined together in every server we offer."
      backgroundImage="/images/architecture.jpg"
    />
  </Carousel>
);

export default memo(HomeProductHero);
