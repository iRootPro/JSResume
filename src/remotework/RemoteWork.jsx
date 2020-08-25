import React from "react"
import styles from "./remotework.module.css"
import stylesContainer from "./../common/styles/container.module.css"

const RemoteWork = () => {
    return (

        <div className={styles.remoteWorkBlock}>
            <div className={`${stylesContainer.container} ${styles.remoteWorkContainer}`}>
                <div>
                    <span>Предпочтителен вариант удаленной работы</span>
                </div>
                <div>
                    <button>Нанять меня</button>
                </div>

            </div>

        </div>

    )
}

export default RemoteWork