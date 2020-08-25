import React from "react";
import styles from "./nav.module.css"

const Nav = () => {
    return (
        <div className={styles.nav}>
            <a href="/">Главная</a>
            <a href="/">Скилы</a>
            <a href="/">Работы</a>
            <a href="/">Контакты</a>
        </div>
    )
}

export default Nav