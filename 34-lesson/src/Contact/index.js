import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
 
import SaveButton from './Components/SaveButton';
import Error from './Components/Error';

import styles from './index.module.css'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, '*  Must be > 3 characters')
    .max(15, '*  Must be 15 characters or less')
    .required('*  Required'),
  lastName: Yup.string()
    .min(3, '*  Must be > 3 characters')
    .max(20, '*  Must be 20 characters or less')
    .required('*  Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Only numbers are allowed')
    .min(12, '*  Must be 12 symbols')
    .max(12, '*  Must be 12 symbols')
    .required('*  Required'),
  email: Yup.string()
    .email('Invalid email adress')
    .required('*  Required'),
});

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
        <Form className={styles.container}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field name='firstName' />
            <Error name='firstName' />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field name='lastName' />
            <Error name='lastName' />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <Field name='phone' />
            <Error name='phone' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field name='email' />
            <Error name='email' />
          </div>
          <SaveButton />
        </Form>
    </Formik>
  );
}