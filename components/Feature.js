import Image from "next/image";
import React from "react";
import background from "../public/images/bg2.png"
import styles from "../styles/Hero.module.css";

const Feature = () => {
  return (
    <div className={styles.as_feature}>
      <div className={styles.bg}>
      <Image className={styles.bg_bg} src={background} />
      </div>
      <div>
        <div className={styles.bg_white}>

        </div>
      </div>
    </div>
  );
};

export default Feature;
