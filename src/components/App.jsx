import Section from '../Section';
import ContactForm from 'ContactForm';
import ContactList from 'ContactList';
import { useSelector } from 'react-redux';
import Filter from 'Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div>
      
      <Section title="Phonebook">
        <ContactForm />
</Section>
      <Section title="Contacts">
        <Filter/>
        {contacts.length !== 0 ? <ContactList /> : <p>Here will be your contacts</p>}
        </Section>
    </div>
  );
};