import React,{useState} from 'react'
import styles from "./Form.module.css"
import QuestionCard from '../../components/QuestionCard/QuestionCard'
import ChoiceCard from '../../components/ChoiceCard/ChoiceCard'
import {getDoc, setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from '../../Firebase/Firebase'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import Aside from '../../components/Aside/Aside'
import data from "../../data/data"

function Form() {
    const [question, setQuestion] = useState('')
    const [option,setOption]=useState('')
    const [options, setOptions] = useState([])
    const [answer, setAnswer] = useState('')
    const [answers,setAnswers]= useState([])

    const initData=[{question:"What type of a language is HTML?",options:["Markup Language","Scripting Language","Network Protocol","Programming Language"],answers:["Markup Language","Scripting Language"],multipleAns:true}]
    const [Qs,setQs]=useState(initData)

    const [edit,setEdit]=useState(false)
    const [editData,setEditData]=useState({})

    const {user}=useSelector(state => state.state)
    
    const addOptionsHandler=(e)=>{
        e.preventDefault()
        setOptions((prevState)=>{return [...prevState,option]})
        setOption('');
    }
    const addAnswersHandler=(e)=>{
        e.preventDefault()
        setAnswers((prevState)=>{return [...prevState,answer]})
        setAnswer('');
    }
    const removeOptionHandler=(data)=>{
        setOptions(options.filter((item)=>{return item!==data}))        
    }

    const removeAnswerHandler=(data)=>{
        setAnswers(answers.filter(item=>{return item!==data}))
    }

    const submitHandler=(e)=>{
        e.preventDefault();
         let obj={question,options,answers,multipleAns:answers.length>1?true:false}
         console.log(obj);
         setQs((prevState)=>{return [...prevState,obj]})
         setQuestion('')
         setOption('')
         setAnswer('')
         setOptions([])
         setAnswers([])
         console.log("questions",Qs)
    }
    const editHandler=(e)=>{
        e.preventDefault()
        const {number}=editData
        let newQs=[...Qs]
        let obj={question,options,answers,multipleAns:answers.length>1?true:false}
        newQs[number-1]=obj
        setQs(newQs)

        setQuestion('')
        setOption('')
        setAnswer('')
        setOptions([])
        setAnswers([])
        setEdit(false)

    }

    const deleteQHandler=(data)=>{
         setQs((prevState)=>{return prevState.filter(item=>item!==data)})
    }

    const  editQHandler=(number,data)=>{
        console.log(number,data)
        setQuestion(data.question)
        setAnswer('')
        setAnswers(data.answers)
        setOption('')
        setOptions(data.options)
        setEdit(true)
        setEditData({number,data})
    }
    
    const createQuizHandler=async()=>{
        let formattedQs=Qs.map((item,index)=>{return {...item,Qno:index+1,bookmark:false,selectedAnswers:[]}})
        let quizDataCopy={questions:formattedQs,id:uuidv4(),name:"Technical quiz ",duration:'30min',attempts:1}
        console.log("quiz created",quizDataCopy.id,quizDataCopy);
        await setDoc(doc(db, 'quizzes', quizDataCopy.id), quizDataCopy)
        toast.success(`Your quiz id is ${quizDataCopy.id}`)
        const  docRef = doc(db, "users",user.uid);
        await updateDoc(docRef, {
          createdQuizzes: arrayUnion(quizDataCopy)
      });
    }

    
    return (
        <div className={styles.parentContainer}>
       <Aside/>
        <div className={styles.formContainer}>
            <div className={styles.side}>

                <form>
               <label for="question">Question:</label>
               <textarea rows="6" cols="50" id="question" onChange={(e) => setQuestion(e.target.value)} value={question}  />

               <label for="options">Options:</label>
               <div className={styles.optionContainer}>
                <div className={styles.field}>
               <input id="options" type="text" onChange={(e) => setOption(e.target.value)} value={option} />
               <button onClick={(e)=>{addOptionsHandler(e)}}>ADD</button>
               </div>
               <div>
               {
                   options.length>0 && options.map((item,index)=>{return <ChoiceCard key={index} item={item} remove={removeOptionHandler}/>})
               }
               </div>
               </div>
               
               
               <label for="answer">Correct Answer:</label>
               <div className={styles.answerContainer}>
                <div className={styles.field}>
               <input id="answer" type="text" onChange={(e) => setAnswer(e.target.value)} value={answer} />
               <button onClick={(e)=>{addAnswersHandler(e)}}>ADD</button>
               </div>
               <div>
               {
                   answers.length>0 && answers.map((item,index)=>{return <ChoiceCard key={index} item={item} remove={removeAnswerHandler}/>})
               }
               </div>
               </div>                   
               

               <button className={styles.submitButton} onClick={edit?(e)=>{editHandler(e)}:(e)=>{submitHandler(e)}}> {edit?"EDIT":"SUBMIT"}</button>
                </form>
            </div>
            <div className={styles.mainContainer}>
             {Qs.length>0 && Qs.map((item,index)=>{ return <QuestionCard key={index} item={item} index={index} del={deleteQHandler} edit={editQHandler}/> }) }
            
            <div>
                <button onClick={createQuizHandler}>CREATE QUIZ</button>
            </div>
            </div>
        </div></div>
    )
}

export default Form


