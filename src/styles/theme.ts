export const dark = {
  grid: {
    container: '120rem',
    gutter: '3.2rem',
  },
  border: {
    radius: {
      small: '0.7rem',
      medium: '1rem',
      large: '1.3rem',
    },
  },
  font: {
    family:
      "Work Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.5rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
  },
  icon: {
    sizes: {
      xsmall: '0.3rem',
      small: '1.4rem',
      medium: '1.5rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
  },
  colors: {
    primary: '#E6007A',
    secondary: '#6745D2',
    gradient: 'linear-gradient(47.94deg, #e6007a 0%, #6745d2 98.88%)',
    text: '#FFFFFF',
    background: '#1C1C26',
    secondaryBackground: 'rgba(139,161,190,0.2)',
    secondaryBackgroundSolid: '#393F4C',
    gradientBackground:
      'linear-gradient(62.3deg, #1C1C26 13.21%, #2F313B 98.01%)',
    none: 'none',
  },
  spacings: {
    xxxsmall: '0.5rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  padding: {
    xxsmall: '0.1rem',
    xsmall: '0.2rem',
    small: '0.3rem',
    medium: '0.4rem',
    large: '0.5rem',
    xlarge: '0.6rem',
    xxlarge: '0.7rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    color: 'background 0.3s cubic-bezier(.25,.8,.25,1)',

    fast: '0.1s ease-in-out',
  },
};

export const light = {
  themeColor: {
    text: '#FFFFFF',
    background: '#F9FBFC',
    gradientBackground:
      'linear-gradient(62.3deg, #F9FBFC 13.21%, #FFFFFF 98.01%)',
  },
};

export const theme = dark;
