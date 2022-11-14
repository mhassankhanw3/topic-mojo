import Image from "next/image";
import card_one from "../public/images/card1.png";
import card_two from "../public/images/card2.png";
import card_three from "../public/images/card3.png";
import styles from "../styles/Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.top}>
        <div className={styles.head}>
          <h2>Accurate SEO Data</h2>
          <p>
            Perform in-depth topic research with search volume, PPC difficulty,
            trends similarity, and more that helps you to rank higher on Google.
          </p>
        </div>
        <div className={styles.flex_cards}>
        <div className={styles.cards}>
            <div className={styles.color}>
                <Image className={styles.cards_img} src={card_one}/>
            </div>
            <div className={styles.text}>
                <h3>Sentiments & Hype</h3>
                <p>Understand the sentiments of people searhing for query and see the insight into what people are talking online based on their sentiment.</p>
            </div>
        </div>
        <div className={styles.cards}>
            <div className={styles.color2}>
                <Image className={styles.cards_img} src={card_two}/>
            </div>
            <div className={styles.text}>
                <h3>Search volume & Trends</h3>
                <p>Search volume shows you the number of searches around these queries in the last 12 months & Trends helps you to understand the hype of that query.</p>
            </div>
        </div>
        <div className={styles.cards}>
            <div className={styles.color3}>
                <Image className={styles.cards_img} src={card_three}/>
            </div>
            <div className={styles.text}>
                <h3>CPC & PPC Diff</h3>
                <p>Cost per click shows you the cost of clicking on that query & PPC Diff. helps you to understand how difficult is to rank on this query through PPC.</p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Cards;
