import ProductValuesLayout from '@components-layout/ProductValuesLayout/ProductValuesLayout';
import ProductValue from '@components-ui/ProductValue/ProductValue';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const HomeProductValues = () => (
  <ProductValuesLayout>
    <Grid container spacing={5}>
      <ProductValue
        item
        xs={12}
        md={4}
        image="/images/architecture.svg"
        title="Architecture"
        description="Experience, creativity and technical expertise are combined together in every server we offer."
      />
      <ProductValue
        item
        xs={12}
        md={4}
        image="/images/engineering.svg"
        title="Engineering"
        description="Experience, creativity and technical expertise are combined together in every server we offer."
      />
      <ProductValue
        item
        xs={12}
        md={4}
        image="/images/management.svg"
        title="Project Management"
        description="Experience, creativity and technical expertise are combined together in every server we offer."
      />
    </Grid>
  </ProductValuesLayout>
);

export default HomeProductValues;
