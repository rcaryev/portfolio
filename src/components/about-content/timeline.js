import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import styles from "./about-content.module.scss";

export default function Timeline({ text, title, date }) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineCircle}></div>
      <div className=" pl-10">
        <h3 className="flex text-lg text-orange-900">
          <div className="m-1">
            <BsCalendarDate />
          </div>
          {date}
        </h3>
        <h2 className="text-2xl">{title}</h2>
        <p className="pb-9">{text}</p>
      </div>
    </div>
  );
}
