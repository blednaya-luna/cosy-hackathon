import { baseTheme } from 'themes/baseTheme';

export const lightTheme = {
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: 'light',
  },
  ...baseTheme.overrides,
};
