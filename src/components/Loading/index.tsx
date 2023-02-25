import styles from "./loading.module.scss";

export function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}
