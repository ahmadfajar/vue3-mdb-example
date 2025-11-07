import { fullColors } from '@shares/fullColors.ts';

export const contextColors = {
  default: 'oklch(0.536 0.12 293.128)',
  primary: 'oklch(0.578 0.228 260.025)',
  secondary: 'oklch(0.56 0.02 245.595)',
  success: 'oklch(0.552 0.123 156.93)',
  danger: 'oklch(0.592 0.202 21.239)',
  warning: 'oklch(0.834 0.159 79.507)',
  info: 'oklch(0.823 0.14 213.052)',
};

export const contextColorsLight = {
  default: 'oklch(0.536 0.12 293.128)',
  primary: 'oklch(0.578 0.228 260.025)',
  secondary: 'oklch(0.56 0.02 245.595)',
  success: 'oklch(0.552 0.123 156.93)',
  danger: 'oklch(0.592 0.202 21.239)',
  warning: 'oklch(0.834 0.159 79.507)',
  info: 'oklch(0.823 0.14 213.052)',
  light: 'oklch(0.928 0.006 264.531)',
};

export const contextColorsLightDark = {
  default: 'oklch(0.536 0.12 293.128)',
  primary: 'oklch(0.578 0.228 260.025)',
  secondary: 'oklch(0.56 0.02 245.595)',
  success: 'oklch(0.552 0.123 156.93)',
  danger: 'oklch(0.592 0.202 21.239)',
  warning: 'oklch(0.834 0.159 79.507)',
  info: 'oklch(0.823 0.14 213.052)',
  light: 'oklch(0.928 0.006 264.531)',
  dark: 'oklch(0.213 0 89.876)',
};

export const themeColors: Record<string, string> = {
  red: fullColors.red['500'],
  'deep-orange': fullColors['deep-orange']['500'],
  orange: fullColors.orange['500'],
  amber: fullColors.amber['500'],
  yellow: fullColors.yellow['500'],
  lime: fullColors.lime['500'],
  'light-green': fullColors['light-green']['500'],
  green: fullColors.green['500'],
  'dark-green': 'oklch(0.445 0.12 144.099)',
  'blue-green': 'oklch(0.38 0.069 174.843)',
  teal: fullColors.teal['500'],
  cyan: fullColors.cyan['500'],
  'light-blue': fullColors['light-blue']['500'],
  blue: fullColors.blue['500'],
  'dark-blue': fullColors.blue['950'],
  indigo: fullColors.indigo['500'],
  'deep-purple': fullColors['deep-purple']['500'],
  purple: fullColors.purple['500'],
  pink: fullColors.pink['500'],
  unique: 'oklch(0.415 0.16 355.687)',
  'midnight-haze': fullColors['midnight-haze']['500'],
  'blue-grey': fullColors['blue-grey']['500'],
  gray: fullColors.gray['500'],
  neutral: fullColors.neutral['500'],
  // black: '#000000',
  // white: '#ffffff',
};

export const materialColors = {
  'default-color': {
    'default-color': 'oklch(0.468 0.121 293.753)',
    'default-color-dark': 'oklch(0.374 0.121 291.984)',
  },
  'primary-color': {
    'primary-color': contextColors.primary,
    'primary-color-dark': themeColors['dark-blue'],
  },
  'secondary-color': {
    'secondary-color': 'oklch(0.626 0.162 313.371)',
    'secondary-color-dark': 'oklch(0.409 0.178 310.718)',
  },
  'info-color': {
    'info-color': contextColors.info,
    'info-color-dark': 'oklch(0.497 0.095 228.69)',
  },
  'warning-color': {
    'warning-color': contextColors.warning,
    'warning-color-dark': 'oklch(0.625 0.131 74.896)',
  },
  'danger-color': {
    'danger-color': contextColors.danger,
    'danger-color-dark': 'oklch(0.469 0.193 29.234)',
  },
  'success-color': {
    'success-color': contextColors.success,
    'success-color-dark': 'oklch(0.393 0.084 158.124)',
  },
  'blue-green-color': {
    'blue-green-color': themeColors['blue-green'],
    'blue-green-color-dark': 'oklch(0.274 0.049 177.381)',
  },
  'elegant-color': {
    'elegant-color': 'oklch(0.301 0 89.876)',
    'elegant-color-dark': 'oklch(0.248 0 89.876)',
  },
  'stylish-color': {
    'stylish-color': 'oklch(0.434 0.021 264.325)',
    'stylish-color-dark': 'oklch(0.32 0.021 262.554)',
  },
  'special-color': {
    'special-color': 'oklch(0.387 0.025 229.789)',
    'special-color-dark': 'oklch(0.309 0.019 229.784)',
  },
  'unique-color': {
    'unique-color': 'oklch(0.446 0.055 241.905)',
    'unique-color-dark': 'oklch(0.36 0.05 242.26)',
  },
};

export function useMainColorClasses(name: string) {
  return {
    ['bg-' + name]: true,
    'text-dark': [
      'lime',
      'yellow',
      'amber',
      'white',
      'light',
      'light-green',
      'warning',
      'info',
    ].includes(name),
    'text-light': ![
      'lime',
      'yellow',
      'amber',
      'white',
      'light',
      'light-green',
      'warning',
      'info',
    ].includes(name),
  };
}

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
