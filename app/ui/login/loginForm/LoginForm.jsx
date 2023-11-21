'use client'
import { authenticate } from '@/app/lib/actions'
import { useFormState } from 'react-dom'
import styles from './loginForm.module.css'

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined)

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input type='text' name='username' placeholder='jonhd@email.com' />
      </div>

      <div className={styles.formGroup}>
        <label>Password</label>
        <input type='password' name='password' placeholder='*********' />
      </div>

      <button>Login</button>
      {state && state}
    </form>
  )
}

export default LoginForm
