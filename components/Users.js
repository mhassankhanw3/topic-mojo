import Image from "next/image"
import message from "../public/images/msg.png"
import contact from "../public/images/contact.png"
import area from "../public/images/area.png"
import styles from "../styles/Users.module.css"

const Users = () => {
  return (
    <div className={styles.flex}>
        <div className={styles.block}>
            <div className={styles.black}>
                <Image className={styles.msg} src={message}/>
            </div>
                <div>
                    <h3>500M+</h3>
                    <p>Content Pieces</p>
                </div>
        </div>
        <div className={styles.block}>
            <div className={styles.black}>
                <Image className={styles.msg} src={contact}/>
            </div>
                <div>
                    <h3>200M+</h3>
                    <p>Influencers</p>
                </div>
        </div>
        <div className={styles.block}>
            <div className={styles.black}>
                <Image className={styles.msg} src={area}/>
            </div>
                <div>
                    <h3>50+</h3>
                    <p>Data Sources</p>
                </div>
        </div>
    </div>
  )
}

export default Users