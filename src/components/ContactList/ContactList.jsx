import React from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => onDelete(contact.id)}
        />
      ))}
    </ul>
  );
}

export default ContactList;
