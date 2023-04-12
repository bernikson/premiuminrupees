import React, { useState } from "react";
import styles from "./ProductList.module.css";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import ProductCard from "../productCard/ProductCard";
import { useMediaQuery } from "react-responsive";

interface Product {
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
  name: string;
}

const productList: Product[] = [
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
  {
    image: "",
    price: 100,
    oldPrice: 140,
    rating: 8,
    name: "GoPro HERO6 4K Action Camera - Black",
  },
];

const ProductList: React.FC = () => {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);

  // const changePagination = useMediaQuery({
  //   query: "(min-width: 700px)",
  // });

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    console.log(event);
  };

  return (
    <section className={styles["product_list_wrapper"]}>
      <ul className={styles["product_list"]}>
        {productList.map((product, index) => {
          if (!(index > rows)) {
            return <ProductCard product={product} index={index} key={index} />;
          }
        })}
      </ul>

      <div className={styles["first_pag"]}>
        <Paginator
          first={first}
          rows={10}
          totalRecords={60}
          onPageChange={onPageChange}
          template={{ layout: "PrevPageLink CurrentPageReport NextPageLink" }}
        />
      </div>
      <div className={styles["second_pag"]}>
        <Paginator
          first={first}
          rows={rows}
          totalRecords={60}
          rowsPerPageOptions={[10, 20, 30]}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default React.memo(ProductList);
