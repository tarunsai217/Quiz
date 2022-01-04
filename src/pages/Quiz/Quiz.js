import React,{useState,useEffect} from 'react'
import styles from "./Quiz.module.css"
import QuizCard from "../../components/QuizCard/QuizCard"
import Aside from '../../components/Aside/Aside'
import data from "../../data/data"
import { doc, updateDoc, arrayUnion, arrayRemove , getDoc} from "firebase/firestore";
import {db} from "../../Firebase/Firebase"
import {useSelector} from "react-redux"
import {toast} from "react-toastify"

function Quiz() {
const [quizId, setquizId] = useState('')
const {user,quizzes:quiz}=useSelector(state=>state.state)
console.log("quizzes",quiz,user);
const qui=[{id:"fcb8f5c6-b86d-4fb5-9e5c-cfc09727efdc",name:"Technical Quiz" ,description:"Javascript Beginner",duration:"30mins",attempts:1,
           questions:data}]


const enrollHandler=async()=>{
  const  docRe = doc(db, "quizzes",quizId);
  const docSnap = await getDoc(docRe);
  const  docRef = doc(db, "users",user.uid);
  await updateDoc(docRef, {
    quizzes: arrayUnion(docSnap.data())
});
toast.success("Enrolled")
}

   return  (
     <div className={styles.parentContainer}>
       <Aside/>
        <div className={styles.quizContainer}>
          <div className={styles.enroll}>
          <input value={quizId} onChange={(e)=>{setquizId(e.target.value)}}type="text" />
          <button onClick={enrollHandler}>Enroll</button>
          </div>
          {quiz.length>0 ?quiz.map((item)=>{return <QuizCard key={item.id} data={item}/> }):"There are no quizzes to attempt. Enroll to attempt a quiz"}
        </div></div>
    )
}

export default Quiz
