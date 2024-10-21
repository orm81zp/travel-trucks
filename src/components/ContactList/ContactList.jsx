import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ handleOnUpdate, handleOnDelete }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <div className={css.contactList}>
        {filteredContacts.length === 0 && <p>No contacts found</p>}
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onUpdate={handleOnUpdate}
            onDelete={handleOnDelete}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;
