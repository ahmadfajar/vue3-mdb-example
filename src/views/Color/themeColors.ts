export const themeColors: Record<string, string> = {
  default: '#2bbbad',
  primary: '#0d6efd',
  secondary: '#6c757d',
  info: '#0dcaf0',
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
  'light-blue': '#4fc3f7',
  blue: '#2196f3',
  'dark-blue': '#0d47a1',
  indigo: '#3f51b5',
  'deep-purple': '#6f42c1',
  purple: '#9c27b0',
  pink: '#F65A83',
  red: '#f44336',
  unique: '#880e4f',
  'mdb-color': '#45526e',
  'blue-grey': '#607d8b',
  dark: '#212121',
  grey: '#9e9e9e',
  'light-grey': '#e0e0e0',
  light: '#f8f9fa',
  white: '#ffffff',
  black: '#000000'
};

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
};

export const materialColors = {
  'default-color': {
    'default-color': '#5f4a97',
    'default-color-dark': '#44307a'
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
    'success-color-dark': '#0f5334'
  },
  'blue-green-color': {
    'blue-green-color': themeColors['blue-green'],
    'blue-green-color-dark': '#022f27'
  },
  'elegant-color': {
    'elegant-color': '#2e2e2e',
    'elegant-color-dark': themeColors.dark
  },
  'stylish-color': {
    'stylish-color': '#4b515d',
    'stylish-color-dark': '#2d333e'
  },
  'special-color': {
    'special-color': '#37474f',
    'special-color-dark': '#263238'
  },
  'unique-color': {
    'unique-color': '#385870',
    'unique-color-dark': '#1c2331'
  }
};

export function useBootstrapColorClasses(name: string) {
  return {
    ['bg-' + name]: true,
    'text-black': [
      'lime',
      'yellow',
      'amber',
      'white',
      'light',
      'light-grey',
      'light-blue'
    ].includes(name),
    'text-white': ![
      'lime',
      'yellow',
      'amber',
      'white',
      'light',
      'light-grey',
      'light-blue'
    ].includes(name)
  };
}

export function useGrayColorClasses(name: string | number) {
  return {
    [`bg-grey-${name}`]: true,
    'text-black': ['100', '200', '300', '400', '500'].includes(<string>name),
    'text-white': !['100', '200', '300', '400', '500'].includes(<string>name)
  };
}

export function useMaterialColorInfo(color: object) {
  const keys = Object.keys(color);
  const values = Object.values(color);

  return [
    {
      color: keys[0],
      value: values[0]
    },
    {
      color: keys[1],
      value: values[1]
    }
  ];
}
