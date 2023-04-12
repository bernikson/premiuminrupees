import React from "react";
import Logo from "../../svgs/LOGO";
import Heart from "../../svgs/Heart";
import Comment from "../../svgs/Comment";
import Cart from "../../svgs/Cart";
import User from "../../svgs/User";
import ArrowDown from "../../svgs/ArrowDown";
import Search from "../../svgs/Search";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import Auth from "../Auth/Auth";
import { useStore } from "../../store/store";

const categoryData: string[] = [
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

const Navbar = () => {
  const [authState, setAuthState] = useStore((state) => [
    state.authState,
    state.setAuthState,
  ]);

  const [dropdown, setDropdown] = useState({
    name: "All categories",
    state: false,
  });
  const [navDrop, setNavDrop] = useState(false);

  //! Misc

  return (
    <>
      <nav className={styles["nav"]}>
        <aside className={styles["nav_logo"]}>
          <Logo />
          <h5>
            <span>PREMIUMIN</span>RUPEES
          </h5>
        </aside>
        <aside className={styles["nav_search"]}>
          <input type="text" placeholder="Search" />
          <div className={styles["nav_dropdown"]}>
            <span
              className={dropdown.state ? styles["nav_dropdown_svg"] : ""}
              onClick={() =>
                setDropdown({ ...dropdown, state: !dropdown.state })
              }
            >
              <span>{dropdown.name}</span>
              <ArrowDown />
            </span>
            <ul className={dropdown.state ? styles["nav_dropdown_true"] : ""}>
              {categoryData.map((category, index) => (
                <li
                  style={
                    category === dropdown.name
                      ? { backgroundColor: "var(--secondary)" }
                      : undefined
                  }
                  key={index}
                  onClick={() => setDropdown({ name: category, state: false })}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <button>
            <span>Search</span>
            <Search />
          </button>
        </aside>
        <aside className={styles["nav_links"]}>
          <div className={styles["nav_ham"]}>
            <svg
              className={`ham hamRotate ham8 ${navDrop ? "active" : undefined}`}
              viewBox="0 0 100 100"
              width="80"
              onClick={() => setNavDrop(!navDrop)}
            >
              <path
                className="line top"
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
              />
              <path className="line middle" d="m 30,50 h 40" />
              <path
                className="line bottom"
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
              />
            </svg>
          </div>
          <div
            className={`${styles["nav_res_links"]} ${
              navDrop ? styles["nav_res_links_trigger"] : undefined
            }`}
          >
            {false ? (
              <>
                {" "}
                <Link href="/profile">
                  <User />
                  Profile
                </Link>
                <Link href="/contact">
                  <Comment />
                  Contact
                </Link>
                <Link href="/wishlist">
                  <Heart />
                  Wishlist
                </Link>
                <Link href="/cart">
                  <Cart />
                  Cart
                </Link>
              </>
            ) : (
              <>
                <button onClick={() => setAuthState(true, "login")}>
                  Login
                </button>
                <button onClick={() => setAuthState(true, "register")}>
                  Register
                </button>
              </>
            )}
          </div>
        </aside>
      </nav>
      <Auth />
    </>
  );
};

export default React.memo(Navbar);
