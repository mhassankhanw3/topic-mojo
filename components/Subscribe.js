import Image from "next/image";
import newBack from "../public/images/newBack.png";
import styles from "../styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <div>
      <div className={styles.backGround}>
        <Image className={styles.position} src={newBack} />
        <div className={styles.text}>
          <h2>Subscribe to our newsletter</h2>
          <div className={styles.input}>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Email address" />
            <div className={styles.shadow_three}>
            <button className={styles.button}>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
