import { useState } from 'react';
import s from './ContactForm.module.css';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import actions from '../redux/contactsActions';


export default function ContactForm() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);


  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(
            contact => contact.userName.toLowerCase() === userName.toLowerCase()
          )) {
            return alert(`${userName} is already in contacts`);
          }
      dispatch(actions.addContact(userName, userNumber))
      reset();
  };

    const reset = () => {
      setUserName('');
      setUserNumber('');
  };

  const handleNameChange = evt => {
    setUserName(evt.target.value);
  }
  
  const handleNumberChange = evt => {
    setUserNumber(evt.target.value);
  }

      return (
          <div className={s.container}>
            <form className={s.form}
                onSubmit={handleSubmit}
            >
          <label className={s.label}>Name
            <input className={s.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={userName}
                onChange={handleNameChange}
              /></label>
            <label className={s.label}>Number
              <input className={s.input}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={userNumber}
                onChange={handleNumberChange}
/>
            </label>
          <button className={s.btn} type="submit">Add contact</button>
          </form> 
          </div>
        )
}
