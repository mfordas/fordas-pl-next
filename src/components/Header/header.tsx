import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Menu from "./menu";
import styles from "./header.module.scss";

export const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Link href="/">
            <a
              className={styles.link}
              style={
                router?.route === "/" ? { borderBottom: "2px solid #000" } : {}
              }
            >
              mfordas
            </a>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
};
