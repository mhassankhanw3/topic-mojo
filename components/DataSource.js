import React from 'react'
import styles from "../styles/Data.module.css"
import Image from 'next/image'
import main4 from "../public/images/main4.png"


const DataSource = () => {
  return (
    <div>
        <div className={styles.data_source}>
    <div className={styles.flex_one_flex}>
          <div className={styles.block_block}>
            <h2>Data Sources that we support</h2>
            <p>
            TopicMojo supports 50+ data sources. It's the easiest and most effective way to do topic research.
            </p>
            <div className={styles.shadow_three}>
              <button className={styles.button}>Learn More</button>
            </div>
          </div>
          <div className={styles.img}>
            <Image className={styles.data_img} src={main4} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default DataSource