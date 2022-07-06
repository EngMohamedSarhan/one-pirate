import Typography from '@components-styled/Typography/Typography';
import CopyRight from '@components/CopyRight/CopyRight';
import { Facebook, Twitter } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import styles from '@styles/styles';

const AppFooter = () => (
  <Grid
    container
    component="footer"
    sx={{
      clear: 'both',
      bgcolor: 'primary.main',
      marginTop: 'auto',
    }}
  >
    <Container sx={{ my: 8, display: 'flex' }}>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={4} md={3}>
          <Grid
            container
            direction="column"
            justifyContent="flex-end"
            spacing={2}
            sx={{ height: 120 }}
          >
            <Grid item sx={{ display: 'flex' }}>
              <Box component="a" href="https://mui.com/" sx={styles.iconBox}>
                <Facebook />
              </Box>
              <Box
                component="a"
                href="https://twitter.com/MUI_hq"
                sx={styles.iconBox}
              >
                <Twitter />
              </Box>
            </Grid>
            <Grid item>
              <CopyRight />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Typography
            gutterBottom
            variant="h6"
            marked="left"
            color="common.white"
            markColor="common.white"
          >
            Links
          </Typography>
          <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
            <Box component="li" sx={{ py: 0.5 }}>
              <Link color="common.white" href="/">
                Home
              </Link>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Link color="common.white" href="/">
                About Us
              </Link>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Link color="common.white" href="/">
                Our Projects
              </Link>
            </Box>
            <Box component="li" sx={{ py: 0.5 }}>
              <Link color="common.white" href="/">
                Contact Us
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Grid>
);

export default AppFooter;
