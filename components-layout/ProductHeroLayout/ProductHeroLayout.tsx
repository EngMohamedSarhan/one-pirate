import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { HTMLAttributes, memo } from 'react';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: 500,
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    maxHeight: 900,
  },
}));

const Background = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
  [theme.breakpoints.down('sm')]: {
    height: 500,
  },
}));

export interface IProductHeroLayoutProps {
  sxBackground: SxProps<Theme>;
}

const ProductHeroLayout = (
  props: HTMLAttributes<HTMLDivElement> & IProductHeroLayoutProps
) => {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background
          sx={{
            backgroundColor: '#7fc7d9',
            backgroundPosition: 'center',
            ...sxBackground,
          }}
        />
      </Container>
    </ProductHeroLayoutRoot>
  );
};

export default memo(ProductHeroLayout);
