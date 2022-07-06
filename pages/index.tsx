import PageLayout from '@components-layout/PageLayout/PageLayout';
import HomeProductHero from '@components/HomeProductHero/HomeProductHero';
import HomeProductProjects from '@components/HomeProductProjects/HomeProductProjects';
import HomeProductServices from '@components/HomeProductServices/HomeProductServices';
import HomeProductValues from '@components/HomeProductValues/HomeProductValues';
import ProductCTA from '@components/ProductCTA/ProductCTA';
import ProductSmokingHero from '@components/ProductSmokingHero/ProductSmokingHero';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <HomeProductHero />
      <HomeProductValues />
      <HomeProductProjects />
      <HomeProductServices />
      <ProductCTA />
      <ProductSmokingHero />
    </PageLayout>
  );
};

export default Home;
