import styles from "./Button.module.css";

const Button = (props: any) => {

    const {isOutline,icon,text} = props

  return (
      <button  className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
      </button>
  );
};

export default Button;
