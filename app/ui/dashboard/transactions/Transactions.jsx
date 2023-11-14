import Image from 'next/image'
import styles from './transactions.module.css'
import TABLE_INFO from '@/constants/tableInfo'

//it Makes dynamic styles in "status" property
const classTableStatus = {
  done: styles.done,
  pending: styles.pending,
  cancelled: styles.cancelled
}

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {TABLE_INFO.map(item => (
            <tr key={item.id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={item.image}
                    alt='noavatar'
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {item.name}
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${classTableStatus[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions
