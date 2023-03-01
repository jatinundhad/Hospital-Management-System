import React from 'react'
import PropTypes from "prop-types"
import styles from "./Input.module.css"
  
export default function Input(props) {
  return (
    <div>
      <label className={styles.inputLabel} htmlFor={props.Fieldname}> {`${props.Fieldname}${props.required?'*':''}`}</label>
    <input className={styles.inputField} type={props.Type} id={props.Fieldname} placeholder={props.placeholder}></input>
    </div>
  )
}

Input.propTypes = {
  Fieldname: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  Type: PropTypes.string
}

Input.defaultProps = {
  Type: "text",
  placeholder: '',
  required:false
}

