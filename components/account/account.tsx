import { useState } from "react";
import styles from "./account.module.css";
import { Button, Table, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Button as BTN } from "primereact/button";
import Image from "next/image";
import Trash from "../../svgs/Trash";
import toast from "react-hot-toast";
import ArrowDown from "../../svgs/ArrowDown";

const Account = () => {
  const [accountState, setAccountState] = useState("Personal Info");
  const [accountStateDrop, setAccountStateDrop] = useState(false);

  const accountNavList = [
    "Personal Info",
    "Orders",
    "Wishlist",
    "Referral Program",
  ];

  interface DataType {
    key: string;
    Product: JSX.Element;
    Price: JSX.Element;
    StockStatus: JSX.Element;
    Action: JSX.Element;
    Remove: JSX.Element;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Product",
      dataIndex: "Product",
      key: "Product",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "Price",
      key: "Price",
    },
    {
      title: "Stock Status",
      dataIndex: "StockStatus",
      key: "StockStatus",
    },
    {
      title: "Action",
      key: "Action",
      dataIndex: "Action",
    },
    {
      title: "Remove",
      key: "Remove",
      dataIndex: "Remove",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button className={styles["table_add_to_cart"]}>Add to Cart</Button>
      ),
      StockStatus: (
        <button
          className={
            true ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {true ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
    {
      key: "1",
      Product: (
        <div className={styles["table_product"]}>
          <Image
            style={{ borderRadius: "10px" }}
            alt="product"
            width={80}
            draggable={false}
            height={80}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <div>
            <h6>Hollow Port</h6>
            <span>Awesome yellow t-shirt</span>
          </div>
        </div>
      ),
      Price: <span className={styles["table_product_price"]}>100$</span>,
      Action: (
        <Button
          className={
            false
              ? styles["table_add_to_cart"]
              : styles["table_add_to_cart_contact"]
          }
        >
          {false ? "Add to Cart" : "Contact"}
        </Button>
      ),
      StockStatus: (
        <button
          className={
            false ? styles["table_stock"] : styles["table_out_of_stock"]
          }
        >
          {false ? "In Stock" : "Out Of Stock"}
        </button>
      ),
      Remove: (
        <div className={styles["table_trash"]}>
          <Trash />
        </div>
      ),
    },
  ];

  return (
    <div className={styles["myaccount"]}>
      <div>
        <h2>My Account</h2>
        <div className={styles["myaccount_dropdown"]}>
          <div onClick={() => setAccountStateDrop(!accountStateDrop)}>
            {accountState} <ArrowDown />
          </div>
          <ul
            className={
              accountStateDrop
                ? styles["myaccount_dropdown_trigger"]
                : undefined
            }
          >
            {accountNavList.map((list, index) => (
              <li
                key={index}
                className={
                  accountState === list
                    ? styles["myaccount_dropdown_selected_list"]
                    : undefined
                }
                onClick={() => setAccountState(list)}
              >
                {list}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <main>
        <aside className={styles["myaccount_nav"]}>
          <ul>
            {accountNavList.map((list, index) => (
              <li
                key={index}
                className={
                  accountState === list
                    ? styles["myaccount_selected_list"]
                    : undefined
                }
                onClick={() => setAccountState(list)}
              >
                {list}
              </li>
            ))}
          </ul>
        </aside>
        <aside className={styles["myaccount_content"]}>
          <h2>{accountState}</h2>
          {accountState === "Personal Info" && (
            <form action="">
              <fieldset>
                <input type="text" placeholder="First name*" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Last name*" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Address*" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Address line 2" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Country*" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="City/Town*" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Postcode / ZIP*" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Phone*" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Postcode / ZIP*" />
              </fieldset>
              <fieldset>
                <input type="text" placeholder="Phone*" />
              </fieldset>
            </form>
          )}

          {accountState === "Orders" && (
            <Table
              pagination={{ defaultPageSize: 4 }}
              className="orders_table"
              columns={columns}
              dataSource={data}
            />
          )}
          {accountState === "Wishlist" && (
            <Table
              pagination={{ defaultPageSize: 4 }}
              className="orders_table"
              columns={columns}
              dataSource={data}
            />
          )}
          {accountState === "Referral Program" && (
            <section className={styles["myaccount_referral"]}>
              <h3>Share your referral link with friends</h3>
              <Tooltip title="Copy" color="var(--secondary)">
                <span
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "https://elysiumgfx.com/kieran6k"
                    );
                    toast.success("Copied referral!", { id: "unique" });
                  }}
                >
                  https://elysiumgfx.com/kieran6k
                </span>
              </Tooltip>
            </section>
          )}
          {accountState === "Personal Info" && <button>Save Changes</button>}
        </aside>
      </main>
    </div>
  );
};

export default Account;
