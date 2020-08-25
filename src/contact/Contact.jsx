import React from "react"
import styles from "./contact.module.css"
import stylesContainer from "./../common/styles/container.module.css"


const Contact = () => {
    return (
        <div className={styles.contactBlock}>
            <div className={`${stylesContainer.container} ${styles.container}`}>
                <h3>Контакты</h3>
                <div>
                    <form action="#" className={styles.formContact}>
                        <input type="text" value={"Name"}/>
                        <input type="text" value={"E-mail"}/>
                        <textarea value={"Message"} className={styles.textArea}></textarea>
                    </form>
                </div>
                <div>
                    <input type="submit" value={"Send"}/>
                </div>
            </div>
        </div>
    )
}

export default Contact