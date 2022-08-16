export const themeColors = {
  default: '#2bbbad',
  primary: '#0d6efd',
  info: '#0dcaf0',
  secondary: '#6c757d',
  success: '#198754',
  warning: '#ffbb33',
  danger: '#dc3545',
  'deep-orange': '#ff5722',
  orange: '#ff9800',
  amber: '#ffc107',
  yellow: '#ffe822',
  brown: '#795548',
  lime: '#cddc39',
  'light-green': '#8bc34a',
  green: '#40a545',
  'dark-green': '#1d6623',
  'blue-green': '#064e40',
  teal: '#009688',
  cyan: '#00bcd4',
  'light-blue': '#03a9f4',
  blue: '#2196f3',
  'dark-blue': '#0d47a1',
  indigo: '#3f51b5',
  'mdb-color': '#45526e',
  purple: '#9c27b0',
  'deep-purple': '#6f42c1',
  pink: '#F65A83',
  red: '#f44336',
  unique: '#880e4f',
  dark: '#212121',
  'blue-grey': '#607d8b',
  grey: '#9e9e9e',
  'light-grey': '#e0e0e0',
  light: '#f8f9fa',
  white: '#ffffff',
  black: '#000000'
}

export const grayColors = {
  100: '#f8f9fa',
  200: '#e9ecef',
  300: '#dee2e6',
  400: '#ced4da',
  500: '#adb5bd',
  600: '#6c757d',
  700: '#495057',
  800: '#343a40',
  900: '#212529'
}

export const materialColors = {
  'default-color': {
    'default-color': themeColors.default,
    'default-color-dark': '#00695c'
  },
  'primary-color': {
    'primary-color': themeColors.primary,
    'primary-color-dark': themeColors['dark-blue']
  },
  'secondary-color': {
    'secondary-color': '#aa66cc',
    'secondary-color-dark': '#681c8f'
  },
  'info-color': {
    'info-color': themeColors.info,
    'info-color-dark': '#0b6c8d'
  },
  'warning-color': {
    'warning-color': themeColors.warning,
    'warning-color-dark': '#b57a04'
  },
  'danger-color': {
    'danger-color': themeColors.danger,
    'danger-color-dark': '#ad0000'
  },
  'success-color': {
    'success-color': themeColors.success,
    'success-color-dark': '#025222'
  },
  'blue-green-color': {
    'blue-green-color': themeColors['blue-green'],
    'blue-green-color-dark': '#022f27'
  },
  'elegant-color': {
    'elegant-color': '#2e2e2e',
    'elegant-color-dark': themeColors.dark
  },
  'special-color': {
    'special-color': '#37474f',
    'special-color-dark': '#263238'
  },
  'stylish-color': {
    'stylish-color': '#4b515d',
    'stylish-color-dark': '#2d333e'
  },
  'unique-color': {
    'unique-color': '#385870',
    'unique-color-dark': '#1c2331'
  }
}

export function useBootstrapColorClasses (name: string) {
  return {
    ['bg-' + name]: true,
    'text-black': ['lime', 'yellow', 'amber', 'white', 'light', 'light-grey'].includes(name),
    'text-white': !['lime', 'yellow', 'amber', 'white', 'light', 'light-grey'].includes(name)
  }
}

export function useGrayColorClasses (name: string) {
  return {
    [`bg-grey-${name}`]: true,
    'text-black': ['100', '200', '300', '400', '500'].includes(name),
    'text-white': !['100', '200', '300', '400', '500'].includes(name)
  }
}

export function useMaterialColorInfo (color: object) {
  const keys = Object.keys(color)
  const values = Object.values(color)

  return [
    {
      color: keys[0],
      value: values[0]
    },
    {
      color: keys[1],
      value: values[1]
    }
  ]
}
