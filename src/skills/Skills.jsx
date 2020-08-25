import React from "react";
import styles from "./skills.module.css"
import stylesContainer from "./../common/styles/container.module.css"
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Мои скилы:</h2>
                <div className={styles.skills}>
                    <Skill title={"HTML/CSS"} description={"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}/>
                    <Skill title={"JS"} description={"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}/>
                    <Skill title={"React"} description={"lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills

