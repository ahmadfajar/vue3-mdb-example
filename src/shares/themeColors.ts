import { fullColors } from '@shares/fullColors.ts';

export const contextColorsLightDark = {
  default: 'oklch(53.57% 0.12 293.13)',
  primary: 'oklch(57.82% 0.23 260.03)',
  secondary: fullColors.gray['500'],
  success: 'oklch(55.22% 0.12 156.93)',
  danger: 'oklch(59.15% 0.2 21.24)',
  warning: 'oklch(83.42% 0.16 79.51)',
  info: 'oklch(82.33% 0.14 213.05)',
  light: 'oklch(94.2% 0.005 247.879)',
  dark: 'oklch(21.34% 0 0)',
};

export const contextColors = {
  default: contextColorsLightDark['default'],
  primary: contextColorsLightDark['primary'],
  secondary: contextColorsLightDark['secondary'],
  success: contextColorsLightDark['success'],
  danger: contextColorsLightDark['danger'],
  warning: contextColorsLightDark['warning'],
  info: contextColorsLightDark['info'],
};

export const contextColorsLight = {
  default: contextColorsLightDark['default'],
  primary: contextColorsLightDark['primary'],
  secondary: contextColorsLightDark['secondary'],
  success: contextColorsLightDark['success'],
  danger: contextColorsLightDark['danger'],
  warning: contextColorsLightDark['warning'],
  info: contextColorsLightDark['info'],
  light: contextColorsLightDark['light'],
};

declare type StringRecord = Record<string, string>;

export const themeColors: StringRecord = {
  red: fullColors.red['500']!,
  'deep-orange': fullColors['deep-orange']['500']!,
  orange: fullColors.orange['500']!,
  amber: fullColors.amber['500']!,
  yellow: fullColors.yellow['500']!,
  lime: fullColors.lime['500']!,
  'light-green': fullColors['light-green']['500']!,
  green: fullColors.green['500']!,
  'dark-green': fullColors.green['900']!,
  'blue-green': 'oklch(0.43 0.08 174.95)',
  teal: fullColors.teal['500']!,
  cyan: fullColors.cyan['500']!,
  'light-blue': fullColors['light-blue']['500']!,
  blue: fullColors.blue['500']!,
  'dark-blue': fullColors.blue['900']!,
  indigo: fullColors.indigo['500']!,
  'deep-purple': fullColors['deep-purple']['500']!,
  purple: fullColors.purple['500']!,
  pink: fullColors.pink['500']!,
  unique: 'oklch(41.52% 0.16 355.69)',
  'midnight-haze': fullColors['midnight-haze']['500']!,
  'blue-grey': fullColors['blue-grey']['500']!,
  gray: fullColors.gray['500']!,
  neutral: fullColors.neutral['500']!,
};

export const materialColors = {
  'default-color': {
    'default-color': 'oklch(46.85% 0.12 293.75)',
    'default-color-dark': 'oklch(37.39% 0.12 291.98)',
  },
  'primary-color': {
    'primary-color': contextColors.primary,
    'primary-color-dark': 'oklch(0.422 0.157 259.913)',
  },
  'secondary-color': {
    'secondary-color': 'oklch(62.61% 0.16 313.37)',
    'secondary-color-dark': 'oklch(40.93% 0.18 310.72)',
  },
  'info-color': {
    'info-color': contextColors.info,
    'info-color-dark': 'oklch(49.72% 0.09 228.69)',
  },
  'warning-color': {
    'warning-color': contextColors.warning,
    'warning-color-dark': 'oklch(62.48% 0.13 74.9)',
  },
  'danger-color': {
    'danger-color': contextColors.danger,
    'danger-color-dark': 'oklch(46.95% 0.19 29.23)',
  },
  'success-color': {
    'success-color': contextColors.success,
    'success-color-dark': 'oklch(39.29% 0.08 158.12)',
  },
  'blue-green-color': {
    'blue-green-color': themeColors['blue-green'],
    'blue-green-color-dark': 'oklch(27.37% 0.05 177.38)',
  },
  'elegant-color': {
    'elegant-color': 'oklch(30.12% 0 0)',
    'elegant-color-dark': 'oklch(24.78% 0 0)',
  },
  'stylish-color': {
    'stylish-color': 'oklch(43.41% 0.02 264.32)',
    'stylish-color-dark': 'oklch(32% 0.02 262.55)',
  },
  'special-color': {
    'special-color': 'oklch(38.73% 0.02 229.79)',
    'special-color-dark': 'oklch(30.87% 0.02 229.78)',
  },
  'unique-color': {
    'unique-color': 'oklch(44.6% 0.05 241.9)',
    'unique-color-dark': 'oklch(36% 0.05 242.26)',
  },
};

declare type ColorName = {
  name: string;
  value: string;
};

export function useMaterialColorInfo(color: object): [ColorName, ColorName] {
  const keys = Object.keys(color) as [string, string];
  const values = Object.values(color) as [string, string];

  return [
    {
      name: keys[0],
      value: values[0],
    },
    {
      name: keys[1],
      value: values[1],
    },
  ];
}
