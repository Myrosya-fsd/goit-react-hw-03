import React from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

function Contact({ name, number, onDelete }) {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <p>
          <FaUser className={styles.icon} /> {name}
        </p>
        <p>
          <FaPhoneAlt className={styles.icon} /> {number}
        </p>
      </div>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
