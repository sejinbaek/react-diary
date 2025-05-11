import css from "./Button.module.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${css.button} ${css[`button_${type}`]}`}
    >
      {text}
    </button>
  );
};

export default Button;
