import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import right_arrow from "../public/images/right-arrow.png";
import left_arrow from "../public/images/left-arrow.png";
import cstar_one from "../public/images/cstar1.png";
import cstar_two from "../public/images/cstar2.png";
import man from "../public/images/man.png";
import styles from "../styles/DaisyCards.module.css";

const DaisyCards = () => {
  return (
    <div>
      <div className={styles.daisycards}>
        <div className={styles.arrow}>
          {/* <Image className={styles.mainarrow} src={left_arrow} /> */}
          <div className={styles.radius}>
            <FiArrowLeft className={styles.main_arrow} />
          </div>
          <h1>Listen to our users talk about TopicMojo</h1>
          <div className={styles.radius}>
            <FiArrowRight className={styles.main_arrow} />
          </div>
          {/* <Image className={styles.mainarrow} src={right_arrow} /> */}
        </div>
        <div className={styles.allcards}>
          <div className={styles.card_one}>
            <Image src={cstar_one} />
            <p className={styles.p_one}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.
            </p>
            <div className={styles.flex}>
              <Image src={man} />
              <div className={styles.block_one}>
                <h4>Daisy Carter</h4>
                <p>Product Development</p>
              </div>
            </div>
          </div>

          <div className={styles.card_three}>
            <Image src={cstar_one} />
            <p className={styles.p_one}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.
            </p>
            <div className={styles.flex}>
              <Image src={man} />
              <div className={styles.block_three}>
                <h4>Daisy Carter</h4>
                <p>Product Development</p>
              </div>
            </div>
          </div>
          <div className={styles.card_two}>
            <Image src={cstar_two} />
            <p className={styles.p_one}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.flex}>
              <Image src={man} />
              <div className={styles.block_two}>
                <h4>Daisy Carter</h4>
                <p>Product Development</p>
              </div>
            </div>
          </div>

          <div className={styles.card_five}>
            <Image src={cstar_one} />
            <p className={styles.p_one}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.
            </p>
            <div className={styles.flex}>
              <Image src={man} />
              <div className={styles.block_five}>
                <h4>Daisy Carter</h4>
                <p>Product Development</p>
              </div>
            </div>
          </div>
          <div className={styles.card_four}>
            <Image src={cstar_two} />
            <p className={styles.p_one}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.
              Pellentesque et placerat metus. Morbi aliquet felis sit amet.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.flex}>
              <Image src={man} />
              <div className={styles.block_four}>
                <h4>Daisy Carter</h4>
                <p>Product Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaisyCards;
