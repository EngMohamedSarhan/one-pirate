import { ArrowForwardIos } from '@mui/icons-material';
import { Grid, IconButton, IconButtonProps } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

const Container = styled(Grid)<{ isInverted?: boolean }>(
  ({ theme, isInverted }) => ({
    position: 'absolute',
    width: 'fit-content',
    height: '100%',
    alignContent: 'center',
    top: 0,
    zIndex: 1,
    ...(isInverted
      ? {
          right: 5,
          [theme.breakpoints.down('sm')]: {
            right: 1,
          },
        }
      : {
          left: 5,
          transform: 'scaleX(-1)',
          [theme.breakpoints.down('sm')]: {
            left: 1,
          },
        }),
  })
);

export interface ICarouselButtonProps extends IconButtonProps {
  isVisible?: boolean;
  isInverted?: boolean;
  backgroundColor?: string;
}

const CarouselButton = ({
  isVisible,
  isInverted,
  backgroundColor,
  color = 'inherit',
  ...props
}: ICarouselButtonProps) =>
  isVisible ? (
    <Container container isInverted={isInverted} color={backgroundColor}>
      <IconButton color={color} {...props}>
        <ArrowForwardIos />
      </IconButton>
    </Container>
  ) : null;

export default CarouselButton;
