import ContactForm from '../components/ContactForm';
import ContentWrapper from '../components/ContentWrapper';
import Main from '../components/Main';

const Contact = () => {
  return (
    <ContentWrapper>
      <Main page="Contact">
        <ContactForm />
      </Main>
    </ContentWrapper>
  );
};

export default Contact;
