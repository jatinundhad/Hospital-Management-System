import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Logo from "../UI/Logo";

function LoginForm() {
  const initialValues = { PatientName: "", Contact: "", Email: "" };
  const [formFields, setFormFields] = useState(initialValues);

  function FormFieldsHandler(e) {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <div className={styles.container}>
        <section>
          <Logo sx={{ width: "200px", height: "150px" }} />
          <Input
            Fieldname="Patient Name"
            name="PatientName"
            required={true}
            placeholder="Rahul Shah"
            value={formFields.PatientName}
            onChange={FormFieldsHandler}
            onBlur={FormFieldsHandler}
          />
          <Input
            Fieldname="Contact"
            name="Contact"
            Type="number"
            placeholder="i.e. 1234567890"
            value={formFields.Contact}
            required={true}
            onChange={FormFieldsHandler}
            onBlur={FormFieldsHandler}
          />
          <Input
            name="Email"
            Fieldname="Email"
            Type="email"
            value={formFields.Email}
            placeholder="i.e. abc@domain.com"
            required={true}
            onChange={FormFieldsHandler}
            onBlur={FormFieldsHandler}
          />
          <Button Type="submit">Submit</Button>
        </section>
      </div>
    </>
  );
}

export default LoginForm;
