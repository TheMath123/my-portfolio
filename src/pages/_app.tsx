import "../styles/globals.scss";
import { OpenWindowProvider } from "../contexts/OpenWindowContext";

function MyApp({ Component, pageProps }) {
  return (
    <OpenWindowProvider>
      <Component {...pageProps} />
    </OpenWindowProvider>
  );
}

export default MyApp;
