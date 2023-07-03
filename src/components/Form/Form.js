import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../contactSlice';
// import css from './Form.module.css';

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    dispatch(addContact({ id: Date.now(), name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <p>Name</p>
      <div>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          required
        />
        <p>Number</p>
        <input
          type="text"
          value={number}
          onChange={handleInputChange}
          name="number"
          required
        />
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
}