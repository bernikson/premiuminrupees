import styles from "./ProductCard.module.css";
import StarEmpty from "../../svgs/StarEmpty";
import StarFull from "../../svgs/StarFull";
import HeartTwo from "../../svgs/HeartTwo";

interface ProductCardProps {
  product: {
    price: number;
    oldPrice?: number;
    rating: number;
    name: string;
  };
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <li key={index} className={styles["product"]}>
      <aside className={styles["product_top"]}>
        <div className={styles["product_image"]}></div>
      </aside>
      <aside className={styles["product_bottom"]}>
        <div className={styles["product_bottom_price_wrapper"]}>
          <span>${product.price}</span>
          {product.oldPrice && (
            <span className={styles["product_bottom_old_price"]}>
              ${product.oldPrice}
            </span>
          )}
        </div>
        <div className={styles["product_details_rating"]}>
          <div>
            <StarFull />
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              {product.rating < i ? <StarEmpty /> : <StarFull />}
            </div>
          ))}
          <span>9.5</span>
        </div>
        <h3>{product.name}</h3>
        <div className={styles["product_wishlist"]}>
          <HeartTwo />
        </div>
      </aside>
    </li>
  );
};

export default ProductCard;
