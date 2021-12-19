import React,{useState} from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import styles from "./Main.module.css"
import {saveUserChoice,changeModalStatus,changeQuestion} from "../../redux/actions"
import Summary from "../Summary/Summary"

function Main() {
    const params=useParams()
    const navigate=useNavigate()
    
    const state=useSelector(state=>state.questions);
    const {currentQ:Qno,showModal}=useSelector(state=>state.state)
    const dispatch = useDispatch()
    const {question,options,selectedAnswers}=state[Qno-1];
    

    
    const nextHandler=()=>{
        dispatch(changeQuestion(Qno+1))
    }

    const prevHandler=()=>{
        dispatch(changeQuestion(Qno-1))
    }

    const submitHandler=()=>{
        console.log('submit');
        dispatch(changeModalStatus(true));
    }
    
    const answerHandler=(e)=>{      
        const choice=e.target.name;
        dispatch(saveUserChoice(Qno,e.target.name));
    }

    return (
        <div className={styles.container}>
           <h6 className={styles.Qno}>{`Question ${Qno}`}</h6>

           <h4 className={styles.Q}>{question}</h4>
           {options.map((item)=>{return (<div key={item} className={styles.optionContainer}>
               <input onClick={(e)=>{answerHandler(e)}} type="checkbox" defaultChecked={selectedAnswers.includes(item)?true:null} name={item} />
               <label> {item}</label> 
               </div>)})}

           <div className={styles.buttonContainer}> 
           <button onClick={prevHandler} disabled={!(Qno>1)}>Previous</button>
           <button onClick={nextHandler} disabled={!(Qno<15)}> Next </button>
           {Qno==15 && <button onClick={submitHandler}>Submit</button>}
           </div>
           {showModal && <Summary/>}
        </div>
    )
}

export default Main

