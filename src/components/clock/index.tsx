import { useEffect, useState } from "react";
import styles from "./clock.module.scss";

export function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let secDate = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(secDate);
  }, []);

  useEffect(() => {
    let secTime = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(secTime);
  });

  return (
    <div className={styles.container}>
      <time>
        {currentTime.toLocaleString("pt-br", {
          hour: "numeric",
          minute: "numeric"
        })}
      </time>
      <time>
        {currentDate.toLocaleString("pt-br", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        })}
      </time>
    </div>
  );
}
