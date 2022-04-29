const baseFontSize = 28;

export const variables = {
  color: {
    primary: 'hsl(193, 38%, 86%)',
    primaryDark: 'hsl(150, 100%, 66%)',
    primaryDarkActive: 'hsl(150, 59%, 54%)',
    neutral: 'hsl(217, 19%, 38%)',
    neutralDark: 'hsl(217, 19%, 24%)',
    neutralDarker: 'hsl(218, 23%, 16%)',
  },
  fontSize: {
    medium: `${baseFontSize}px`,
    small: `${baseFontSize * .75}px`,
    smaller: `${baseFontSize * .5}px`,
  },
  fontFamily: {
    regular: 'Manrope',
  },
  breakpoints: {
    desktop: '1440px',
    mobile: '375px',
  },
};
