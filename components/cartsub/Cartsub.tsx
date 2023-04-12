import React, { useState } from "react";
import styles from "./Cartsub.module.css";
import ArrowLeft from "../../svgs/ArrowLeft";
import Image from "next/image";

interface cartItem {
  image: string;
  name: string;
  description: string;
  price: number;
}

const Cartsub = () => {
  //! useState
  const [cartItems, setCartItems] = useState<cartItem[]>([
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      name: "NordVPN Account",
      description: "Nitroflare.com access for 90 days.",
      price: 78.99,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      name: "NordVPN Account",
      description: "Nitroflare.com access for 90 days.",
      price: 78.99,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      name: "NordVPN Account",
      description: "Nitroflare.com access for 90 days.",
      price: 78.99,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      name: "NordVPN Account",
      description: "Nitroflare.com access for 90 days.",
      price: 78.99,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      name: "NordVPN Account",
      description: "Nitroflare.com access for 90 days.",
      price: 78.99,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      name: "NordVPN Account",
      description: "Nitroflare.com access for 90 days.",
      price: 78.99,
    },
  ]);

  return (
    <section className={styles["cart_sub"]}>
      <h2>My cart (3)</h2>
      <div>
        <aside>
          <ul>
            {cartItems?.map((item, index) => (
              <li key={index}>
                <Image
                  width={60}
                  height={60}
                  alt="Cart item"
                  src={item?.image}
                />
                <div className={styles["cart_sub_item_info"]}>
                  <h5>{item?.name}</h5>
                  <span>{item?.description}</span>
                  <button>Remove</button>
                </div>
                <h4>${item?.price}</h4>
              </li>
            ))}
          </ul>
          <div className={styles["cart_sub_main_buttons"]}>
            <button>
              <ArrowLeft /> Back to shop
            </button>
            <button>Remove all</button>
          </div>
        </aside>
        <aside>
          <section className={styles["cart_sub_coupon"]}>
            <span>Have a coupon?</span>
            <div className={styles["cart_sub_coupon_inner"]}>
              <input type="text" />
              <button>Apply</button>
            </div>
          </section>
          <section>
            <div className={styles["cart_sub_price_wrapper"]}>
              <span>Subtotal:</span>
              <span>$1403.97</span>
            </div>
            <div className={styles["cart_sub_price_wrapper"]}>
              <span>Discount:</span>
              <span className={styles["cart_sub_price_discount"]}>
                - $60.007
              </span>
            </div>
            <div className={styles["cart_sub_price_wrapper"]}>
              <span>Tax:</span>
              <span className={styles["cart_sub_price_tax"]}>+ $14.00</span>
            </div>
            <div className={styles["cart_sub_price_wrapper_total"]}>
              <span>Total:</span>
              <span>$1357.97</span>
            </div>
            <button>Checkout</button>
          </section>
        </aside>
      </div>
    </section>
  );
};

export default Cartsub;
