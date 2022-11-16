import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import topic_mojo from "../public/images/TOPICMOJO_ICON.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown} from "react-icons/io";
import { useState } from "react";
import ResNavigationbar from "./ResNavigationbar";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle, "toggle");
  };

  return (
    <div className={styles.navigation}>
      <nav className={styles.nav} id={styles.navbar}>
        <div className={styles.topic_mojo}>
          <Link legacyBehavior href="/">
          <a href="/">
          <Image className={styles.topic_mojo_img} src={topic_mojo} />
          </a>
          </Link>
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
        <div className={styles.button}>
          <button className={styles.btn_one}>Login</button>
          <button>Try for free</button>
        </div>
        <div className={styles.hamburger}>
          <GiHamburgerMenu className={styles.hamburger_svg} onClick={handleToggle} />
        </div>
        {toggle ? (
          <ResNavigationbar toggle={toggle} settoggle={setToggle}/>
        ) : (
          ""
        )}
      </nav>
    </div>
  );
};

export default Navbar;
