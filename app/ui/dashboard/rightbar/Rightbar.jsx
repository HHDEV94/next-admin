import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
import styles from './rightbar.module.css'

const Rightbar = () => {
  8
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src={'/astronaut.png'} alt='' fill className={styles.bg} />
        </div>
        <div className={styles.body}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, facere! Autem molestiae
            inventore, accusantium rerum ducimus eligendi itaque delectus doloremque.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled /> Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.body}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, facere! Autem molestiae
            inventore, accusantium rerum ducimus eligendi itaque delectus doloremque.
          </p>
          <button className={styles.button}>
            <MdReadMore /> Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
