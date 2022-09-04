import { useRouter } from 'next/router'
import styles from '../styles/contact.module.scss'
import { useState } from 'react'

export default function Contact({ href }) {
 const router = useRouter()
   const handleClick = (e) => {
    e.preventDefault()
    router.push("./contact_end")
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message,
        submitted
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')
        }
    })
  }

  return (
    
    <div className={styles.container}>
      <form className={styles.main} >

        <div className={styles.inputGroup} >
          <label htmlFor='name'>Name</label>
          <input type='text' onChange={(e)=>{setName(e.target.value)}} name='name' className={styles.inputField} required id="name"/>
        </div>

        <div className={styles.inputGroup} >
          <label htmlFor='email'>Email</label>
          <input type='email' onChange={(e)=>{setEmail(e.target.value)}} name='email' className={styles.inputField} required
              minLength="10"
    maxLength="20"
    id="email"
    />
        </div>

        <div className={styles.inputGroup} >
          <label htmlFor='message'>Message</label>
          <input type='text' onChange={(e)=>{setMessage(e.target.value)}} name='message' className={styles.inputField} required id="message"/>
        </div>
    <a href={href} onClick={handleClick}>    
        <button type='submit' onClick={(e)=>{handleSubmit(e)}} >送信する</button>
    </a>
      </form >
    </div>
  )
  }

