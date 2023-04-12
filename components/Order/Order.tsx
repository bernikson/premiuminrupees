import React from "react";
import styles from "./Order.module.css";
import Image from "next/image";
import { Button } from "primereact/button";

const Order = () => {
  return (
    <section className={styles["order"]}>
      <h2>Your Order</h2>
      <section className={styles["order_place"]}>
        <div className={styles["order_headline"]}>
          <span>Product</span>
          <span>Subtotal</span>
        </div>
        <ul>
          <li>
            <Image
              width={55}
              height={50}
              alt="order"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <div className={styles["order_details"]}>
              <h6>React</h6>
              <span>Quantity: 1</span>
            </div>
            <span>$40</span>
          </li>
          <li>
            <Image
              width={55}
              height={50}
              alt="order"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <div className={styles["order_details"]}>
              <h6>React</h6>
              <span>Quantity: 1</span>
            </div>
            <span>$40</span>
          </li>
          <li>
            <Image
              width={55}
              height={50}
              alt="order"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <div className={styles["order_details"]}>
              <h6>React</h6>
              <span>Quantity: 1</span>
            </div>
            <span>$40</span>
          </li>
          <li>
            <Image
              width={55}
              height={50}
              alt="order"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <div className={styles["order_details"]}>
              <h6>React</h6>
              <span>Quantity: 1</span>
            </div>
            <span>$40</span>
          </li>
          <li>
            <Image
              width={55}
              height={50}
              alt="order"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <div className={styles["order_details"]}>
              <h6>React</h6>
              <span>Quantity: 1</span>
            </div>
            <span>$40</span>
          </li>
          <li>
            <Image
              width={55}
              height={50}
              alt="order"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <div className={styles["order_details"]}>
              <h6>React</h6>
              <span>Quantity: 1</span>
            </div>
            <span>$40</span>
          </li>
        </ul>
        <div className={styles["order_seperator"]}>
          <div>
            <span>Subtotal</span>
            <span>$108</span>
          </div>
          <div>
            <span>Shipping Cost (+)</span>
            <span>$10.85</span>
          </div>
          <div>
            <span>Discount (-)</span>
            <span>$9.00</span>
          </div>
        </div>
        <div className={styles["order_seperator"]}>
          <div>
            <span>Total Payable</span>
            <span>$88.15</span>
          </div>
        </div>
      </section>
      <Button>Place an Order</Button>
    </section>
  );
};

export default Order;
