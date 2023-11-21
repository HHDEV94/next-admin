import styles from '@/app/ui/login/login.module.css'
import Image from 'next/image'
import LoginForm from '../ui/login/loginForm/LoginForm'

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={'/login.svg'} alt='login_img' fill />
      </div>
      <LoginForm />
    </div>
  )
}

export default LoginPage
