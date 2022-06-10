import React from "react";
import styles from "./about-content.module.scss";

export default function Table({ label, field }) {
  return (
    <div className={styles.table}>
      <strong>{label}: </strong>
      {field}
    </div>
  );
}
