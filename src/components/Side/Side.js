import React from 'react'
import {useNavigate, useParams} from "react-router-dom"
import styles from "./Side.module.css"
import { useSelector,useDispatch } from 'react-redux'
import {changeQuestion} from "../../redux/actions"
import data from "../../data/data"
function Side() {
    const navigate=useNavigate()
    const params=useParams()
    const state = useSelector(state => state.questions)
    const {currentQ:Qno}=useSelector(state=>state.state)
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            {state.map((item)=>{ return (
                <div key={item.Qno} tabIndex={0} className={(Qno==item.Qno)?styles.Qselected:styles.Qcontainer} onClick={()=>{dispatch(changeQuestion(item.Qno))}} >
                <span className={styles.Qtext}>{item.Qno}</span>
                </div>)})}
        </div>
    )
}

export default Side
