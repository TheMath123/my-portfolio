import { ToggleWindowProvider, WindowContextProvider } from "../contexts";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: any) {
  return (
    <WindowContextProvider>
      <ToggleWindowProvider>
        <Component {...pageProps} />
      </ToggleWindowProvider>
    </WindowContextProvider>
  );
}

export default MyApp;
