import React from "react"
import styles from "./project.module.css"

const Project = (props) => {
    return (
        <div className={styles.project}>
            <div className={styles.image}>
                <div className={styles.buttonBlock}>
                    <button>Смотреть</button>
                </div>

            </div>
            <div className={styles.title}>
                <h3>{props.title}</h3>
            </div>
            <div className={styles.description}>
                <span>{props.description}</span>
            </div>
        </div>
    )
}

export default Project