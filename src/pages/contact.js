import { useRouter } from 'next/router'
import styles from '../styles/contact.module.scss'
import { useState } from 'react'

export default function Contact({ href }) {
  const router = useRouter();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {

    if (!name,!email,!message) {
      alert('全ての項目をご記載ください')
      return false
    }else{

    e.preventDefault()
    console.log('Sending')

    let data = {
        name,
        email,
        message,
        submitted
    }

   await fetch('/api/contact', {
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
 
        await router.push("./contact_end");
  }   
 }


  return (
    
    <>
    <div className={styles.container}>
          <div className={styles.container2}>
      <form className={styles.main}>

        <div className={styles.inputGroup} >
          <label htmlFor='name' className={styles.p}>Name</label>
          <input type='text' 
          onChange={(e)=>{setName(e.target.value)}} 
          name='name' 
          className={styles.inputField} 
          required 
          id="name"/>
        </div>

        <div className={styles.inputGroup} >
          <label htmlFor='email' className={styles.p}>Email</label>
          <input type='email' 
          onChange={(e)=>{setEmail(e.target.value)}} 
          name='email' 
          className={styles.inputField} 
          required
          minLength="5"
          maxLength="40"
          id="email"
    />
      </div>

        <div className={styles.inputGroup}>
          <label htmlFor='message' className={styles.p}>Message</label>
          <textarea 
          type='textarea' 
          onChange={(e)=>{setMessage(e.target.value)}} name='message' 
          className={styles.inputField2} 
          required 
          id="message" />
        </div>
    <a href={href} >    
              <button className={styles.submit} type='submit' onClick={(e)=>{handleSubmit(e)}} >送信する</button>
    </a>
      </form >

      
    </div> 
     </div>    
     </>
  )


  }
  
