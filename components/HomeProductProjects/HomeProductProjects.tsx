import Typography from '@components-styled/Typography/Typography';
import ProductProject from '@components-ui/ProductProject/ProductProject';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import styles from '@styles/styles';
import { memo } from 'react';

const images = [
  {
    title: 'Villa',
    image: '/images/project.jpg',
  },
  {
    title: 'Compound',
    image: '/images/project-2.jpg',
  },
  {
    title: 'Villa',
    image: '/images/project.jpg',
  },
  {
    title: 'Compound',
    image: '/images/project-2.jpg',
  },
  {
    title: 'Villa',
    image: '/images/project.jpg',
  },
  {
    title: 'Compound',
    image: '/images/project-2.jpg',
  },
];

const HomeProductProjects = () => (
  <Container component="section" sx={{ mt: 4 }}>
    <Typography
      variant="h4"
      component="h2"
      marked="center"
      align="center"
      sx={styles.fontSizeLg}
    >
      Our Projects
    </Typography>
    <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image) => (
        <ProductProject key={image.title} {...image} />
      ))}
    </Box>
  </Container>
);

export default memo(HomeProductProjects);
