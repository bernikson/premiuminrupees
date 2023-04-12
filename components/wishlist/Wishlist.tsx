import React, { useState } from "react";
import styles from "./Wishlist.module.css";
import Image from "next/image";
import CartThree from "../../svgs/CartThree";

interface wishlistItem {
  image: string;
  name: string;
  description: string;
  price: number;
}

const Wishlist = () => {
  //! useState
  const [wishList, setWishList] = useState<wishlistItem[]>([
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },

    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MQ023HN_A.jpg?v=1662718673",
      name: "GoPro",
      description: "GoPro HERO6 4K Action Camera - Black",
      price: 123,
    },
  ]);

  return (
    <section className={styles["wishlist"]}>
      <h4>Wishlist</h4>
      <ul>
        {wishList?.map((item, index) => (
          <li key={index}>
            <Image width={80} height={120} alt="wishlist" src={item?.image} />
            <h4>{item?.name}</h4>
            <p>{item?.description}</p>
            <h3>${item?.price}</h3>
            <button>
              <CartThree /> Move to cart
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Wishlist;
