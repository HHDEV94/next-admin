import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>{'<iAmHRDev />'}</div>
      <div className={styles.copyright}>© All Rights Reserved.</div>
    </div>
  )
}

export default Footer
