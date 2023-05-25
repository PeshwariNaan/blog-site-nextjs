import ContactForm from '@/components/contact/ContactForm';
import Head from 'next/head';

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </div>
  );
};
export default ContactPage;
