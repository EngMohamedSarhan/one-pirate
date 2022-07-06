import Button from '@components-styled/Button/Button';
import SnackBar from '@components-styled/SnackBar/SnackBar';
import TextField from '@components-styled/TextField/TextField';
import Typography from '@components-styled/Typography/Typography';
import { colors, Grid, Paper } from '@mui/material';
import { Box, Container } from '@mui/system';
import styles from '@styles/styles';
import { FormEvent, memo, useState } from 'react';

const ProductCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Paper
            elevation={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: colors.grey[100],
              py: 8,
              px: 3,
            }}
          >
            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
              <Typography
                gutterBottom
                variant="h2"
                component="h2"
                sx={styles.fontSizeXl}
              >
                News Letter
              </Typography>
              <Typography variant="h5" sx={styles.fontSizeSm}>
                Subscribe to our news letter
              </Typography>
              <TextField
                noBorder
                placeholder="Email"
                variant="standard"
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Keep me updated
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background: 'url(/images/dots.png)',
            }}
          />
          <Box
            component="img"
            src="images/architecture-2.jpg"
            alt="call to action"
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <SnackBar
        open={isOpen}
        closeFunc={handleClose}
        message="We will send you our news, once a week."
      />
    </Container>
  );
};

export default memo(ProductCTA);
