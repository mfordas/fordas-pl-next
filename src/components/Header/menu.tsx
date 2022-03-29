import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "./menu.module.scss";

const Menu = () => {
  const router = useRouter();

  return (
    <nav className={styles.menuWrap}>
      <input type="checkbox" className={styles.toggler} />
      <div className={styles.hamburger}>
        <div></div>
      </div>
      <div className={styles.menu}>
        <div>
          <div>
            <Link href="/blog">
              <a
                className={styles.menuItem}
                style={
                  router?.route === "/blog"
                    ? { borderBottom: "2px solid #000" }
                    : {}
                }
              >
                blog
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={styles.menuItem}
                style={
                  router?.route === "/contact"
                    ? { borderBottom: "2px solid #000" }
                    : {}
                }
              >
                kontakt
              </a>
            </Link>
            <a
              href={"https://fordas.pl/Portfolio/index"}
              target="_blank"
              rel="noreferrer"
              className={styles.menuItem}
              style={{
                backgroundColor: "#ffd000",
                borderRadius: "5px",
                boxShadow: "2px 2px 2px 2px #888980",
              }}
            >
              portfolio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
