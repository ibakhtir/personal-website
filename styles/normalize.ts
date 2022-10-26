import { css } from "styled-components"

const normalize = css`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.5;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  textarea {
    resize: vertical;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  small {
    font-size: 80%;
  }

  img,
  svg {
    vertical-align: middle;
  }
`

export default normalize
