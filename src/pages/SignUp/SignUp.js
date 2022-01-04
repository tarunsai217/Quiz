import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp, onSnapshot } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'
import { useDispatch } from 'react-redux'
import { setUser,setInitialState } from '../../redux/actions'
import visibilityIcon from "../../assets/visibilityIcon.svg"
import styles from "./Signup.module.css"

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user
      dispatch(setUser(user)) 

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)
       
        const docRef = doc(db, "users", userCredential.user.uid);
        const unsub = onSnapshot(docRef, (doc) => {
          console.log("doc updated",doc.data())
          const {quizzes,createdQuizzes}=doc.data()
          dispatch(setInitialState(quizzes,createdQuizzes))
      });

      navigate('/quiz')
    } catch (error) {
      toast.error('Something went wrong with registration')
    }
  }

  return (
    <>
      <div className={styles.container}>
        <header>
          <p>Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChange}
          />
          <input
            type='email'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />

          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />
          <img
              src={visibilityIcon}
              alt='show password'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />

          </div>

          <div >
            <button >
                Sign Up
            </button>
          </div>
        </form>


        <Link to='/signIn' >
          Sign In Instead
        </Link>
      </div>
    </>
  )
}

export default SignUp