import Image from 'next/image';
import React from 'react'
import styles from "../styles/Topics.module.css";
import bground from "../public/images/bg1.png"
import launch from "../public/images/launch.png"

const LaunchOption = () => {
  return (
    <>
    <div className={styles.launch}>
        <div>
            <Image className={styles.bground} src={bground}/>
            <div className={styles.flex_launch}>
             <Image className={styles.launch_img} src={launch}/>
             <h2>Start your easy way out today with TopicMojo along with data that never upsets.</h2>
             <div className={styles.shadow_two}>
             <button className={styles.button}>Get Started at $10/mo</button>
             </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default LaunchOption