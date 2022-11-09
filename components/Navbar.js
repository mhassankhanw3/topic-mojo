import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import topic_mojo from "../public/images/TOPICMOJO_ICON.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.topic_mojo}>
        <Image className={styles.topic_mojo_img} src={topic_mojo} />
      </div>
      <ul>
        <Link href="/">
          <li>TOOLS</li>
        </Link>
        <Link href="/">
          <li>PRICING</li>
        </Link>
        <Link href="/">
          <li>RESOURCES</li>
        </Link>
      </ul>
      <div className={styles.button}>
        <button>Dashboard</button>
      </div>
    </nav>
  );
};

export default Navbar;
