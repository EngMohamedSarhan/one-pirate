import ProductHeroLayout from '@components-layout/ProductHeroLayout/ProductHeroLayout';
import Button from '@components-styled/Button/Button';
import Typography from '@components-styled/Typography/Typography';
import styles from '@styles/styles';

export interface IProductHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  action?: string;
  actionDescription?: string;
  backgroundImage?: string;
  onAction?(): void;
}

const ProductHero = (props: IProductHeroProps) => {
  const {
    title,
    subtitle,
    description,
    action,
    actionDescription,
    backgroundImage,
    onAction,
  } = props;

  return (
    <ProductHeroLayout sxBackground={{ backgroundImage: `url(${backgroundImage})` }}>
      {title && (
        <Typography
          color="inherit"
          align="center"
          variant="h3"
          textTransform="capitalize"
          marked={!subtitle ? 'center' : undefined}
          sx={styles.fontSizeXl}
        >
          {title}
        </Typography>
      )}
      {subtitle && (
        <Typography
          color="inherit"
          variant="h6"
          marked="center"
          sx={styles.fontSizeMd}
        >
          {subtitle}
        </Typography>
      )}
      {description && (
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          sx={{ ...styles.fontSizeSm, mb: 4, mt: { xs: 6, sm: 10 } }}
        >
          {description}
        </Typography>
      )}
      {onAction && (
        <Button
          variant="contained"
          size="small"
          onClick={onAction}
          sx={{ minWidth: 200 }}
        >
          {action}
        </Button>
      )}
      {actionDescription && (
        <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
          {actionDescription}
        </Typography>
      )}
    </ProductHeroLayout>
  );
};

export default ProductHero;
