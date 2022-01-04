import React from 'react'
import styles from './View.module.css'
import QuestionCard from '../QuestionCard/QuestionCard'
function View({questions:Qs,Setmodal}) {
    return (
        <div className={styles.parentContainer}>
           {Qs.map((item,index)=>{ return <QuestionCard key={index} item={item} index={index} />})}
           <button onClick={()=>{Setmodal(false)}}>Close</button>
        </div>
    )
}

export default View
