
import { useState, useEffect } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Container from './components/Container/Container';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import shortid from 'shortid';

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }, contacts) => {
    const entry = {
      name: name,
      number: number,
      id: shortid.generate(),
    };
    contacts.some(contacts => contacts.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : setContacts([entry, ...contacts]);
  };

  const getVisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) || contact.number.includes(filter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </Container>
  );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default App;             