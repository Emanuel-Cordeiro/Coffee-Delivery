interface ThemeType {
  colors: {
    base: {
      white: string,
      background: string,
      card: string,
      input: string,
      button: string,
      hover: string,
      label: string,
      text: string,
      title: string,
    },
    product: {
      yellow_dark: string,
      yellow: string,
      yellow_light: string,
      purple_dark: string,
      purple: string,
      purple_light: string,
    }
  },
  font_family: {
    baloo: string,
    roboto: string,
  },
  font_size: {
    title_xl: string,
    title_l: string,
    title_m: string,
    title_s: string,
    title_xs: string,
    text_l: string,
    text_m: string,
    text_s: string,
    text_xs: string,
    tag: string,
    button_g: string,
    button_m: string,
  }
}

export default ThemeType;