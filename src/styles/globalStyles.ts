import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "century-gothic";
  src: url("https://use.typekit.net/af/40bdad/00000000000000007735ba11/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/40bdad/00000000000000007735ba11/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/40bdad/00000000000000007735ba11/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
  font-display: auto;
  font-style: normal;
  font-weight: 700;
  font-stretch: normal;
  unicode-range: U+0030-0039;
  font-display: swap;
}

@font-face {
  font-family: "century-gothic";
  src: url("https://use.typekit.net/af/0f9780/00000000000000007735ba15/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/0f9780/00000000000000007735ba15/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/0f9780/00000000000000007735ba15/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
  font-display: auto;
  font-style: italic;
  font-weight: 700;
  font-stretch: normal;
  unicode-range: U+0030-0039;
  font-display: swap;
}

@font-face {
  font-family: "century-gothic";
  src: url("https://use.typekit.net/af/9e55b6/00000000000000007735ba19/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/9e55b6/00000000000000007735ba19/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/9e55b6/00000000000000007735ba19/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
  font-display: auto;
  font-style: italic;
  font-weight: 400;
  font-stretch: normal;
  unicode-range: U+0030-0039;
  font-display: swap;
}

@font-face {
  font-family: "century-gothic";
  src: url("https://use.typekit.net/af/78c6b9/00000000000000007735ba1f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/78c6b9/00000000000000007735ba1f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/78c6b9/00000000000000007735ba1f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
  font-display: auto;
  font-style: normal;
  font-weight: 400;
  font-stretch: normal;
  unicode-range: U+0030-0039;
  font-display: swap;
}

.tk-century-gothic { font-family: "century-gothic",sans-serif; }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    font-size: 16px;
    font-weight: 400;
    color: #14042d;
    user-select: none;
    -webkit-user-drag: none;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    font-family: century-gothic, Apple SD Gothic Neo, AppleSDGothicNeo, sans-serif;
    line-height: 1;
    letter-spacing: 0.01em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
  }

  pre,
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  b,
  strong {
    font-weight: normal;
  }

  button {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
  }

  input {
    outline: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }

  a,
  button {
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .inner-wrapper {
    padding-left: 120px !important;
    padding-right: 120px !important;
  }

  .bold {
    font-weight: 700;
  }
`;
