import React from "react";
import ProductSideCat from "../../components/productSideCat/ProductSideCat";
import ProductList from "../../components/productList/ProductList";
import styles from "../../styles/product.module.css";

const index = () => {
  return (
    <main className={styles["product_page"]}>
      <ProductSideCat />
      <ProductList />
    </main>
  );
};

export default index;
