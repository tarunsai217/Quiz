import React from 'react'
import Main from "../../components/Main/Main"
import { useSelector } from 'react-redux';
import Side from "../../components/Side/Side"
import Summary from '../../components/Summary/Summary';
import styles from "./Home.module.css"

function Home() {
    const {showModal}=useSelector(state=>state.state)

    return (
        <>
        <div className={showModal?styles.modalContainer:styles.container}>
            <Side />
            <Main />
        </div>
        {showModal && <Summary/>}
        </>
    )
}

export default Home
