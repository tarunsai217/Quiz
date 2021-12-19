import React from 'react'
import styles from "./Summary.module.css"
import { useSelector,useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import {changeModalStatus} from "../../redux/actions"
function Summary() {
    const state=useSelector(state=>state.questions)
    const {showModal}=useSelector(state=>state.state)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    console.log("state",state,typeof state);
    const unasnwered=(state).filter(item=>{return item.selectedAnswers.length===0})
    console.log(unasnwered,"unanswered")

    const submitHandler=()=>{
        navigate('/final')
    }
    return (
        <div className={styles.container}>
            <span> You are yet to answer </span> 
             {unasnwered.map(item=>{return <span key={item.Qno}>{`${item.Qno} ,`}</span>})}
            <span>Questions</span> 
         <h4>Do you still wish to submit?</h4>
        <button onClick={submitHandler}> Submit</button>    
        <button onClick={()=>{dispatch(changeModalStatus(false))}} > Go Back </button> 
        </div>
    )
}

export default Summary
