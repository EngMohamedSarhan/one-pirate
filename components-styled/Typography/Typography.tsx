import { Grid } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import { memo } from 'react';

const markClassesMapping: {
  [index: string]: { [subindex: string]: string };
} = {
  center: {
    h1: '',
    h2: 'Typography-markedH2Center',
    h3: 'Typography-markedH3Center',
    h4: 'Typography-markedH4Center',
    h5: 'Typography-markedH5Center',
    h6: 'Typography-markedH6Center',
  },
  left: {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: 'Typography-markedH6Left',
  },
  none: {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    h6: '',
  },
};

const styles = ({ theme }: { theme: Theme }) => ({
  [`& .${markClassesMapping.center.h2}`]: {
    height: 4,
    width: 73,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
  },
  [`& .${markClassesMapping.center.h3}`]: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
  },
  [`& .${markClassesMapping.center.h4}`]: {
    height: 4,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
  },
  [`& .${markClassesMapping.center.h6}`]: {
    height: 3,
    width: 55,
    display: 'block',
    margin: `${theme.spacing(1)} auto 0`,
  },
  [`& .${markClassesMapping.left.h6}`]: {
    height: 2,
    width: 28,
    display: 'block',
    marginTop: theme.spacing(0.5),
  },
});

const variantMapping = {
  h1: 'h1',
  h2: 'h1',
  h3: 'h1',
  h4: 'h1',
  h5: 'h3',
  h6: 'h2',
  subtitle1: 'h3',
};

export interface ITypographyProps {
  marked?: 'center' | 'left' | 'none';
  markColor?: string;
}

const Typography = <C extends React.ElementType>(
  props: TypographyProps<C, { component?: C }> & ITypographyProps
) => {
  const {
    children,
    variant,
    marked = 'none',
    markColor = 'primary.main',
    ...other
  } = props;

  let markedClassName = '';

  if (variant && variant in markClassesMapping[marked]) {
    markedClassName = markClassesMapping[marked][variant];
  }

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {markedClassName ? (
        <Grid
          component='span'
          className={markedClassName}
          sx={{ backgroundColor: markColor }}
        />
      ) : null}
    </MuiTypography>
  );
};

export default memo(styled(Typography)(styles));
