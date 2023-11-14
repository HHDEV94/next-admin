import Card from '../ui/dashboard/card/Card'
import Chart from '../ui/dashboard/chart/Chart'
import Rightbar from '../ui/dashboard/rightbar/Rightbar'
import Transactions from '../ui/dashboard/transactions/Transactions'
import styles from '../ui/dashboard/dashboard.module.css'

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </main>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  )
}

export default Dashboard
