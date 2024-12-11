import styles from "./Container.module.css";
import PropTypes from "prop-types";

function Container(props) {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;

Container.propTypes = {
  children: PropTypes.any,
  customClass: PropTypes.string
}