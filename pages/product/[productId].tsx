import React from "react";
import styles from "../../styles/productId.module.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ProductID = () => {
  const ProductDetails = dynamic(
    () => import("../../components/productDetails/productDetails"),
    {
      suspense: true,
    }
  );
  const ProductReviews = dynamic(
    () => import("../../components/productReviews/productReviews"),
    {
      suspense: true,
    }
  );

  return (
    <main className={styles["productId"]}>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetails />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductReviews />
      </Suspense>
    </main>
  );
};

export default ProductID;
