import React from 'react'
import Main from "../../components/Main/Main"
import Side from "../../components/Side/Side"
import styles from "./Home.module.css"
function Home() {
    return (
        <div className={styles.container}>
            <Side />
            <Main />
        </div>
    )
}

export default Home
