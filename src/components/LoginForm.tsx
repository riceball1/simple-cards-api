import styles from "@/styles/LoginForm.module.css";
import { useState } from "react";

interface Props {
  onHandleLogin: (email: string) => void;
}

const LoginForm = ({ onHandleLogin }: Props) => {
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        placeholder="User Email"
        type="email"
        className={styles.LoginFormInput}
      />

      <button
        className={styles.LoginFormButton}
        onClick={() => onHandleLogin(email)}
      >
        Login
      </button>
      <p>
        Please use one of the following mock emails to demo the
        site: [yliu@hotmail.com, sshah@gmail.com, ryamada@gmail.com]
      </p>
    </>
  );
};

export { LoginForm };
