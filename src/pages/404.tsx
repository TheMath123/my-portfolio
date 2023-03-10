import { useEffect, useState } from "react";

export default function Custom404() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(
      window.navigator.userAgent,
    );

    if (isMobile) {
      setIsMobile(isMobile);

      redirectTo("https://m.matheuspa.me/");
    } else {
      redirectTo("https://matheuspa.me/");
    }
    return;
  }, []);

  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  return <h1>404 - Page Not Found</h1>;
}
