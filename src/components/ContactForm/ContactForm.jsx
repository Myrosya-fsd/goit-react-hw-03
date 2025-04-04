import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone format (e.g., 227-99-26)")
    .required("Phone number is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
});

function ContactForm({ onAdd }) {
  return (
    <div className={CSS.form}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
          };
          onAdd(newContact);
          resetForm();
        }}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            Name:
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </label>

          <label className={styles.label}>
            Phone:
            <Field className={styles.input} type="text" name="number" />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </label>

          <button className={styles.button} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
//import css from "./ContactForm.module.css";
//import { Formik, Form, Field, ErrorMessage } from "formik";
//import { useId } from "react";
//import * as Yup from "yup";
//import { nanoid } from "nanoid";

//const ContactSchema = Yup.object().shape({
//  name: Yup.string()
//    .min(3, "Too Short!")
//    .max(50, "Too Long!")
//    .required("Required"),
//  number: Yup.string()
//    .matches(/^\d+$/, "Only numbers are allowed!")
//    .min(3, "Too Short!")
//    .max(50, "Too Long!")
//    .required("Required"),
//});

//const initialValues = {
//  name: "",
//  number: "",
//};

//const ContactForm = ({ handleAddContact }) => {
//  const nameFieldId = useId();
//  const numberFieldId = useId();

//  const handleSubmit = (values, actions) => {
//    handleAddContact({
//      ...values,
//      id: nanoid(),
//    });
//    actions.resetForm();
//  };

//  return (
//    <Formik
//      initialValues={initialValues}
//      onSubmit={handleSubmit}
//      validationSchema={ContactSchema}
//    >
//      <Form className={css.contact}>
//        <div className={css.field}>
//          <label htmlFor={nameFieldId}>Name</label>
//          <Field
//            type="text"
//            name="name"
//            id={nameFieldId}
//            className={css.input}
//          />

//          <ErrorMessage name="name" component="span" className={css.error} />
//        </div>
//        <div className={css.field}>
//          <label htmlFor={numberFieldId}>Number</label>
//          <Field
//            type="text"
//            name="number"
//            id={numberFieldId}
//            className={css.input}
//          />

//          <ErrorMessage name="number" component="span" className={css.error} />
//        </div>
//        <button type="submit" className={css.btn}>
//          Add contact
//        </button>
//      </Form>
//    </Formik>
//  );
//};

//export default ContactForm;
