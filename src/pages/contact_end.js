import styles from '../styles/contact_end.module.scss'

const ContactEnd = () => {
  return(
    <>
    <div className={styles.container}>
    <h1>お問い合わせありがとうございます</h1>
    <h2>無事送信されました</h2>
    <p>確認しますのでしばらくお待ちください</p>
    <p>遅くても翌日中には対応します</p>
    </div>
    </>

  )
}

export default ContactEnd