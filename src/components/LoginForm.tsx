import styles from "@/styles/LoginForm.module.css";
import { useState } from "react";

interface Props {
  onHandleLogin: (email: string) => void;
  errorMessage: string;
}

const LoginForm = ({ onHandleLogin, errorMessage }: Props) => {
  const [email, setEmail] = useState("");

  return (
    <form onSubmit={(event) =>  {
        event.preventDefault();
        event.stopPropagation();
        onHandleLogin(email)
    }} className={styles.LoginForm}>
      <input
        placeholder="User Email"
        type="email"
        className={styles.LoginFormInput}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {errorMessage.length > 0 ? (
        <p style={{ color: "red" }}>{errorMessage}</p>
      ) : null}
      <button
        className={styles.LoginFormButton}
        onClick={() => onHandleLogin(email)}
      >
        Login
      </button>
      <p>
        Please use one of the following mock emails to demo the site:
        [yliu@hotmail.com, sshah@gmail.com, ryamada@gmail.com]
      </p>
    </form>
  );
};

export { LoginForm };
