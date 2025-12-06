/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Image from "next/image";

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
      redirectTo("https://m.matheuspa.com/");
    } else {
      redirectTo("https://matheuspa.com/");
    }
  };

  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <main className="grid h-screen place-content-center py-4 px-8" style={{ background: 'linear-gradient(154.87deg, #0066e3 -21.63%, #0050b4 112.27%)' }}>
      <div className="flex flex-col gap-12">
        <section className="flex flex-col gap-8">
          <h1 className="text-[10rem]">:(</h1>
          <h2 className="text-[2rem]">
            It looks like the page you are looking for does not exist.
          </h2>
          <span className="font-light text-[2rem]">
            Restarting on {restartPercentage}%
          </span>
        </section>
        <section className="flex flex-row flex-wrap gap-8">
          <div style={{ height: "200px", width: "200px" }}>
            <Image
              src="/images/qr-code-website.png"
              alt="QR Code"
              className="h-24"
              width={200}
              height={200}
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="flex flex-col gap-8 justify-between">
            <h1 className="font-normal text-2xl">
              System will restart and it will take you to a really useful page.
            </h1>
            <p className="font-light text-[1.3rem]">
              Error Code: <span>404 - Not found page</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
