import type { StatusBarStyle } from "expo-status-bar";
import 'styled-components';

export interface ITheme {
  colors: {
    base700: string;
    base600: string;
    base500: string;
    base400: string;
    base300: string;
    base200: string;
    base100: string;
    white: string;
    redDark: string;
    redMid: string;
    redLight: string;
    greenDark: string;
    greenMid: string;
    greenLight: string;
  };
  fonts: {
    regular: string;
    bold: string;
  };
  fontSize: {
    xs: number;
    sm: number;
    bs: number;
    md: number;
    lg: number;
    xl: number;
  };
  statusBar: StatusBarStyle;
}

export const dark = {
  colors: {
    base700: '#1B1D1E',
    base600: '#333638',
    base500: '#5C6265',
    base400: '#B9BBBC',
    base300: '#DDDEDF',
    base200: '#EFF0F0',
    base100: '#FAFAFA',

    white: '#FFFFFF',

    redDark: '#BF3B44',
    redMid: '#F3BABD',
    redLight: '#F4E6E7',

    greenDark: '#639339',
    greenMid: '#CBE4B4',
    greenLight: '#E5F0DB',
  },
  fonts: {
    regular: 'Nunito_400Regular',
    bold: 'Nunito_700Bold'
  },
  fontSize: {
    xs: 12,
    sm: 14,
    bs: 16,
    md: 18,
    lg: 24,
    xl: 32,
  },
  statusBar: "light"
} satisfies ITheme;

export const light = {
  colors: {
    base700: '#FAFAFA',
    base600: '#EFF0F0',
    base500: '#DDDEDF',
    base400: '#B9BBBC',
    base300: '#5C6265',
    base200: '#333638',
    base100: '#1B1D1E',

    white: '#FFFFFF',

    redDark: '#BF3B44',
    redMid: '#F3BABD',
    redLight: '#F4E6E7',

    greenDark: '#639339',
    greenMid: '#CBE4B4',
    greenLight: '#E5F0DB',
  },
  fonts: {
    regular: 'Nunito_400Regular',
    bold: 'Nunito_700Bold'
  },
  fontSize: {
    xs: 12,
    sm: 14,
    bs: 16,
    md: 18,
    lg: 24,
    xl: 32,
  },
  statusBar: "dark"
} satisfies ITheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme { }
}