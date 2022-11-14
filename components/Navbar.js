import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import topic_mojo from "../public/images/TOPICMOJO_ICON.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react"

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
     setToggle(!toggle)
     console.log(toggle, "toggle")

  }
   
  return (
    <div className={styles.navigation}>
    <nav className={styles.nav} id={styles.navbar}>
      <div className={styles.topic_mojo}>
        <Image className={styles.topic_mojo_img} src={topic_mojo} />
      </div>
      <ul>
        <Link legacyBehavior href="/">
          <li>
            <a href="/">TOOLS</a>
          </li>
        </Link>
        <Link legacyBehavior href="/">
          <li>
            <a href="/">PRICING</a>
          </li>
        </Link>
        <Link legacyBehavior href="/">
          <li>
            <a href="/">RESOURCES</a>
          </li>
        </Link>
      </ul>
      <div className={styles.button}>
        <button>Dashboard</button>
      </div>
      <div className={styles.hamburger}>
        <GiHamburgerMenu onClick={handleToggle} />
      
      </div>
      {toggle ? <div><resNavbar /></div> : ""}
    </nav>
    </div>
  );
};

export default Navbar;
