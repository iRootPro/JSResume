import React from "react";
import styles from "./header.module.css"
import Nav from "../nav/Nav";

const Header = () => {
    return (
        <div className={styles.header}>
            <Nav/>
        </div>
    )
}

export default Header