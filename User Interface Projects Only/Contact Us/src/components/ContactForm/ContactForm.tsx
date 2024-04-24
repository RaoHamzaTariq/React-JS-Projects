import { MdMessage,MdCall, MdMailOutline  } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  
  interface FormData{
    name:string,
    email:string,
    text:string
  }
  const OnSubmit = (events:FormData) =>{
    console.log(events)
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <div className={styles.top_button}>
        <Button text = "VIA SUPPORT CHAT" icon = {<MdMessage fontSize={24}/>}/>
        <Button text = "VIA CALL" icon = {<MdCall fontSize={24}/>}/>
      </div>
      <Button isOutline = {true} text = "VIA EMAIL FORM" icon = {<MdMailOutline fontSize={24}/>}/>

      <form onSubmit ={OnSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"/>
        </div>
        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea name="text" rows={8}/>
        </div>
        <div className={styles.submit_btn}><Button text = "Submit"/></div>
      </form>
  
      </div>
      <div className={styles.contact_image}>
        <img src="Images/Service pic.png" alt="Service 24/7 image" />
      </div>
    </section>
  );
};

export default ContactForm;
