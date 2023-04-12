import React, { useState } from "react";
import styles from "./productDetails.module.css";
import Tick from "../../svgs/Tick";
import StarEmpty from "../../svgs/StarEmpty";
import StarFull from "../../svgs/StarFull";
import Comment from "../../svgs/Comment";
import CartTwo from "../../svgs/CartTwo";
import HeartTwo from "../../svgs/HeartTwo";
import { Button } from "primereact/button";

const ProductDetails = () => {
  const [review, setReview] = useState({ rating: 0 });
  return (
    <aside className={styles["product_up"]}>
      <div className={styles["product_image"]}></div>
      <div className={styles["product_details"]}>
        <span>
          <Tick />
          In Stock
        </span>
        <h3>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h3>
        <section className={styles["product_details_stats_wrapper"]}>
          {/* <div className={styles["product_details_stats"]}> */}
          <div className={styles["product_details_rating"]}>
            <div>
              <StarFull />
            </div>
            <div>{review.rating < 2 ? <StarEmpty /> : <StarFull />}</div>
            <div>{review.rating < 3 ? <StarEmpty /> : <StarFull />}</div>
            <div>{review.rating < 4 ? <StarEmpty /> : <StarFull />}</div>
            <div>{review.rating < 5 ? <StarEmpty /> : <StarFull />}</div>
            <span>9.5</span>
          </div>
          {/* </div> */}
          <div className={styles["product_details_comment"]}>
            <Comment />
            32 reviews
          </div>
          <div className={styles["product_details_comment"]}>
            <CartTwo />
            154 sold
          </div>
        </section>
        <Button className={styles["product_add_to_cart"]}>Add to cart</Button>
        <div className={styles["product_add_to_wish"]}>
          <HeartTwo /> Add to wishlist
        </div>
      </div>
    </aside>
  );
};

export default React.memo(ProductDetails);
