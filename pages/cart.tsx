import React from "react";
import styles from "../styles/cart.module.css";
import Cartsub from "../components/cartsub/Cartsub";
import Wishlist from "../components/wishlist/Wishlist";

const Cart = () => {
  return (
    <main className={styles["cart"]}>
      <Cartsub />
      <Wishlist />
    </main>
  );
};

export default Cart;
