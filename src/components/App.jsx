import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './Contacts/Contacts';
import FilterContacts from './FilterContacts/FilterContacts';
import { useContacts } from 'redux/useContacts';

export default function App() {
  const { contacts, applyGetContacts } = useContacts();

  useEffect(() => {
    applyGetContacts();
  }, [applyGetContacts]);

  return (
    <>
      <ContactForm />
      <FilterContacts />
      {contacts.length > 0 && <ContactsList />}
    </>
  );
}
