import React from "react";
import styles from "./LoginForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import ReCaptcha from "react-google-recaptcha"

function LoginForm() {
  const sigCanvas = useRef({});
  const clearSig = () => sigCanvas.current.clear();
  const saveSig = () => {
    // const canvas = sigCanvas.current.getTrimmedCanvas();
    // const dataURL = canvas.toDataURL();
  };
  console.log(process.env)
  return (
    <>
      <div className={styles.container}>
        <section>
          <Logo sx={{ width: "200px", height: "150px" }} />
          <Input Fieldname="First Name" required={true} />
        <Input Fieldname="Last Name" required={true} />
        <Input
          Fieldname="Contact"
          Type="number"
          placeholder="1234567890"
          required={true}   
          />
        <Input Fieldname="Email" placeholder="abc@domain.com" required={true} />
        Gender
        <Input Fieldname="Male" Type="radio" name="Gender" required={true} />
        <Input Fieldname="Female" Type="radio" name="Gender" required={true} />
        <Input Fieldname="Date Of Birth" Type="date" required={true} />
        <Input Fieldname="House No.,Society Name" Type="text" required={true} />
        <Input Fieldname="Area" Type="text" required={true} />
        <Input Fieldname="zip Code" Type="number" name="Maritial Status" required={true} />
        Maritial Status
        <Input Fieldname="Single" Type="radio" name="Maritial Status" required={true} />
        <Input Fieldname="Married" Type="radio" name="Maritial Status" required={true} />
        <Input Fieldname="Divorced" Type="radio" name="Maritial Status" required={true} />
        <Input Fieldname="Widow" Type="radio" name="Maritial Status" required={true} />
        Past Medical History
        <Input Fieldname="Anemia" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="Asthama" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="Bronchitis" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="ChickenPox" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="Cancer" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="Diabetes" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="elephantiasis" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="Pneumonia" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="Thyroid" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="Ulcer" Type="checkbox" name="PMH" required={true} />
        <Input Fieldname="Other" Type="text" name="PMH" required={true} />
        <label>signature</label>
        <p>I declared that the information I filled above is true,complete and correct to the best of my knowledge.</p>
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          backgroundColor="grey"
          canvasProps={{ width: 300, height: 100, className: "sigCanvas" }}
          />
        <button onClick={clearSig}>Clear signature</button>
        <button onClick={saveSig}>Save signature</button>
          <ReCaptcha
          sitekey={process.env.REACT_APP_SITE_KEY}
          />
        <Button Type="submit">Submit</Button>
          {/* <Input
            Fieldname="Patient First Name"
            required={true}
            placeholder="Rahul Shah"
          />
          <Input
            Fieldname="Patient Last Name"
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
          <Input
            Fieldname="Male"
            placeholder="i.e. abc@domain.com"
            required={true}
          />
           */}
          
          {/* <Button Type="submit">Submit</Button> */}
        </section>
      </div>
    </>
  );
}

export default LoginForm;
