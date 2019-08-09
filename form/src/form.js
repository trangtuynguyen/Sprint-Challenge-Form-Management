import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched }) {

  return (
    <Form>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button>Submit!</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values,{resetForm, setSubmitting, setStatus}) {
    console.log(values);
    axios
        .post("https://reqres.in/api/users", values)
        .then(res => {
        console.log(res);
        setStatus(res.data)// Data was created successfully and logs to console
        resetForm();
        setSubmitting(false);
        })
        .catch(err => {
        console.log(err); // There was an error creating the data and logs to console
        setSubmitting(false);
        });
          
  }
})(LoginForm);

export default FormikLoginForm;
