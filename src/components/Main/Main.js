import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styles from "./Main.module.css"
import {saveUserChoice,saveSingleUserChoice,changeModalStatus,changeQuestion} from "../../redux/actions"

function Main() {

    const state=useSelector(state=>state.questions);
    const {currentQ:Qno}=useSelector(state=>state.state)
    const {question,options,selectedAnswers,multipleAns}=state[Qno-1];
    const lastQno=state.length

    const dispatch = useDispatch()
    
    
    
    const nextHandler=()=>{
        dispatch(changeQuestion(Qno+1))
    }

    const prevHandler=()=>{
        dispatch(changeQuestion(Qno-1))
    }

    const submitHandler=()=>{
        dispatch(changeModalStatus(true));
    }
    
    const answerHandler=(e)=>{      
        const choice=e.target.name;
        multipleAns?dispatch(saveUserChoice(Qno,choice)):dispatch(saveSingleUserChoice(Qno,choice))
    }

    return (
        <div className={styles.container}>
           <h6 className={styles.Qno}>{`Question ${Qno}`}</h6>
           <h4 className={styles.Q}>{question}{multipleAns && <span>  (Select all that apply)</span>}</h4>
           {options.map((item)=>{return (<div key={item} className={styles.optionContainer}>
               <input onClick={(e)=>{answerHandler(e)}} type="checkbox"  checked={selectedAnswers.includes(item)?true:false} name={item} />
               <label> {item}</label> 
               </div>)})}

           <div className={styles.buttonContainer}> 
           <button onClick={prevHandler} disabled={!(Qno>1)}>Previous</button>
           <button onClick={nextHandler} disabled={!(Qno<lastQno)}> Next </button>
           {Qno===lastQno && <button onClick={submitHandler}>Submit</button>}
           </div>
           
        </div>
    )
}

export default Main

