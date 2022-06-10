import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import img from "assets/images/avat.jpg";
import Button from "../helpers/button";
import Typed from "../helpers/typed";
import styles from "./home-content.module.scss";
export default function HomePage() {
  const query = useRouter();
  let page;
  if (query.pathname === "/") page = "home";
  else page = query.pathname.slice(1);

  return (
    <div className=" w-full flex  ">
      <div className={styles.maintext}>
        <h2 className={styles.htext1}>
          Hello my name is
          <strong className=" font-clicker-script"> Rahman C</strong>
        </h2>
        <h1 className={styles.htext2}>
          <div>
            <span>I'm a </span>
          </div>{" "}
          <Typed className="flex" />
        </h1>
        <p className=" text-xl mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          doloribus molestias. Dolorum alias rerum quae dolorem ut ipsum officia
          hic id aut, dolor incidunt odit numquam, perspiciatis reprehenderit.
          Asperiores, fugiat.
        </p>
        <Button text="More About Me" className={styles.button} />
      </div>
      <div className={styles.image}>
        <Image src={img} alt="my portfolio  avatar" />{" "}
      </div>
    </div>
  );
}
