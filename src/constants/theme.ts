/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 */

export const Colors = {
  light: {
    text: '#282828',
    background: '#FCFCFA',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#F2F3EE',
    textSecondary: '#686868',
    primary: '#5F6B4E',
    border: '#7A8462',
    gradientStart: '#82DB6E',
    gradientEnd: '#2BBD83',
    alertSuccess: '#286846',
    alertSuccessBackground: '#EAF4E7',
    alertWarning: '#775A1F',
    alertWarningBackground: '#F6F0DF',
    alertError: '#8F4038',
    alertErrorBackground: '#F8EAE7',
    alertInfo: '#5F6B4E',
    alertInfoBackground: '#EEF0E8',
  },
  dark: {
    text: '#F4F3ED',
    background: '#191B16',
    backgroundElement: '#24271F',
    backgroundSelected: '#303329',
    textSecondary: '#B8B9B0',
    primary: '#B2C18D',
    border: '#7A8462',
    gradientStart: '#82DB6E',
    gradientEnd: '#2BBD83',
    alertSuccess: '#8ED4A5',
    alertSuccessBackground: '#203427',
    alertWarning: '#E4C779',
    alertWarningBackground: '#3A3020',
    alertError: '#E59A8E',
    alertErrorBackground: '#3B2523',
    alertInfo: '#B2C18D',
    alertInfoBackground: '#2A3023',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const FontSizes = {
  caption: 10,
  helper: 11,
  small: 12,
  label: 13,
  body: 14,
  title: 22,
  brand: 23,
  heading: 29,
} as const;

export const Spacing = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 64,
} as const;

export const Radius = {
  xs: 2,
  sm: 4,
  md: 5,
  lg: 8,
  xl: 12,
  xxl: 22,
  pill: 999,
} as const;




