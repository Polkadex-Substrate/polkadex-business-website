export const defaultTheme = {
  title: 'dark',
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
      "SuisseIntl, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
    lineHeight: {
      small: 1,
      normal: 1.5,
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
    secondaryBackground: 'rgba(139,161,190,0.2)',
    secondaryBackgroundOpacity: 'rgba(139,161,190,0.1)',
    tertiaryBackgroundOpacity: 'rgba(139,161,190,0.03)',
    gradient: 'linear-gradient(47.94deg, #e6007a 0%, #6745d2 98.88%)',
    secondaryGradient:
      'linear-gradient(48.65deg, #2B0017 31.73%, #E6007A 143.69%)',
    transparent: 'transparent',
    none: 'none',
    green: '#0CA564',
    white: '#ffffff',
    black: '#000000',
    orange: '#FFA500',
    blue: '#148FE8',
    disable: '#77777D',
    secondaryText: '#A8ADB7',
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

const light = {
  title: 'light',
  colors: {
    primaryBackground: '#F9FBFC',
    primaryBackgroundOpacity: '#F9FBFC99',
    gradientBackground:
      'linear-gradient(62.3deg, #FFFFFF 13.21%, #F9FBFC99 98.01%)',
    tertiaryBackground: '#F9FBFC99',
    tertiaryBackgroundSolid: '#F9FBFC99',
    quaternaryBackground: 'rgba(255, 255, 255, 0.05)',
    secondaryBackgroundSolid: '#E8ECF2',
    text: '#000000',
    overlay: 'rgba(255, 255, 255, 0.99)',
    linearBackground:
      'linear-gradient( 0.83deg, #fff 18.58%,rgba(255, 255, 255, 0) 99.36%)',
    inverse: '#ffffff',
    verticalGradient:
      'linear-gradient(180deg, #242430 0%, rgba(28, 28, 38, 0) 100% 180deg, #242430 110%)',
    gray: '#f0f0f0',
  },
  shadow: {
    primary: '0px 10px 40px rgba(171, 192, 227, 0.25)',
    top: '0px -5px 15px rgba(171, 192, 227, 0.98)',
    secondary:
      'rgba(50, 50, 93, 0.05) 0px 0 100px -20px, rgba(0, 0, 0, 0.05) 0px 30px 0 -30px',
    tertiary:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px',
    quaternary: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
  },
  skeleton: {
    default: `linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.12) 25%,
      rgba(0, 0, 0, 0.20) 50%,
      rgba(0, 0, 0, 0.14) 75%,
      rgba(0, 0, 0, 0.1) 100%
    )`,
  },
};

const dark = {
  title: 'dark',
  colors: {
    primaryBackground: '#0D0D10',
    primaryBackgroundOpacity: '#1C1C2699',
    gradientBackground:
      'linear-gradient(62.3deg, #1C1C26 13.21%, #2F313B 98.01%)',
    tertiaryBackground: '#2E303C',
    tertiaryBackgroundSolid: '#22232E',
    quaternaryBackground: 'rgba(139, 161, 190, 0.05)',
    secondaryBackgroundSolid: '#2F3340',
    text: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.98)',
    linearBackground:
      'linear-gradient( 0.83deg, #1c1c26 18.58%,rgba(28, 28, 38, 0) 99.36%)',
    inverse: '#000000',
    verticalGradient:
      'linear-gradient(180deg, #242430 0%, rgba(28, 28, 38, 0) 100%)',
    gray: '#f0f0f0',
  },
  shadow: {
    primary: '0px 10px 15px rgba(0, 0, 0, 0.05)',
    top: '0px -5px 15px rgba(0, 0, 0, 0.7)',
    secondary:
      'rgba(0, 0, 0, 0.25) 0px 0 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 0 -30px',
    tertiary:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px',
    quaternary: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
  },
  skeleton: {
    default: `linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.12) 25%,
      rgba(255, 255, 255, 0.20) 50%,
      rgba(255, 255, 255, 0.14) 75%,
      rgba(255, 255, 255, 0.1) 100%
    )`,
  },
};

export const lightTheme = {
  ...defaultTheme,
  ...light,
  colors: {
    ...light.colors,
    ...defaultTheme.colors,
  },
};

export const darkTheme = {
  ...defaultTheme,
  ...dark,
  colors: {
    ...dark.colors,
    ...defaultTheme.colors,
  },
};
