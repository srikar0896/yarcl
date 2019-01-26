const primary = {
  main: '#0486FF',
  light: '#379FFF',
  lighter: '#8CC7FF',
  lightest: '#D0E8FF',
  faint: '#F1F8FF',
  contrastTextColor: '#FFFFFF',
};

const secondary = {
  main: '#00AC65',
  light: '#00BD6F',
  lighter: '#CFF0E2',
  lightest: '#F6FEF8',
  contrastTextColor: '#FFF',

};

const grey = {
  main: '#CBD1E0',
  light: '#D7DDEB',
  lighter: '#E2E7F4',
  lightest: '#F2F4F8',
  faint: '#F7F8FB',
};

const purple = {
  main: '#9657CE',
  light: '#AF7EDA',
  lighter: '#F2E4FF',
};

const yellow = {
  main: '#EDB72F',
  light: '#F2CD6E',
  lighter: '#FFF7E8',
};

const red = {
  main: '#D0021B',
  light: '#FC6C7D',
  lighter: '#FEBFC7',
  lightest: '#FFEBED',
  contrastTextColor: '#FFF',
};

const green = {
  main: '#00AC65',
  light: '#00BD6F',
  lighter: '#CFF0E2',
  lightest: '#F6FEF8',
  contrastTextColor: '#FFF',
};

const white = {
  main: '#FFF',
  light: '#FFFEFF',
  lighter: '#FFFFFF',
  contrastTextColor: '#0486FF',
};

const colors = {
  primary,
  secondary,
  grey,
  purple,
  yellow,
  red,
  green,
  success: green.main,
  alert: red.main,
  warning: yellow.main,
  white,
  inactive: '#1E1E1E',
  defaultBackground: '#FFF',
  text: {
    alt: '#FFF',
  },
  muiPalette: {
    common: {
      black: 'rgba(0, 0, 0, 1)',
      white: '#fff',
    },
    primary: {
      main: primary.main,
      contrastText: white.main,
    },
    secondary: {
      main: green.main,
      contrastText: white.main,
    },
    error: {
      main: red.main,
      contrastText: white.main,
    },
    text: {
      primary: secondary.main,
      secondary: secondary.light,
      disabled: grey.light,
      hint: grey.light,
    },
  },
};

export default colors;
