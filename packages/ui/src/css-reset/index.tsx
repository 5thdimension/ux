import styled, { createGlobalStyle, css } from 'styled-components';
import preflight from './preflight';
import { theme } from '../theme/theme';

// Should type as theme here, however this type
// has optional properties. Need to enforce type to ensure
// these values are defined
const defaultConfig = (theme: any) => ({
  light: {
    color: theme.colors.ink[900],
    bg: undefined as any,
    borderColor: '#E5E5EC', // TODO: replace this with theme color
    placeholderColor: theme.colors.ink[400],
  },
  dark: {
    color: 'white',
    bg: theme.colors.ink[900],
    borderColor: theme.colors.ink[600],
    placeholderColor: theme.colors.ink[500],
  },
});

const { color, bg, borderColor, placeholderColor } = defaultConfig(theme).light;

const cssReset = css`
  ${preflight};

  html {
    line-height: 1.5;
    color: ${color};
    background-color: ${bg};
    font-family: ${theme && theme.fonts && theme.fonts.body};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: ${borderColor};
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: ${placeholderColor};
  }

  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: ${placeholderColor};
  }

  input::placeholder,
  textarea::placeholder {
    color: ${placeholderColor};
  }
`;

const CSSReset = createGlobalStyle`${cssReset}`;

const ScopedCSSReset = styled.div`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border-color: ${borderColor};
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: ${placeholderColor};
  }

  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: ${placeholderColor};
  }

  input::placeholder,
  textarea::placeholder {
    color: ${placeholderColor};
  }

  body,
  div,
  span {
    text-align: initial;
    font-family: ${theme && theme.fonts && theme.fonts.body};
  }
`;

export { CSSReset, ScopedCSSReset };
