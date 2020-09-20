import { Provider } from "react-redux";
import NextNprogress from "nextjs-progressbar";
import { useStore } from "../redux/store";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
body {
  padding: 0;
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

li {
  list-style: none;
}

* {
  box-sizing: border-box;
}
`;



export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <NextNprogress
          color="#29D"
          startPosition="0.3"
          stopDelayMs="200"
          height="3"
        />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
