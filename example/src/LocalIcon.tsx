import { lazy } from 'react';
import { UltimateIcons } from 'react-native-ultimate-icons';

const icons = {
  'arrow-left': lazy(() => import('../assets/icons/arrow-left.svg')),
  'arrow-right': lazy(() => import('../assets/icons/arrow-right.svg')),
};

const sizes = {
  small: 24,
  medium: 32,
  xl: 48,
  xxl: 64,
};

const colors = {
  primary: 'blue',
  secondary: 'red',
};

const baseSvgSize = 24;
const defaultSize = 'small';
const defaultColor = 'primary';

export const { Icon } = new UltimateIcons({
  icons,
  sizes,
  colors,
  baseSvgSize,
  defaultSize,
  defaultColor,
});
