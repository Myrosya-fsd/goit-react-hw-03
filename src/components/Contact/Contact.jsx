import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, handleRemoveContact }) => {
  return (
    <div className={css.contact}>
      <div>
        <p>
          <FaUser className={css.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => handleRemoveContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
