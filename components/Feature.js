import Image from "next/image";
import React from "react";
import background from "../public/images/bg2.png"
import styles from "../styles/Hero.module.css";
import bg_img from "../public/images/newImg.png" 

const Feature = () => {
  return (
    <div className={styles.as_feature}>
      <div className={styles.bg}>
      <Image className={styles.bg_bg} src={background} />
      </div>
      <div>
        <div className={styles.bg_white}>
          <Image className={styles.bg_img} src={bg_img} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
