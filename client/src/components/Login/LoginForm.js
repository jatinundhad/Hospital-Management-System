import React from "react";
// import styles from "./LoginForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
function LoginForm() {
  return (
    <>
      <div className="container">
        <Input Fieldname="Patient Name" required={true} />
        <Input
          Fieldname="Contact"
          Type="number"
          placeholder="i.e. 1234567890"
          required={true}
        />
        <Input
          Fieldname="Email"
          placeholder="i.e. abc@domain.com"
          required={true}
        />
        <Button Type="submit">Submit</Button>
      </div>
    </>
  );
}

export default LoginForm;
