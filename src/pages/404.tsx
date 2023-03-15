import { useEffect, useState } from "react";
import styles from "../styles/404.module.scss";

export default function Custom404() {
  const [restartPercentage, setRestartPercentage] = useState(0);
  let checkDevice = false;

  useEffect(() => {
    checkDevice = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
  }, []);

  useEffect(() => {
    let restartingTimer = setTimeout(() => {
      checkAndRedirect(checkDevice);
      changePercetageRestarting();
    }, calcTime());
    // return clearTimeout(restartingTimer);
  }, [restartPercentage]);

  const calcTime = () => {
    if (restartPercentage < 50) {
      return 1000;
    } else {
      return 2000;
    }
  };

  const changePercetageRestarting = () => {
    if (restartPercentage < 0 || restartPercentage >= 100) return;

    setRestartPercentage(restartPercentage + 10);
  };

  const checkAndRedirect = (isMobile: boolean) => {
    if (restartPercentage < 100) return;

    if (isMobile) {
      redirectTo("https://m.matheuspa.me/");
    } else {
      redirectTo("https://matheuspa.me/");
    }
  };

  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <section className={styles.titleBox}>
          <h1 className={styles.emojiFace}>:(</h1>
          <h2 className={styles.title}>
            It looks like the page you are looking for does not exist.
          </h2>
          <span className={styles.percentRestart}>
            Restarting on {restartPercentage}%
          </span>
        </section>
        <section className={styles.erroBox}>
          <img
            src="images\qr-code-website.png"
            alt="QR Code"
            className={styles.qrCode}
          />
          <div className={styles.msgError}>
            <h1>
              System will restart and it will take you to a really useful page.
            </h1>
            <p>
              Error Code: <span>404 - Not found page</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
