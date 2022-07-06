import { colors } from '@mui/material';
import { createStyles } from '@mui/styles';

import theme from './theme';

const styles = createStyles({
  drawerWidth: {
    width: 250,
  },
  fontSizeXl: {
    fontSize: 48,
    [theme.breakpoints.down('md')]: {
      fontSize: 36,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    },
  },
  fontSizeLg: {
    fontSize: 36,
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  fontSizeMd: {
    fontSize: 28,
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },
  fontSizeSm: {
    fontSize: 20,
    [theme.breakpoints.down('md')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  fontSizeXs: {
    fontSize: 18,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
  },
  iconBox: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'common.white',
    borderRadius: 24,
    mr: 1,
    '&:hover': {
      bgcolor: colors.grey[200],
    },
  },
});

export default styles;
