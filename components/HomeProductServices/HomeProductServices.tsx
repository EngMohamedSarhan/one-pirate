import ProductValuesLayout from '@components-layout/ProductValuesLayout/ProductValuesLayout';
import Typography from '@components-styled/Typography/Typography';
import ProductValue from '@components-ui/ProductValue/ProductValue';
import { Grid } from '@mui/material';
import styles from '@styles/styles';
import { memo } from 'react';

const HomeProductServices = () => (
  <ProductValuesLayout>
    <Typography
      variant="h4"
      component="h2"
      marked="center"
      align="center"
      sx={{ ...styles.fontSizeLg, mb: 8 }}
    >
      Our Services
    </Typography>
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

export default memo(HomeProductServices);
