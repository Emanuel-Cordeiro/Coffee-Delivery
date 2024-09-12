import 'styled-components';
import ThemeType from './types/ThemeType';

declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
