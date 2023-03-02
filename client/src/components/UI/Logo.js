import React from "react";
import styles from "./Logo.module.css";
import logo from "../Assets/HMSLogo.png";
import PropTypes from "prop-types";

function Logo(props) {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="HMSLogo.png" style={props.sx} />
    </div>
  );
}

Logo.propTypes = {
  sx: PropTypes.object,
};

Logo.defaultProps = {
  sx: { width: "150px", Height: "100px" },
};

export default Logo;
