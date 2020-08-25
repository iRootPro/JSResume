import React from "react";
import styles from "./projects.module.css"
import stylesContainer from "./../common/styles/container.module.css"
import Project from "./project/Project"

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <h2>Мои проекты</h2>
                <div className={styles.projects}>
                    <Project title={"Название проекта 1"} description={"Краткое описание проекта 1"}/>
                    <Project title={"Название проекта 2"} description={"Краткое описание проекта 2"}/>
                </div>
            </div>
        </div>
    )
}

export default Projects