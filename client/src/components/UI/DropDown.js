import React from "react";
import styles from "./DropDown.module.css";

function DropDown(props) {
  const { list } = props;

  return (
    <>
      <label className={styles.inputLabel} htmlFor={props.Fieldname}>
        {props.Fieldname}
        <span>{`${props.required ? "*" : ""}`}</span>
      </label>
      <select
        name={props.name}
        id={props.Fieldname}
        className={styles.inputField}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      >
        {props.list &&
          list.map((listNode) => {
            return (
              <option
                value={listNode.code + "_" + listNode.name}
                key={listNode.ind}
              >
                {listNode.name}
              </option>
            );
          })}
      </select>
    </>
  );
}

export default DropDown;
