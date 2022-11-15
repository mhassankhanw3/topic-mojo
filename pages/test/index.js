import Image from "next/image";
import React from "react";
import whitebg1 from "../../public/images/azcentral.png";
import whitebg2 from "../../public/images/daily.png";
import whitebg3 from "../../public/images/fort.png";
import whitebg4 from "../../public/images/times.png";
// import styles from "../../styles/globals.css"
// import styles from "../../styles/test.css"
export default function Test() {
  return (
    <div>
      <div className="white">
        <div className="image">
          <Image src={whitebg1} />
        </div>
        <div className="image">
          {" "}
          <Image src={whitebg2} />
        </div>
        <div className="image">
          {" "}
          <Image src={whitebg3} />
        </div>
        <div className="image">
          {" "}
          <Image src={whitebg4} />
        </div>
      </div>
    </div>
  );
}
