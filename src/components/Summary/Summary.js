import React from 'react'
import styles from "./Summary.module.css"
import { useSelector,useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import {changeModalStatus} from "../../redux/actions"
function Summary() {
    const state=useSelector(state=>state.questions)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const unasnwered=(state).filter(item=>{return item.selectedAnswers.length===0})
    const submitHandler=()=>{
        navigate('/final')
    }
    return (
        <div className={styles.container}>
            {unasnwered.length!==0 && <span> You are yet to answer </span>} 
             {unasnwered.map(item=>{return <span key={item.Qno}>{`${item.Qno} ,`}</span>})}
            {unasnwered.length!==0 &&<span>Questions</span>} 
         <h4>Do you still wish to submit?</h4>
         <div className={styles.buttonContainer}>
         <button onClick={submitHandler} className={styles.submitButton}> Submit</button>    
        <button onClick={()=>{dispatch(changeModalStatus(false))}} className={styles.goBackButton}> Go Back </button> 
         </div>

        </div>
    )
}

export default Summary
