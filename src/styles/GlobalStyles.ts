import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Сброс стилей по умолчанию */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Базовые стили */
  body {
    font-family: 'Inter', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
  }
`;
