import { Box, Container } from '@mui/system';
import { memo, ReactNode } from 'react';

export interface IProductValuesLayoutProps {
  children?: ReactNode;
}

const ProductValuesLayout = ({ children }: IProductValuesLayoutProps) => (
  <Box sx={{ display: 'flex', overflow: 'hidden' }}>
    <Container sx={{ mt: 15, mb: 10, position: 'relative' }}>
      <Box
        component="img"
        src="/images/curvy-lines.png"
        alt="curvy lines"
        sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
      />
      {children}
    </Container>
  </Box>
);

export default memo(ProductValuesLayout);
