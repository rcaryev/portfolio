import Image from "next/image";
import React from "react";
import styles from "./portfolio-content.module.scss";
export default function PortfItem({ image, text }) {
  const imgStyle = { width: "100px", height: "auto" };
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.imgBox}>
        <Image src={image} layout="fill" />
      </div>
      <h1 className="text-center text-xl">{text}</h1>
    </div>
  );
}
