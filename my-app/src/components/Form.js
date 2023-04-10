import { useState } from 'react';
import classes from './Form.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [generalError, setGeneralError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if each input field is empty and set an error message state accordingly
    if (!formData.name) {
      setNameError('Please enter your name');
    } else {
      setNameError('');
    }
    if (!formData.email) {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
    }
    if (!formData.message) {
      setMessageError('Please enter a message');
    } else {
      setMessageError('');
    }
    // Check if all input fields are empty and set a general error message state
    if (!formData.name && !formData.email && !formData.message) {
      setGeneralError('Please fill out all fields');
    } else {
      setGeneralError('');
    }
    // Submit the form data if there are no errors
    if (formData.name && formData.email && formData.message) {
      console.log(formData);
      setIsSubmitted(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      {isSubmitted ? (
        <p>Thanks for reaching out!</p>
      ) : (
        <form onSubmit={handleSubmit} className={classes.form}>
          <label htmlFor="name" className={classes.label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={classes.input}
          />
          {nameError && <p className={classes.error}>{nameError}</p>}

          <label htmlFor="email" className={classes.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={classes.input}
          />
          {emailError && <p className={classes.error}>{emailError}</p>}

          <label htmlFor="message" className={classes.label}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={classes.textarea}
          ></textarea>
          {messageError && <p className={classes.error}>{messageError}</p>}

          <button type="submit" className={classes.button}>
            Submit
          </button>
          {generalError && <p className={classes.error}>{generalError}</p>}
        </form>
      )}
    </>
  );
}

export default ContactForm;