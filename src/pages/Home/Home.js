import React from 'react'
import Main from "../../components/Main/Main"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Side from "../../components/Side/Side"
import Summary from '../../components/Summary/Summary';
import styles from "./Home.module.css"

function Home() {
    const {showModal}=useSelector(state=>state.state)
    const navigate=useNavigate();
    return (
        <>
        <button onClick={()=>{navigate('/quiz')}}>Go to quiz</button>
        <button onClick={()=>{navigate('/form')}}>Go to Form</button>
        <button onClick={()=>{navigate('/createdQuiz')}}>Go to created quiz</button>
        <div className={showModal?styles.modalContainer:styles.container}>
            <Side />
            <Main />
        </div>
        {showModal && <Summary/>}
        </>
    )
}

export default Home
