import { useState } from 'react';

import PageContainer from '../components/containers/PageContainer';
import ContactForm from '../components/Form';
import classes from '../components/Form.module.css'

const Contact = () => {
  useState(() => {
    document.title = 'Joshua OBrien - Contact';
  }, []);

  return (
    <PageContainer title="Hit Me Up">
      <div className={classes.Contact}>
        Contact Me
        </div>
      <ContactForm />
    </PageContainer>
  );
};

export default Contact;