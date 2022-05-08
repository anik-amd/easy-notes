import Head from "next/head";
import ErrorPage from "../components/UI/ErrorPage";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ErrorPage type="404" />
    </>
  );
};

export default Custom404;
