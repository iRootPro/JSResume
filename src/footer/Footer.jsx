import React from "react"
import styles from "./footer.module.css"
import stylesContainer from "./../common/styles/container.module.css"

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
          <div className={`${stylesContainer.container} ${styles.container}`}>
            <h3>Неупокоев Алексанр</h3>
              <div className={styles.socialBlock}>
                  <div>Instagram</div>
                  <div>Telegram</div>
                  <div>Whatsapp</div>
              </div>
              <h5>Copyright 2020</h5>
          </div>

        </div>
    )
}

export default Footer