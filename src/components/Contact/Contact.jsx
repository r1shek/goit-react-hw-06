import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button onClick={() => dispatch(deleteContact(id))} className={css.btn}>
        Delete
      </button>
    </div>
  );
}
