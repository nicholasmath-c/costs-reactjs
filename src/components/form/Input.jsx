import PropTypes from "prop-types";

import styles from "./Input.module.css";

function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.any,
  text: PropTypes.any,
  name: PropTypes.any,
  placeholder: PropTypes.any,
  handleOnChange: PropTypes.any,
  value: PropTypes.any,
};
