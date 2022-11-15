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
          <img className={styles.image_image} width="130" height='auto' src={"https://www.collegeessayadvisors.com/wp-content/uploads/2016/05/Digital-Journal-Logo.png"} />
        </div>
        <div className={styles.image}>
          {" "}
          <img className={styles.image_image} width="130" height='auto' src={"https://www.dailyherald.com/gfx/rwd/dh-logo-252x50.png"} />
        </div>
        <div className={styles.image}>
          {" "}
          <img className={styles.image_image} width="130" height='auto' src={"https://d21b0h47110qhi.cloudfront.net/az/download-TxHkm0J2f4l2d4o.png"} />
        </div>
        <div className={styles.image}>
          {" "}
          <img className={styles.image_image} width="130" height='auto' src={"https://bloximages.newyork1.vip.townnews.com/pawtuckettimes.com/content/tncms/custom/image/c414c900-f3f6-11e4-b2c1-7fdace25f2cc.png"} />
        </div>
        <div className={styles.image}>
          {" "}
          <img className={styles.image_image} width="130" height='auto' src={"https://www.fortwaynesnbc.com/pf/resources/images/mastheads/logos/wpta-nbc.svg?d=280"} />
        </div>
      </div>
          </div>
        </div>
      
    </div>
  );
};

export default Feature;
