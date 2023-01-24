import {ErrorMessage} from "formik";
import styles from "../index.module.css";
import React from "react";

export default function Error({ name }) {
  return <ErrorMessage name={name} className={styles.error} component='span' />;
}