import clsx from "clsx";
import { FaPhoneAlt, FaTrash, FaUser, FaUserEdit } from "react-icons/fa";
import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import css from "./Contact.module.css";

const Contact = ({ contact, onUpdate, onDelete }) => {
  const handleUpdateClick = () => {
    onUpdate(contact);
  };

  const handleDeleteClick = () => {
    onDelete(contact);
  };

  const { name, number } = contact;

  return (
    <div className={css.contact}>
      <div className={css.content}>
        <div className={clsx(css.row, css.name)}>
          <FaUser />
          <span>{name}</span>
        </div>
        <div className={css.row}>
          <FaPhoneAlt />
          <span>{number}</span>
        </div>
      </div>
      <div className={css.actions}>
        <ButtonGroup
          variant={ButtonGroup.variants.OUTLINED}
          size={ButtonGroup.sizes.SMALL}
          orientation={ButtonGroup.orientations.VERTICAL}
        >
          <Button onClick={handleUpdateClick} startIcon={<FaUserEdit />}>
            Update
          </Button>
          <Button onClick={handleDeleteClick} startIcon={<FaTrash />}>
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Contact;
