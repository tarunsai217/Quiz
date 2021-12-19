import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/actions'
import visibilityIcon from "../../assets/visibilityIcon.svg"
import styles from "./SignIn.module.css"

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  
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

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      if (userCredential.user) {
        dispatch(setUser(userCredential.user)) 
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad User Credentials')
    }
  }

  return (
    <>
      <div className={styles.container}>
        <header>
          <p >Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
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

          <Link to='/forgotPassword' >
            Forgot Password?
          </Link>

          <div >
            <button >
                Sign In
            </button>
          </div>
        </form>


        <Link to='/signUp' >
          Sign Up Instead
        </Link>
      </div>
    </>
  )
}

export default SignIn
