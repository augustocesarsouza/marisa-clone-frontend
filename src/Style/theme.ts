export const theme = {
  colors: {
    primaryColor: '#333', // meio-escuro
    secondaryColor: '#2634a2', // azul
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
  },
  font: {
    family: {
      default: "'Pluto Sans'",
      secondary: "'Arial'",
    },
    sizes: {
      xsmall: '8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    xsmall: '8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
  svg: {
    width: '3.5rem',
    fill: 'rgb(231 235 248)',
    fillhover: 'rgb(221 227 248 / 85%)',
  }
};

export interface Theme {
  colors: Colors;
  font: Font,
  media: Media,
  spacings: Spacings,
  svg: {
    width: string;
    fill: string;
    fillhover: string;
  }
}

interface Colors {
  primaryColor: string, 
  secondaryColor: string,
  white: string,
  mediumGray: string,
}

interface Font {
  family: {
    default: string,
    secondary: string,
  },
  sizes: {
    xsmall: string,
    small: string,
    medium: string,
    large: string,
    xlarge: string,
    xxlarge: string,
    huge:  string,
    xhuge: string,
  }
}

interface Media {
  lteMedium: string,
}

interface Spacings{
  xsmall: string,
  small: string,
  medium: string,
  large: string,
  xlarge: string,
  xxlarge: string,
  huge: string,
  xhuge: string,
}