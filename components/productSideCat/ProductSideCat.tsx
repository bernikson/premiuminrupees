import React, { useState } from "react";
import styles from "./ProductSideCat.module.css";

const catList: string[] = [
  "All categories",
  "4Shared",
  "Alldebrid",
  "Bitshare",
  "Customize",
  "Daofile",
  "Datafile",
  "DepositFiles",
  "FileBand",
  "Fileboom",
  "Filefactory",
  "Filejoker",
  "FileNext.com",
  "Filepost",
  "Filesmonster",
  "Freakshare",
  "FURK",
  "Gigapeta",
  "GrandShare",
  "IcerBox",
  "Keep2Share.cc",
  "Lafiles",
  "NitroFlare",
  "NovaFile",
  "RapidGator.Net",
  "RareFile",
  "Sendspace",
  "SnakeFiles",
  "Software",
  "Terafile.co",
  "Tezfiles",
  "Turbobit",
  "Uploadboy.com",
  "Uploaded.net",
  "UptoBox",
  "WipFiles",
  "Xbuster",
  "Zevera",
];

const topSellingList: string[] = [
  "NitroFlare Account",
  "casterFlare Account",
  "LetBit Account",
  "NitroFlare Account",
  "Tech Account",
];

const ProductSideCat = () => {
  //! useState
  const [cat, chosenCat] = useState("All categories");

  return (
    <aside className={styles["product_nav"]}>
      <div>
        <span>Category</span>
        <ul>
          {catList.map((category, index) => (
            <li
              onClick={() => chosenCat(category)}
              className={
                cat === category ? styles["product_nav_active"] : undefined
              }
              key={index}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["product_nav_top_selling"]}>
        <span>Top Selling</span>
        <ul>
          {topSellingList.map((category, index) => (
            <li
              onClick={() => chosenCat(category)}
              className={
                cat === category ? styles["product_nav_active"] : undefined
              }
              key={index}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default React.memo(ProductSideCat);
