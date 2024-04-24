import styles from "./Navigation.module.css"

const Navigation = () => {

  console.log(styles)

  return (
    <>
      <nav className={`${styles.navigation} container`}>
        <div className={styles.brand_logo}>
            <img src="/Images/BI_Structure_png_logo.png" alt="Brand-logo"/>
        </div>
        <div className={styles.navigation_bar}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navigation
