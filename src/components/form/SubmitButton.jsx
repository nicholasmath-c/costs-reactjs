import PropTypes from "prop-types";

import styles from "./SubmitButton.module.css";

function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  );
}

export default SubmitButton;

SubmitButton.propTypes = {
  text: PropTypes.any,
};
