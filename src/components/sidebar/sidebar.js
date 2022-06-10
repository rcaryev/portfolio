import React, { useState } from "react";
import { useRouter } from "next/router";
import A from "../helpers/A";
import { data } from "assets/data/data";
import styles from "components/sidebar/sidebar-style.module.scss";
export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const isShow = () => setSideShow(!sideShow);

  const query = useRouter();
  let page;
  if (query.pathname === "/") page = "home";
  else page = query.pathname.slice(1);
  return (
    <div className={styles.mainAside}>
      <div className={styles.aside}>
        <div className={styles.logo}>
          <A
            classnames="font-clicker-script text-4xl font-bold"
            href={"/"}
            text="RC<span>'s portfolio</span>"
          />
        </div>

        <div className="menu content-center mb-20  ">
          <ul>
            {data.menuItems.map((item) => {
              return (
                <li
                  key={item.name}
                  className={
                    page === item.name.toLowerCase()
                      ? styles.active
                      : styles.menuItem
                  }>
                  {/* <Link href={item.href}> */}
                  <div className={styles.icon}>{item.icon}</div>

                  <div className={styles.alink}>
                    <A text={item.name} href={item.href} />
                  </div>
                  {/* </Link> */}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h6 className="text-black uppercase text-base"> ©copyright</h6>
        </div>
      </div>
    </div>
  );
}
