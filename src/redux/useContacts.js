import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './operations';
import { getContacts } from './operations';
import { deleteContact } from './operations';
import * as actions from './slice';
import { selectContacts, selectFilter } from './selectors';
import { useCallback } from 'react';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const applyGetContacts = useCallback(
    () => dispatch(getContacts()),
    [dispatch]
  );

  const applyAddContact = newContact => dispatch(addContact(newContact));
  const applyDeleteContact = id => dispatch(deleteContact(id));
  const changeFilter = value => dispatch(actions.changeFilter(value));

  return {
    contacts,
    filter,
    applyAddContact,
    applyDeleteContact,
    changeFilter,
    applyGetContacts,
  };
};
