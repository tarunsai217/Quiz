import React,{useState,useEffect} from 'react'
import styles from "./CreatedQuiz.module.css"
import QuizCard from "../../components/QuizCard/QuizCard"
import Aside from '../../components/Aside/Aside'
import {useSelector} from "react-redux"

function CreatedQuiz() {
    const {user,createdQuizzes:quiz}=useSelector(state=>state.state)

    return (
        <div className={styles.parentContainer}>
       <Aside/>
        <div className={styles.quizContainer}>
            {quiz.length>0 ?quiz.map((item)=>{return <QuizCard key={item.id} data={item}/> }):"You have not yet created any quizzes" }
        </div>
        </div>
    )
}

export default CreatedQuiz
