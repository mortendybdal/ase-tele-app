import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #006571;
    --color-secondary: #E67E23;
    --color-text: #3A3A39;
    --color-background: #f5f5f5;
    --color-white: #ffffff;
    --panel-width: 500px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    font-family: "ITC Avant Garde Gothic W01", Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
     background-color: var(--color-background);
    color: var(--color-text);

    @supports (-webkit-touch-callout: none) {
     min-height: -webkit-fill-available;
   }
  }

  [tabindex],
  a,
  button,
  input,
  label,
  select,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: 100%;
    font-weight: 400;
    line-height: inherit;
    margin: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
    text-decoration-skip-ink: auto;
  }


`;

export default GlobalStyle;
