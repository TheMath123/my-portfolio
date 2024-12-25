import Head from "next/head";
import { ToggleWindowProvider, WindowContextProvider } from "../contexts";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <script defer src="https://unami-dev.onrender.com/script.js" data-website-id="cb63854d-3d45-4b2c-b27f-2a90f723d518"></script>
        <meta name="theme-color" content="#ffffff" />
        <title>Matheus Agostinho - Portfolio</title>
      </Head>
      <WindowContextProvider>
        <ToggleWindowProvider>
          <Component {...pageProps} />
        </ToggleWindowProvider>
      </WindowContextProvider>
    </>
  );
}

export default MyApp;
