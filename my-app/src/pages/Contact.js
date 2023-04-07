import { useState } from 'react';

import PageContainer from '../components/containers/PageContainer';
import Navigation from '../components/containers/Navigation';
import ContactForm from '../components/Form';

const Contact = () => {
  useState(() => {
    document.title = 'Joshua OBrien - Contact';
  }, []);

  return (
    <PageContainer title="Hit Me Up">
      <Navigation title="Hit Me Up" />
      <ContactForm />
    </PageContainer>
  );
};

export default Contact;