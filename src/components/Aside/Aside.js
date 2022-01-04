import React from 'react'
import styles from './Aside.module.css'
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
function Aside() {
const {user} = useSelector(state => state.state)
    return (
        <div className={styles.asideContainer}>
            <div>
                <h3>Hi {user.displayName} </h3>
            </div>
            <ul>
                <li><Link to="/quiz">Write a test</Link></li>
                <li><Link to="/form">Create a test</Link></li>
                <li><Link to="/createdQuiz">View created tests</Link></li>
            </ul>
        </div>
    )
}

export default Aside
