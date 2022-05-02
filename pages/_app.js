import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/UI/Layout";
import store from "../store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
