import React from "react";
import styles from "./service-content.module.scss";
export default function ServiceItem({ icon, serviceName, text }) {
  return (
    <div className={styles.ServiceItem}>
      <div className={styles.inner}>
        <div className=" m-auto inline-block  items-center">{icon}</div>
        <h3>{serviceName}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
