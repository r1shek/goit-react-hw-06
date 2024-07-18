import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contactLists }) {
  return (
    <ul className={css.list}>
      {contactLists.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
