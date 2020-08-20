import { baseTheme } from 'themes/baseTheme';

export const darkTheme = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: 'dark',
  },
  ...baseTheme.overrides,
};
