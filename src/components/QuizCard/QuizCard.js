import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import styles from "./QuizCard.module.css"
import {setQuestions} from "../../redux/actions"
import {useSelector,useDispatch} from "react-redux"
import View from '../../components/View/View'
import {useLocation} from 'react-router-dom'


function QuizCard({data}) {
    const {id,name,description,duration,attempts,questions}=data;
    const [modal,Setmodal]=useState(false);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {pathname}=useLocation();

    
    const quizStatus=pathname=='/quiz'?true:false;
    console.log('ppppp',quizStatus);
    const startTestHandler=()=>{
    dispatch(setQuestions(questions))
    navigate('/') 
    //subtract 1 from the attempt    
    }

    const viewTestHandler=()=>{
        Setmodal(true);
    }

    return (
        <div className={styles.quizCardContainer}>
            <div className={styles.quizContent}>
            <span>{name}</span>
            <span>{description}</span>
            <span>{duration}</span>
            {!quizStatus && <span>{id}</span>}
            <span>{`Attempts:${attempts}`}</span>
            </div>
            {<button disabled={attempts>0?false:true} onClick={quizStatus?startTestHandler:viewTestHandler}>{quizStatus?"Start Quiz":"View Quiz"}</button>}
            { modal && <View Setmodal={Setmodal} questions={questions}/>} 
        </div>
    )
}

export default QuizCard
