import styles from "../styles/ResNavbar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import topic_mojo from "../public/images/TOPICMOJO_ICON.png";
import Image from "next/image";
import Link from "next/link";
import { BsX } from "react-icons/bs";
import Navbar from "./Navbar";

const ResNavbar = ({settoggle}) => {


  return (
    <>
    <div className={ styles.navigation }>
      <nav className={styles.nav} id={styles.navbar}>
        <div className={styles.flex_logo}>
          <div className={styles.topic_mojo}>
            <Link legacyBehavior href="/">
              <a href="/">
                <Image className={styles.topic_mojo_img} src={topic_mojo} />
              </a>
            </Link>
          </div>
          <div>
            <BsX  className={styles.crossIcon} onClick={() => settoggle(false)}/>
          </div>
        </div>
        <div className={styles.padd}>
          <div className={styles.head}>
            <h4>DASHBOARD</h4>
          </div>
          <ul>
            <Link legacyBehavior href="/">
              <li className={styles.arrowLine}>
                <a href="/">TOOLS</a>
                <IoIosArrowDown className={styles.linkArrow} />
                <div className={styles.cover}>
                  <ul className={styles.none}>
                    <Link legacyBehavior href="/">
                      <li>
                        <a href="/">Topic model</a>
                      </li>
                    </Link>
                    <Link legacyBehavior href="/">
                      <li>
                        <a href="/">Qustion Finder</a>
                      </li>
                    </Link>
                    <Link legacyBehavior href="/">
                      <li>
                        <a href="/">Search Listner</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">PRICING</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li className={styles.arrowLine}>
                <a href="/">RESOURCES</a>
                <IoIosArrowDown className={styles.linkArrow} />
                <div className={styles.cover}>
                  <ul className={styles.none}>
                    <Link legacyBehavior href="/">
                      <li>
                        <a href="/">Contact</a>
                      </li>
                    </Link>
                    <Link legacyBehavior href="/">
                      <li>
                        <a href="/">Comparision Answer The Public</a>
                      </li>
                    </Link>
                    <Link legacyBehavior href="/">
                      <li>
                        <a href="/">Comparision Buzzsumo</a>
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </Link>
          </ul>
          <div className={styles.btn_btn}>
            <div className={styles.btn_one}>
              <button>Login</button>
            </div>
            <div className={styles.btn_two}>
              <button>Try for free</button>
            </div>
          </div>
        </div>
        {/* <div className={styles.button}>
        <button className={styles.btn_one}>Login</button>
        <button>Try for free</button>
      </div> */}
      </nav>
    </div>
      </>
  );
};

export default ResNavbar;
