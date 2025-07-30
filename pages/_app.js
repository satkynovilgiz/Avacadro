import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Educational Platform - Avocadro</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
