import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/TOPICMOJO_ICON.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.topic_mojo}>
          <Image src={logo} />
          <p>
            Get analysis features that will help you grow your online business.
          </p>
        </div>
        <div className={styles.lists}>
        <div className={styles.list}>
          <h4>Help</h4>
          <ul>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Pricing</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Contact</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Company</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Terms of Service</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Privacy policy</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.secondList}>
        <div className={styles.list}>
          <h4>TOOLS</h4>
          <ul>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Topic Model</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Questions Finde r</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Search Listener</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.list}>
          <h4>Resources</h4>
          <ul>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Blog</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Comparison  Asnwer the Public</a>
              </li>
            </Link>
            <Link legacyBehavior href="/">
              <li>
                <a href="/">Comparison  BuzzSumo</a>
              </li>
            </Link>
           
          </ul>
        </div>
        </div>
        </div>
      </div>
        <div className={styles.line}></div>
        <div className={styles.footer_text}>
            <p>Copyright TopicMojo 2021 . All rights Reserved. </p>
        </div>
    </div>
  );
};

export default Footer;
