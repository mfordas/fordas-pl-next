import styles from "./footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerItem}>
      Copyright © Mateusz Fordas {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://nextjs.org/">Next.js</a>
    </div>
  </footer>
);
