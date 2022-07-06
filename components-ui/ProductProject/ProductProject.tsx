import Typography from '@components-styled/Typography/Typography';
import { ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import styles from '@styles/styles';
import { memo } from 'react';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export interface IProductProjectProps {
  image: string;
  title: string;
}

const ProductProject = ({ image, title }: IProductProjectProps) => (
  <ImageIconButton key={title}>
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundImage: `url(${image})`,
      }}
    />
    <ImageBackdrop className="imageBackdrop" />
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'common.white',
      }}
    >
      <Typography
        component="h3"
        variant="h6"
        color="inherit"
        className="imageTitle"
        sx={styles.fontSizeMd}
      >
        {title}
        <div className="imageMarked" />
      </Typography>
    </Box>
  </ImageIconButton>
);

export default memo(ProductProject);
