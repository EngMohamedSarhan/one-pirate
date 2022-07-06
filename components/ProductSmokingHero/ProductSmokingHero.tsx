import Typography from '@components-styled/Typography/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container, { ContainerProps } from '@mui/material/Container';
import styles from '@styles/styles';

const ProductSmokingHero = ({ sx, ...props }: ContainerProps) => (
  <Container
    component="section"
    {...props}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      my: 9,
      ...sx,
    }}
  >
    <Button
      sx={{
        border: '4px solid currentColor',
        height: 'auto',
        py: 2,
        px: 5,
      }}
    >
      <Typography variant="h4" component="span" sx={styles.fontSizeXl}>
        Contact Us
      </Typography>
    </Button>
    <Typography variant="subtitle1" sx={{ my: 3 }}>
      We are here to help. Get in touch!
    </Typography>
    <Box component="img" src="/images/buoy.svg" alt="buoy" sx={{ width: 60 }} />
  </Container>
);

export default ProductSmokingHero;
