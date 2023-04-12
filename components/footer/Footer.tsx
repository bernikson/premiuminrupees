import React from "react";
import styles from "./Footer.module.css";
import Facebook from "../../svgs/Facebook";
import LOGO from "../../svgs/LOGO";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <section className={styles["footer_up"]}>
        <aside className={styles["footer_logo_area"]}>
          <div className={styles["footer_logo"]}>
            <div>
              <LOGO />
            </div>
            <h5>
              <span>PREMIUMIN</span>RUPEES
            </h5>
          </div>
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className={styles["footer_contact"]}>
            <div>
              <Facebook />
            </div>
            <div>
              <Facebook />
            </div>
            <div>
              <Facebook />
            </div>
          </div>
        </aside>
        <aside className={styles["footer_details_area"]}>
          <ul>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </aside>
      </section>
      <section className={styles["footer_down"]}>
        <span>© 2023 Ecommerce. </span>
      </section>
    </footer>
  );
};

export default React.memo(Footer);
