import styles from "../styles/Pfeature.module.css";
import Image from "next/image";
import p_one from "../public/images/p1.png";
import p_two from "../public/images/p2.png";
import p_three from "../public/images/p3.png";
import p_four from "../public/images/p4.png";
import p_five from "../public/images/p5.png";
import p_six from "../public/images/p6.png";
import p_seven from "../public/images/p7.png";
import p_eight from "../public/images/p8.png";
import p_nine from "../public/images/p9.png";

const PlatformFeatures = () => {
  return (
    <>
      <h1 className={styles.main}>Platform Features</h1>
    <div className={styles.section}>
      <div className={styles.flex}>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_one} />
          </div>
          <div className={styles.txt}>
            <h4>Saved List</h4>
            <p>
              Save your all favorite queries, questions, and intents in one
              file.
            </p>
          </div>
        </div>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_two} />
          </div>
          <div className={styles.txt}>
            <h4>Workspaces</h4>
            <p>
              The user can be added to your account so that they work
              simultaneously.
            </p>
          </div>
        </div>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_three} />
          </div>
          <div className={styles.txt}>
            <h4>Teams</h4>
            <p>
              You can get your entire team on board with one project to complete
              it faster.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_four} />
          </div>
          <div className={styles.txt}>
            <h4>Priority Support</h4>
            <p>
              We are here for you 24/7 with priority support to help and resolve
              your queries.
            </p>
          </div>
        </div>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_five} />
          </div>
          <div className={styles.txt}>
            <h4>30-day History</h4>
            <p>
              You can maintain your report's history that allows you to see what
              was done in the past.
            </p>
          </div>
        </div>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_six} />
          </div>
          <div className={styles.txt}>
            <h4>CSV Export</h4>
            <p>
              You can export almost everything from your report in CSV format.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.flex}>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_seven} />
          </div>
          <div className={styles.txt}>
            <h4>Custom Domains</h4>
            <p>
              Share your reports that reflect your organization's brand and
              voice.
            </p>
          </div>
        </div>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_eight} />
          </div>
          <div className={styles.txt}>
            <h4>Languages</h4>
            <p>
              You can generate reports for 35 different languages with our
              easy-to-use interface.
            </p>
          </div>
        </div>
        <div className={styles.list_one}>
          <div className={styles.color}>
            <Image className={styles.color_img} src={p_nine} />
          </div>
          <div className={styles.txt}>
            <h4>Countries</h4>
            <p>
              Generate your report in any country of the world. We are
              supporting 215+ countries.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PlatformFeatures;
