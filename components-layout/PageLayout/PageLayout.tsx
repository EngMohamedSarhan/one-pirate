import AppBar from '@components/AppBar/AppBar';
import AppFooter from '@components/AppFooter/AppFooter';
import { Grid, GridProps } from '@mui/material';
import Head from 'next/head';
import { memo } from 'react';

export interface IPageLayoutProps extends GridProps {
  title?: string;
  content?: string;
}

const PageLayout = ({ title, content, ...props }: IPageLayoutProps) => (
  <main>
    <Head>
      {title && <title>{title}</title>}
      {content && <meta name="description" content={content} />}
    </Head>
    <Grid container direction="column" minHeight="100vh">
      <AppBar />
      <Grid xs={12} {...props}>
        {props.children}
      </Grid>
      <AppFooter />
    </Grid>
  </main>
);

export default memo(PageLayout);
