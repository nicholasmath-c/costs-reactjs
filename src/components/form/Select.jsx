import PropTypes from "prop-types";

import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

Select.propTypes = {
  text: PropTypes.any,
  name: PropTypes.any,
  options: PropTypes.any,
  handleOnChange: PropTypes.any,
  value: PropTypes.any,
};
