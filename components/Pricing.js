import styles from "../styles/Pricing.module.css";
import React from "react";
import Image from "next/image";
import new_one from "../public/images/newc1.png";
import new_two from "../public/images/newc2.png";
import new_three from "../public/images/new3.png";
import { HiPencil } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { CgScreen } from "react-icons/cg";
import { BsListUl } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { HiOutlineCheck } from "react-icons/hi";
import { BsX } from "react-icons/bs";

const Pricing = () => {
  return (
    <div className={styles.main_section}>
      <div>
        <div className={styles.price}>
          <h2>Pricing</h2>
          <p className={styles.price_p}>
            Hop on on any package & upgrade any time you want.
          </p>
          <div className={styles.flex_bill}>
            <p className={styles.flex_p_bill}>Bill Monthly</p>
            <div className={styles.gray}>
              <div className={styles.white}></div>
            </div>
            <p className={styles.flex_bill_year}>Bill Yearly</p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.bill_card}>
          <div className={styles.firstCard}>
            <div className={styles.pink}>
              <Image src={new_one} />
            </div>
            <div className={styles.free}>
              <h4>Free</h4>
              <p>Free Forever</p>
            </div>
            <div className={styles.dollar}>
              <p className={styles.dollar_one}>$</p>
              <p className={styles.dollar_two}>0</p>
            </div>
            <div className={styles.btn}>
              <button>Choose</button>
            </div>
            <div className={styles.allMsg}>
              <div className={styles.icons_flex}>
                <HiPencil className={styles.icon} />
                <h4>10 queries in Topic Model</h4>
              </div>
              <div className={styles.icons_flex}>
                <AiOutlineSearch className={styles.icon} />
                <h4>10 queries in Questions Finder</h4>
              </div>
              <div className={styles.icons_flex}>
                <CgScreen className={styles.icon} />
                <h4>0 Workspaces</h4>
              </div>
              <div className={styles.icons_flex}>
                <IoMdPeople className={styles.icon} />
                <h4>0 Team Members</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>SEO data</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>Custom domain</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>Custom domain</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>Team members</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>CSV Exports</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>Priority support</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>Outline not available</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>All languages supported</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsX className={styles.icon_cross} />
                <h4>Shareable reports</h4>
              </div>
            </div>
          </div>
          <div className={styles.secondCard}>
            <div className={styles.dark}>
              <Image src={new_two} />
            </div>
            <div className={styles.free_second}>
              <h4>Starter</h4>
              <p>For Startups & SMEs</p>
            </div>
            <div className={styles.dollar_second}>
              <p className={styles.dollar_one}>$</p>
              <p className={styles.dollar_two}>90</p>
              <p className={styles.dollar_three}>/mo</p>
            </div>
            <div className={styles.darkbtn}>
              <button>Choose</button>
            </div>
            <div className={styles.allMsg}>
              <div className={styles.icons_flex_second}>
                <HiPencil className={styles.icon_second} />
                <h4>10 queries in Topic Model</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <AiOutlineSearch className={styles.icon_second} />
                <h4>50 queries/mo in Questions Finder</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <CgScreen className={styles.icon_second} />
                <h4>10 queries/mo in Outline</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <BsListUl className={styles.icon_second} />
                <h4>Free SEO Writer</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <IoMdPeople className={styles.icon_second} />
                <h4>All languages supported</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>SEO data</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Search listening</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>All countries supported</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Shareable Reports</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Priority support</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Shareable Reports</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Search listening</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>CSV Exports</h4>
              </div>
              <div className={styles.icons_flex_second}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>All data sources included</h4>
              </div>
            </div>
          </div>
          <div className={styles.firstCard}>
            <div className={styles.yellow}>
              <Image src={new_one} />
            </div>
            <div className={styles.free}>
              <h4>Pro</h4>
              <p>For Brand & Agencies</p>
            </div>
            <div className={styles.dollar}>
              <p className={styles.dollar_one}>$</p>
              <p className={styles.dollar_two}>49.50</p>
              <p className={styles.dollar_three}>/mo</p>
            </div>
            <div className={styles.btn}>
              <button>Choose</button>
            </div>
            <div className={styles.allMsg}>
              <div className={styles.icons_flex}>
                <HiPencil className={styles.icon} />
                <h4>10 queries in Topic Model</h4>
              </div>
              <div className={styles.icons_flex}>
                <AiOutlineSearch className={styles.icon} />
                <h4>10 queries in Questions Finder</h4>
              </div>
              <div className={styles.icons_flex}>
                <CgScreen className={styles.icon} />
                <h4>0 Workspaces</h4>
              </div>
              <div className={styles.icons_flex}>
                <BsListUl className={styles.icon} />
                <h4>0 Saved Lists</h4>
              </div>
              <div className={styles.icons_flex}>
                <IoMdPeople className={styles.icon} />
                <h4>0 Team Members</h4>
              </div>
              <div className={styles.icons_flex}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>SEO data</h4>
              </div>
              <div className={styles.icons_flex}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Search listening</h4>
              </div>
              <div className={styles.icons_flex}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>5 Team members (+$10/member charged)</h4>
              </div>
              <div className={styles.icons_flex}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Live Chat Support</h4>
              </div>
              <div className={styles.icons_flex}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>All languages supported</h4>
              </div>
              <div className={styles.icons_flex}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>5 Team members (+$10/member charged)</h4>
              </div>
              <div className={styles.icons_flex}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Custom domain</h4>
              </div>
              <div className={styles.icons_flex}>
                <HiOutlineCheck className={styles.icon_cross_second} />
                <h4>Search listening</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
