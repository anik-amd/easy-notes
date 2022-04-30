import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/UI/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>
    </>
  );
}

export default MyApp;
