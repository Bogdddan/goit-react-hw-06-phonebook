import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../contactSlice';

export const ContactList = ({ filterContacts }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filterContacts.map((contact) => (
        <li key={contact.id}>
          <p>
            Name: {contact.name}, Number: {contact.number}
          </p>
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};