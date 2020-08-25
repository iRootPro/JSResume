import React from "react";
import styles from "./main.module.css"
import stylesContainer from "./../common/styles/container.module.css"

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
            <div className={styles.intro}>
                <span>Привет,</span>
                <h1>меня зовут Александр</h1>
                <p>JS-разработчик</p>
            </div>
            <div className={styles.photo}></div>
            </div>
        </div>
    )
}

export default Main