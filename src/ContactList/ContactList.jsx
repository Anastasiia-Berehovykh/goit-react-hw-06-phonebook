
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../redux/contactsActions';

export default function ContactList() {
    const dispatch = useDispatch();

    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.contacts.filter);
    const normalizedStr = filter.toLocaleLowerCase();

    const filteredContacts = () => {
        return contacts.filter(contact => contact.userName.toLocaleLowerCase().includes(normalizedStr))
    }

    const visibleContacts =  filteredContacts();

    return (
        <div>
            {visibleContacts.length !== 0 && <ul className={s.list}>
            {visibleContacts.map(({id, userName, userNumber}) => <li key={id} className={s.item}>
             <p>{userName}: {userNumber}</p>
             <button className={s.btn} onClick={() => dispatch(actions.removeContact(id))} type="button">Delete</button>
         </li>)}
         
            
 </ul>}
     
    </div>
)
} 
