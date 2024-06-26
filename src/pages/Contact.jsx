import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      if (inputValue === '') {
        setEmail('')
        return setErrorMessage('Email is required')
      }
      if (!regex.test(inputValue)) {
        setEmail('')
        return setErrorMessage('Please enter a valid email')
      } else {
        setErrorMessage('')
      }
    }
    if (inputType === 'name') {
      if (inputValue === '') {
        setName('')
        return setErrorMessage('Name is required')
      }
    }
    if (inputType === 'message') {
      if (inputValue === '') {
        setMessage('')
        return setErrorMessage('Message is required')
      }
    }
  }

  return (
    <>
      <div className="form-field">
        <form className="contact-form">
          <h3>Let's talk!</h3>
          <label className="Name">Name</label>
          <input
            defaultValue={name}
            name="name"
            onBlur={handleInputChange}
            type="text"
            placeholder="name"
          />
          <label className="email">E-mail</label>
          <input
            defaultValue={email}
            name="email"
            onBlur={handleInputChange}
            type="email"
            placeholder="email"
          />
          <label className="message">Message</label>
          <textarea
            defaultValue={message}
            name='message'
            onBlur={handleInputChange}
            type='message'
            placeholder='message'
          />
          <button type="submit">Submit</button>
          {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </form>
      </div>
    </>
  )
}
