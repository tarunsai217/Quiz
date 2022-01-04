import React from 'react'
import styles from './QuestionCard.module.css'
import tickIcon from "../../assets/tickIcon.svg"
import deleteIcon from "../../assets/deleteIcon.svg"
import editIcon from "../../assets/editIcon.svg"
import {useLocation} from 'react-router-dom'

function QuestionCard({item,index,del,edit}) {
    const {pathname}=useLocation();
    const Qstatus=pathname=='/form'?true:false;
    
    
    return (
        <div className={styles.questionCardContainer}>
                 <div className={styles.questionContainer}>
                 <span className={styles.question}>{index+1}{'}'}{item.question}</span>
                {Qstatus && <div className={styles.buttonContainer}>
                 <img alt="editIcon" onClick={()=>{edit(index+1,item)}} src={editIcon}/> 
                 <img alt="deleteIcon" onClick={()=>{del(item)}} src={deleteIcon}/>
                 
                 </div>}
                 </div>
                 <div className={styles.optionContainer}>
                 {item.options.map((option)=>{return <span key={option} className={styles.question}>{option} {item.answers.includes(option) && <img alt="tickIcon" className={styles.tick} src={tickIcon}/>}</span>})}
                 </div>
                
        </div>
    )
}

export default QuestionCard
