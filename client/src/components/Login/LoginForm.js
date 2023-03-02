import React from "react";
import styles from "./LoginForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Logo from "../UI/Logo";

function LoginForm() {
  return (
    <>
      <div className={styles.container}>
        <section>
          <Logo sx={{ width: "200px", height: "150px" }} />
          <Input
            Fieldname="Patient Name"
            required={true}
            placeholder="Rahul Shah"
          />
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
        </section>
      </div>
    </>
  );
}

export default LoginForm;
