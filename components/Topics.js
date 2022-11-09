import Image from "next/image";
import styles from "../styles/Topics.module.css";
import Buttons from "./Buttons";
import main1 from "../public/images/main1.png";
const Topics = () => {
  return (
    <div>
      <div>
        <div className={styles.flex_one}>
          <div className={styles.block}>
            <h2>Topic Model</h2>
            <p>
              Topic Model is the ultimate research tool for any topic. It
              fetches the data from all over the web that helps you to create
              engaging content.{" "}
            </p>
            <div className={styles.buttons}>
              <Buttons />
            </div>
          </div>
          <div className={styles.img}>
            <Image src={main1} />
          </div>
        </div>
        <div className={styles.flex_two}>
          <div className={styles.img}>
            <Image src={main1} />
          </div>
          <div className={styles.block2}>
            <h2>Question Finder</h2>
            <p>
              Gather questions about your topic across the web so you can easily
              understand users’ needs using Question Finder.
            </p>
            <div className={styles.buttons}>
              <Buttons />
            </div>
          </div>
        </div>
        <div className={styles.flex_one}>
          <div className={styles.block}>
            <h2>Search Listener</h2>
            <p>
              Search listener will help you be the first to cover all of the
              most unique and new searches around your query.
            </p>
            <div className={styles.buttons}>
              <Buttons />
            </div>
          </div>
          <div className={styles.img}>
            <Image src={main1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;
