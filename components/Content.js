import Image from "next/image";
import back_three from "../public/images/bg3.png";
import bulb from "../public/images/bulb.png";
import styles from "../styles/DaisyCards.module.css";

const Content = () => {
  return (
    <div>
        <div className={styles.mask}>
            <Image className={styles.bg} src={back_three} />
        </div>
        <div className={styles.bulb}>
            <Image className={styles.bulb_img} src={bulb} />
            <h2>Running out of content ideas?</h2>
            <p>Fear not, we have the perfect solution for you.</p>
            <button className={styles.button}>Get Started at $10/mo</button>
        </div>
    </div>
  )
}

export default Content