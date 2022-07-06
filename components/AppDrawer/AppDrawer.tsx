import Typography from '@components-styled/Typography/Typography';
import { Menu } from '@mui/icons-material';
import { Drawer, IconButton, List, ListItemButton } from '@mui/material';
import styles from '@styles/styles';
import { Fragment, useState } from 'react';
import { memo } from 'react';

const AppDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <IconButton color='inherit' onClick={handleDrawer}>
        <Menu />
      </IconButton>
      <Drawer open={isOpen} onClose={handleDrawer}>
        <List sx={styles.drawerWidth}>
          <ListItemButton>
            <Typography
              color='gray'
              variant='subtitle1'
              textTransform='uppercase'
            >
              Home
            </Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography variant='subtitle1' textTransform='uppercase'>
              About us
            </Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography variant='subtitle1' textTransform='uppercase'>
              Our projects
            </Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography variant='subtitle1' textTransform='uppercase'>
              Contact us
            </Typography>
          </ListItemButton>
        </List>
      </Drawer>
    </Fragment>
  );
};

export default memo(AppDrawer);
