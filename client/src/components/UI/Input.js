import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

export default function Input(props) {
  return (
    <div>
      <label className={styles.inputLabel} htmlFor={props.Fieldname}>
        {`${props.Fieldname}`}
        <span>{`${props.required ? "*" : ""}`}</span>
      </label>
      <input
        className={styles.inputField}
        type={props.Type}
        id={props.Fieldname}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
        value={props.value}
      ></input>
    </div>
  );
}

Input.propTypes = {
  Fieldname: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  Type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.any,
};

Input.defaultProps = {
  Type: "text",
  placeholder: "",
  required: false,
  onChange: () => {},
  onBlur: () => {},
};
