import { OpenWindowProvider, WindowContextProvider } from "../contexts";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <WindowContextProvider>
      <OpenWindowProvider>
        <Component {...pageProps} />
      </OpenWindowProvider>
    </WindowContextProvider>
  );
}

export default MyApp;
