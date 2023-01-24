import React from "react";
import {useFormikContext} from "formik";

export default function SaveButton() {
  const formik = useFormikContext();

  return <button type="submit" disabled={!formik.isValid}>Save</button>;
}