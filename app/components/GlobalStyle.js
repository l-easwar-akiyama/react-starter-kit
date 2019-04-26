import { css, createGlobalStyle } from 'styled-components';

const miniReset = css`
  /*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  img,
  embed,
  iframe,
  object,
  video {
    height: auto;
    max-width: 100%;
  }

  audio {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
`;

const textBase = css`
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 0.35em;
`;

const override = css`
  html,
  body,
  #root {
    display: flex;
    flex-grow: 1;
  }

  html {
    height: 100%;
  }

  body {
    background-color: #fafafa;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    padding: 0;
    border: 0;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }

  input {
    outline: 0;
    border: 0;

    &:focus {
      outline: 0;
    }
  }

  h1 {
    ${textBase}
    font-size: 6rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.01562em;
  }

  h2 {
    ${textBase}
    font-size: 3.75rem;
    font-weight: 300;
    line-height: 1;
    letter-spacing: -0.00833em;
  }

  h3 {
    ${textBase}
    font-size: 3rem;
    font-weight: 400;
    line-height: 1.04;
    letter-spacing: 0;
  }

  h4 {
    ${textBase}
    font-size: 2.125rem;
    font-weight: 400;
    line-height: 1.17;
    letter-spacing: 0.00735em;
  }

  h5 {
    ${textBase}
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.33;
    letter-spacing: 0;
  }

  h6 {
    ${textBase}
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.0075em;
  }
`;

/* stylelint-disable */
export default createGlobalStyle`${miniReset} ${override}`;
/* stylelint-enable */
