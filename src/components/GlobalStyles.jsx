import { injectGlobal } from '@emotion/css';

const GlobalStyles = () => injectGlobal`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  height: 100%;
  
}
*,
*::before,
*::after {
  box-sizing: inherit;
    margin: 0;
  padding: 0;
}
  
body {
  margin: 0;
    height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul{
    list-style: none;
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
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}`;

export default GlobalStyles;
