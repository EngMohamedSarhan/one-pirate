import { Theme, styled } from '@mui/material/styles';
import MuiSnackbar, { SnackbarProps } from '@mui/material/Snackbar';
import { snackbarContentClasses } from '@mui/material/SnackbarContent';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import { TransitionProps } from '@mui/material/transitions/transition';
import { Fragment, memo } from 'react';

const styles = ({ theme }: { theme: Theme }) =>
  ({
    [`& .${snackbarContentClasses.root}`]: {
      color: theme.palette.common.white,
      flexWrap: 'inherit',
      [theme.breakpoints.up('md')]: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      },
    },
    [`& .${snackbarContentClasses.message}`]: {
      fontSize: 16,
      display: 'flex',
      alignItems: 'center',
    },
    [`& .${snackbarContentClasses.action}`]: {
      paddingLeft: theme.spacing(2),
    },
    '& .MuiSnackbarContent-info': {
      flexShrink: 0,
      marginRight: theme.spacing(2),
    },
    '& .MuiSnackbarContent-close': {
      padding: theme.spacing(1),
    },
  } as const);

const Transition = (
  props: TransitionProps & { children: React.ReactElement<any, any> }
) => <Slide {...props} direction="down" />;

interface ISnackBarProps {
  closeFunc?: () => void;
}

const Snackbar = (props: SnackbarProps & ISnackBarProps) => {
  const { message, closeFunc, ...other } = props;
  const classes = {
    info: 'MuiSnackbarContent-info',
    close: 'MuiSnackbarContent-close',
  };

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={3000}
      TransitionComponent={Transition}
      message={
        <Fragment>
          <InfoIcon className={classes.info} />
          <span>{message}</span>
        </Fragment>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={() => closeFunc && closeFunc()}
        >
          <CloseIcon />
        </IconButton>,
      ]}
      {...other}
    />
  );
};

export default memo(styled(Snackbar)(styles));
