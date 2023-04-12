import React from "react";
import styles from "../styles/checkout.module.css";
import Billing from "../components/Billing/Billing";
import Order from "../components/Order/Order";

const Checkout = () => {
  return (
    <main className={styles["checkout"]}>
      <section className={styles["checkout_label"]}>
        <h1>Checkout</h1>
        <span>There are 3 products in your cart</span>
      </section>
      <section className={styles["checkout_wrapper"]}>
        <aside>
          <Billing />
        </aside>
        <aside>
          <Order />
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
