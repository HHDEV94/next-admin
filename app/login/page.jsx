import styles from '@/app/ui/login/login.module.css'
import Image from 'next/image'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={'/login.svg'} alt='login_img' fill />
      </div>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input type='text' placeholder='jonhd@email.com' />
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input type='password' placeholder='*********' />
        </div>

        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
