import styles from "../styles/resNavbar.module.css"

const resNavbar = () => {
  return (
     <nav className={styles.nav} id={styles.navbar}>
      <div className={styles.topic_mojo}>
        <Image className={styles.topic_mojo_img} src={topic_mojo} />
      </div>
      <ul>
        <Link legacyBehavior href="/">
          <li>
            <a href="/">TOOLS</a>
          </li>
        </Link>
        <Link legacyBehavior href="/">
          <li>
            <a href="/">PRICING</a>
          </li>
        </Link>
        <Link legacyBehavior href="/">
          <li>
            <a href="/">RESOURCES</a>
          </li>
        </Link>
      </ul>
      <div className={styles.button}>
        <button>Dashboard</button>
      </div>
      <div className={styles.hamburger}>
        <GiHamburgerMenu onClick={handleToggle} />
      </div>
      </nav>
  )
}

export default resNavbar