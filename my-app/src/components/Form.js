import { useState } from 'react';
import classes from './Form.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server using Axios or fetch
    console.log(formData);
    setIsSubmitted(true);
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

          <button type="submit" className={classes.button}>
            Submit
          </button>
        </form>
      )}
    </>
  );
}

export default ContactForm;