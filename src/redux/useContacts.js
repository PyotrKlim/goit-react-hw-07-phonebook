import { useDispatch, useSelector } from 'react-redux';
import * as actions from './slice';
import { selectContacts, selectFilter } from './selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const addContact = newContact => dispatch(actions.addContact(newContact));
  const deleteContact = id => dispatch(actions.deleteContact(id));
  const changeFilter = value => dispatch(actions.changeFilter(value));

  return { contacts, filter, addContact, deleteContact, changeFilter };
};
