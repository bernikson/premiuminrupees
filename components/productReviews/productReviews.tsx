import React, { useState } from "react";
import styles from "./productReviews.module.css";
import StarEmpty from "../../svgs/StarEmpty";
import StarFull from "../../svgs/StarFull";
import { Button } from "primereact/button";

const ProductReviews = () => {
  const [review, setReview] = useState({ rating: 0 });
  const [nav, setNav] = useState("description");

  return (
    <aside className={styles["product_review"]}>
      <div className={styles["product_review_nav"]}>
        <div
          onClick={() => setNav("description")}
          className={
            nav === "description"
              ? styles["product_review_nav_active"]
              : undefined
          }
        >
          Description
        </div>
        <div
          onClick={() => setNav("review")}
          className={
            nav === "review" ? styles["product_review_nav_active"] : undefined
          }
        >
          Reviews
        </div>
      </div>
      {nav !== "description" ? (
        <section className={styles["product_review_main"]}>
          <div className={styles["product_review_write"]}>
            <input type="text" placeholder="Write a review..." />
            <Button>Submit</Button>
          </div>
          <div className={styles["product_reviews"]}>
            <div className={styles["product_reviews_content"]}>
              <div className={styles["product_reviews_user"]}>
                <div className={styles["product_reviews_user_wrapper"]}>
                  <div className={styles["product_reviews_user_avatar"]}></div>
                  <div className={styles["product_reviews_user_name"]}>
                    <h6>Jhon Smith</h6>
                    <span>25, Nov 2025</span>
                  </div>
                </div>
                <div className={styles["product_reviews_user_rating"]}>
                  <span>Rating: 5.0</span>
                  <div className={styles["product_details_rating"]}>
                    <div>
                      <StarFull />
                    </div>
                    <div>
                      {review.rating < 2 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 3 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 4 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 5 ? <StarEmpty /> : <StarFull />}
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac risus a risus elementum vehicula. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Aenean tristique nisl nec fermentum
                eleifend. Fusce tincidunt, tortor a elementum vehicula, magna
                ligula iaculis lacus, vel feugiat velit felis a metus.
              </p>
            </div>
            <div className={styles["product_reviews_content"]}>
              <div className={styles["product_reviews_user"]}>
                <div className={styles["product_reviews_user_wrapper"]}>
                  <div className={styles["product_reviews_user_avatar"]}></div>
                  <div className={styles["product_reviews_user_name"]}>
                    <h6>Jhon Smith</h6>
                    <span>25, Nov 2025</span>
                  </div>
                </div>
                <div className={styles["product_reviews_user_rating"]}>
                  <span>Rating: 5.0</span>
                  <div className={styles["product_details_rating"]}>
                    <div>
                      <StarFull />
                    </div>
                    <div>
                      {review.rating < 2 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 3 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 4 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 5 ? <StarEmpty /> : <StarFull />}
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac risus a risus elementum vehicula. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Aenean tristique nisl nec fermentum
                eleifend. Fusce tincidunt, tortor a elementum vehicula, magna
                ligula iaculis lacus, vel feugiat velit felis a metus.
              </p>
            </div>
            <div className={styles["product_reviews_content"]}>
              <div className={styles["product_reviews_user"]}>
                <div className={styles["product_reviews_user_wrapper"]}>
                  <div className={styles["product_reviews_user_avatar"]}></div>
                  <div className={styles["product_reviews_user_name"]}>
                    <h6>Jhon Smith</h6>
                    <span>25, Nov 2025</span>
                  </div>
                </div>
                <div className={styles["product_reviews_user_rating"]}>
                  <span>Rating: 5.0</span>
                  <div className={styles["product_details_rating"]}>
                    <div>
                      <StarFull />
                    </div>
                    <div>
                      {review.rating < 2 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 3 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 4 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 5 ? <StarEmpty /> : <StarFull />}
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac risus a risus elementum vehicula. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Aenean tristique nisl nec fermentum
                eleifend. Fusce tincidunt, tortor a elementum vehicula, magna
                ligula iaculis lacus, vel feugiat velit felis a metus.
              </p>
            </div>
            <div className={styles["product_reviews_content"]}>
              <div className={styles["product_reviews_user"]}>
                <div className={styles["product_reviews_user_wrapper"]}>
                  <div className={styles["product_reviews_user_avatar"]}></div>
                  <div className={styles["product_reviews_user_name"]}>
                    <h6>Jhon Smith</h6>
                    <span>25, Nov 2025</span>
                  </div>
                </div>
                <div className={styles["product_reviews_user_rating"]}>
                  <span>Rating: 5.0</span>
                  <div className={styles["product_details_rating"]}>
                    <div>
                      <StarFull />
                    </div>
                    <div>
                      {review.rating < 2 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 3 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 4 ? <StarEmpty /> : <StarFull />}
                    </div>
                    <div>
                      {review.rating < 5 ? <StarEmpty /> : <StarFull />}
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac risus a risus elementum vehicula. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Aenean tristique nisl nec fermentum
                eleifend. Fusce tincidunt, tortor a elementum vehicula, magna
                ligula iaculis lacus, vel feugiat velit felis a metus.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
          risus a risus elementum vehicula. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Aenean
          tristique nisl nec fermentum eleifend. Fusce tincidunt, tortor a
          elementum vehicula, magna ligula iaculis lacus, vel feugiat velit
          felis a metus.
        </p>
      )}
    </aside>
  );
};

export default React.memo(ProductReviews);
