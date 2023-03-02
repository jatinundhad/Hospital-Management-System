import React, { useState, useEffect } from "react";
import styles from "./LoginForm.module.css";
import Input from "../UI/Input";
import Button from "../UI/Button";
import Logo from "../UI/Logo";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import ReCaptcha from "react-google-recaptcha";
import DropDown from "../UI/DropDown";
import { Country, State, City } from "country-state-city";

function LoginForm() {
  const [formFields, setFormFields] = useState({});
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Gujarat");
  const [city, setCity] = useState("Surat");

  const [listCountries, setListCountries] = useState();
  const [listStates, setListStates] = useState();
  const [listCities, setListCities] = useState();

  const [StateCode, setStateCode] = useState("GJ");
  const [CountryCode, setCountryCode] = useState("IN");

  useEffect(() => {
    let countries = Country.getAllCountries();
    countries = countries.map((country, ind) => ({
      name: country.name,
      code: country.isoCode,
      ind: ind,
    }));
    setListCountries(countries);
  }, []);

  useEffect(() => {
    let states = State.getStatesOfCountry(CountryCode);
    states = states.map((state, ind) => ({
      name: state.name,
      code: state.isoCode,
      ind: ind,
    }));
    setListStates(states);
  }, [CountryCode]);

  useEffect(() => {
    let cities = City.getCitiesOfState(CountryCode, StateCode);
    cities = cities.map((city, ind) => ({
      name: city.name,
      ind: ind,
      code: ind,
    }));
    setListCities(cities);
  }, [CountryCode, StateCode]);

  const countryHandler = (e) => {
    let index = e.target.value.indexOf("_");
    setCountryCode(e.target.value.substring(0, index));
    setCountry(e.target.value);
  };

  const stateHandler = (e) => {
    let index = e.target.value.indexOf("_");
    setStateCode(e.target.value.substring(0, index));
    setState(e.target.value);
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  function FormFieldsHandler(e) {
    const { name, value } = e.target;
    setFormFields((prevState) => ({ ...prevState, [name]: value }));
  }

  const sigCanvas = useRef({});
  const clearSig = () => sigCanvas.current.clear();
  const saveSig = () => {
    // const canvas = sigCanvas.current.getTrimmedCanvas();
    // const dataURL = canvas.toDataURL();
  };
  return (
    <>
      <div className={styles.container}>
        <section>
          <Logo sx={{ width: "200px", height: "150px" }} />

          <section>
            <Input
              Fieldname="First Name"
              name="FirstName"
              required={true}
              placeholder="Rahul"
              value={formFields.FirstName}
              onChange={FormFieldsHandler}
              onBlur={FormFieldsHandler}
            />
            <Input
              Fieldname="Last Name"
              name="LastName"
              required={true}
              placeholder="Shah"
              value={formFields.LastName}
              onChange={FormFieldsHandler}
              onBlur={FormFieldsHandler}
            />
          </section>

          <Input
            Fieldname="Street"
            name="Street"
            required={true}
            placeholder="Sardar Society"
            value={formFields.Street}
            onChange={FormFieldsHandler}
            onBlur={FormFieldsHandler}
          />

          <Input
            Fieldname="Landmark"
            name="Landmark"
            required={true}
            placeholder="Near Paramahansh School"
            value={formFields.Street}
            onChange={FormFieldsHandler}
            onBlur={FormFieldsHandler}
          />

          <DropDown
            Fieldname="Country"
            name="Country"
            required={true}
            value={country}
            list={listCountries}
            onChange={countryHandler}
            onBlur={countryHandler}
          />
          <DropDown
            Fieldname="State"
            name="State"
            required={true}
            list={listStates}
            value={state}
            onChange={stateHandler}
            onBlur={stateHandler}
          />
          <DropDown
            Fieldname="City"
            name="City"
            required={true}
            list={listCities}
            value={city}
            onChange={cityHandler}
            onBlur={cityHandler}
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

          <label>signature</label>
          <p>
            I declared that the information I filled above is true,complete and
            correct to the best of my knowledge.
          </p>
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            backgroundColor="#e5e5e5"
            canvasProps={{ width: 300, height: 100, className: "sigCanvas" }}
          />
          <button onClick={clearSig}>Clear signature</button>
          <button onClick={saveSig}>Save signature</button>
          <ReCaptcha sitekey={process.env.REACT_APP_SITE_KEY} />
          <Button Type="submit">Submit</Button>
        </section>
      </div>
    </>
  );
}

export default LoginForm;
