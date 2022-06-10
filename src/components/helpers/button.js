import React from "react";
import styles from "./styles.module.scss";
export default function Button({ text, icon }) {
  return (
    <div className={styles.Button}>
      <div className="inline-block">{text}</div>
      <div className="inline-block px-2 -mb-1">{icon}</div>
    </div>
  );
}
