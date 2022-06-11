import React from "react";
import { data } from "assets/data/data";
import Table from "./table";
import Timeline from "./timeline";
import styles from "./about-content.module.scss";
import Button from "../helpers/button";
import { FiDownload } from "react-icons/fi";
// import style from "./about-content.module.scss";

export default function AboutContent() {
  const info = data.info;
  const style = { margin: "0 0 0 15px", fontSize: "inherit" };

  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.mainTitle}>
        <h1 className={styles.hh1}>
          I am <span className=" ">Rahman Charyew</span> and I am new Web
          developer
        </h1>
        <p className="text-xl mb-6 ">{data.texts.p_lg}</p>
      </div>
      <section className="flex flex-wrap mb-10 ">
        <div className="mr-8">
          <Table label="Name" field={info.name} />
          <Table label="Surname" field={info.surname} />
          <Table label="Birthday" field={info.b_day} />
          <Table label="Country" field={info.from} />
        </div>
        <div className="mr-8">
          <Table label="e-mail" field={info.email} />
          <Table label="Website" field={info.website} />
          <Table label="Phone" field={info.phone} />
          <Table label="Postindex" field={info.index} />
        </div>
      </section>

      <Button text="Download CV" icon={icon} />
      <div className={styles.timeline}>
        <Timeline date="2013-2017" title="- Bachelor" text={data.texts.p_sm} />
        <Timeline
          date="2017-2019"
          title="- Magistracy"
          text={data.texts.p_sm}
        />
        <Timeline date="2019-2021" title="- test" text={data.texts.p_sm} />
      </div>
    </div>
  );
}
