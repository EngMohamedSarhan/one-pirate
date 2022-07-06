import Typography from '@components-styled/Typography/Typography';
import { Grid, GridProps } from '@mui/material';
import { Box } from '@mui/system';
import { memo } from 'react';
import styles from '@styles/styles';
export interface IProductValueProps extends GridProps {
  image: string;
  title: string;
  description: string;
}

const ProductValue = ({
  image,
  title,
  description,
  ...props
}: IProductValueProps) => (
  <Grid item {...props}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 5,
      }}
    >
      <Box component="img" src={image} alt="product" sx={{ height: 55 }} />
      <Typography variant="h6" sx={{ ...styles.fontSizeSm, my: 5 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={styles.fontSizeXs}>
        {description}
      </Typography>
    </Box>
  </Grid>
);

export default memo(ProductValue);
