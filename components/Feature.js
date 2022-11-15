import Image from "next/image";
import React from "react";
import background from "../public/images/bg2.png"
import styles from "../styles/Hero.module.css";
import bg_img from "../public/images/newImg.png" 
import whitebg1 from "../public/images/azcentral.png";
import whitebg2 from "../public/images/daily.png";
import whitebg3 from "../public/images/fort.png";
import whitebg4 from "../public/images/times.png";

const Feature = () => {
  return (
    <div className={styles.as_feature}>
      <div className={styles.bg}>
      <Image className={styles.bg_bg} src={background} />
      </div>
        <div className={styles.bg_white}>
          <h2>As Featured On</h2>
          <div className={styles.bg_img}>
          <div className={styles.white}>
        <div className={styles.image}>
          <Image className={styles.image_image} src={whitebg1} />
        </div>
        <div className={styles.image}>
          {" "}
          <Image className={styles.image_image} src={whitebg2} />
        </div>
        <div className={styles.image}>
          {" "}
          <Image className={styles.image_image} src={whitebg3} />
        </div>
        <div className={styles.image}>
          {" "}
          <Image className={styles.image_image} src={whitebg4} />
        </div>
      </div>
          </div>
        </div>
      
    </div>
  );
};

export default Feature;
