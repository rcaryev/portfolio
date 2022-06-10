import React from "react";
import styles from "./styles.module.scss";
export default function PageName({ page }) {
  return <h2 className={styles.ContentLayout}>{page}</h2>;
}
