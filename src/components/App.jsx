import ContactForm from './ContactForm/ContactForm';
import ContactsList from './Contacts/Contacts';
import FilterContacts from './FilterContacts/FilterContacts';
import { useContacts } from 'redux/useContacts';

export default function App() {
  const { contacts } = useContacts();

  return (
    <>
      <ContactForm />
      <FilterContacts />
      {contacts.length > 0 && <ContactsList />}
    </>
  );
}
