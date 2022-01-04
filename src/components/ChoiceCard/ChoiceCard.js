import React from 'react'
import styles from "./ChoiceCard.module.css"
import delIcon from "../../assets/closeIcon.svg"
function ChoiceCard({item,remove}) {
    return (
            <div className={styles.options}> 
            <h4>{item}</h4>
            <img src={delIcon} onClick={()=>remove(item)}/>  
            </div>
            
        
    )
}

export default ChoiceCard
