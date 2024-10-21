import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import SearchBox from "../../components/SearchBox/SearchBox";
import { ROUTERS } from "../../const";
import { deleteContact, fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import {
  errorNotification,
  successNotification,
} from "../../utils/notification";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const navigate = useNavigate();
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [modalDeleteOpen, setDeleteModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [currentDeleteContact, setCurrentDeleteContact] = useState(null);

  const handleOnUpdate = (contact) => {
    setCurrentContact(contact);
    setModalUpdateOpen(true);
  };

  const handleOnUpdateClose = () => {
    setCurrentContact(null);
    setModalUpdateOpen(false);
  };

  const handleOnDelete = (contact) => {
    setCurrentDeleteContact(contact);
    setDeleteModalOpen(true);
  };

  const handleOnDeleteClose = () => {
    setCurrentDeleteContact(null);
    setDeleteModalOpen(false);
  };

  const handleOnDeleteClick = () => {
    if (currentDeleteContact) {
      dispatch(deleteContact(currentDeleteContact.id))
        .unwrap()
        .then(() => {
          handleOnDeleteClose();
          successNotification("Contact deleted");
        })
        .catch((error) => {
          if (error === "You are not authorized") {
            return navigate(ROUTERS.LOGIN);
          }
          errorNotification(error);
        });
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Contacts Book</h1>
      <div className={css.wrapper}>
        <ContactForm />
        <SearchBox />
        {isLoading ? (
          <Loader />
        ) : (
          <ContactList
            handleOnUpdate={handleOnUpdate}
            handleOnDelete={handleOnDelete}
          />
        )}
        {modalUpdateOpen && currentContact && (
          <Modal open={modalUpdateOpen} onClose={handleOnUpdateClose}>
            <h2>Update contact</h2>
            <ContactForm
              contact={currentContact}
              onUpdateClose={handleOnUpdateClose}
            />
          </Modal>
        )}
        {modalDeleteOpen && currentDeleteContact && (
          <Modal open={modalDeleteOpen} onClose={handleOnDeleteClose}>
            <h2>
              Delete contact, <strong>{currentDeleteContact.name}</strong>?
            </h2>
            <p>
              This action cannot be undone in the future. The selected contact
              will be deleted.
            </p>
            <Button
              onClick={handleOnDeleteClick}
              variant={Button.variants.CONTAINED}
            >
              Confirm
            </Button>
          </Modal>
        )}
      </div>
    </Container>
  );
};

export default ContactsPage;
