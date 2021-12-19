import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import styles from "./Forgot.module.css"

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }

  return (
    <div className={styles.container}>
      <header>
        <p >Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'    
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <Link  to='/signIn'>
            Sign In
          </Link>

          <div>
            <button>
                Send Reset Link
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default ForgotPassword