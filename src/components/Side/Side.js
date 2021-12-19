import React from 'react'
import {useNavigate, useParams} from "react-router-dom"
import styles from "./Side.module.css"
import { useSelector,useDispatch } from 'react-redux'
import {changeQuestion,removeuser} from "../../redux/actions"
import { getAuth,signOut } from 'firebase/auth'


function Side() {
    const navigate=useNavigate()
    const params=useParams()
    const state = useSelector(state => state.questions)
    const {currentQ:Qno,user}=useSelector(state=>state.state)
    const {displayName}=user;
    const dispatch = useDispatch();

    const signOutHandler=async()=>{
      const auth=getAuth()
      const logout=await signOut(auth)
      dispatch(removeuser())
      navigate('/signIn')
    }
    return (
        <div className={styles.container}>
        <div className={styles.heading}>
            <h4>Hello {displayName}</h4>
            <button onClick={signOutHandler}>Signout</button>
        </div>
        <div className={styles.navcontainer}>
            {state.map((item)=>{ return (
                <div key={item.Qno} tabIndex={0} className={item.bookmark?styles.Qbookmark:(Qno==item.Qno)?styles.Qselected:styles.Qcontainer} onClick={()=>{dispatch(changeQuestion(item.Qno))}} >
                <span className={styles.Qtext}>{item.Qno}</span>
                </div>)})}
        </div>
        </div>
    )
}

export default Side
