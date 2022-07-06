import Typography from '@components-styled/Typography/Typography';
import { Link, TypographyProps } from '@mui/material';

const CopyRight = ({ color = 'common.white', ...props }: TypographyProps) => (
  <Typography color={color} {...props}>
    {'© '}
    <Link color="inherit" href="/">
      ASC
    </Link>{' '}
    {new Date().getFullYear()}
  </Typography>
);

export default CopyRight;
