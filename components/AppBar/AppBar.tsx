import Toolbar from '@components-styled/ToolBar/ToolBar';
import AppDrawer from '@components/AppDrawer/AppDrawer';
import { AppBar as ApplicationBar } from '@mui/material';
import Link from '@mui/material/Link';
import { memo } from 'react';

const AppBar = () => (
  <div>
    <ApplicationBar position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <AppDrawer />
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          href="/"
          sx={{ fontSize: 24, mx: 'auto' }}
        >
          {'logo'}
        </Link>
      </Toolbar>
    </ApplicationBar>
    <Toolbar />
  </div>
);

export default memo(AppBar);
