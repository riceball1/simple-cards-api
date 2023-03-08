import React, { useState } from "react";
import Header from "@/components/Header";
import { Modal } from "@/components/Modal";
import { LoginForm } from "@/components/LoginForm";
import { validateLogin } from "@/helper/utils";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);
  const [loginStatus, setLoginStatus] = useState({
    successMessage: "",
    errorMessage: "",
  });

  const handleLogin = (email: string) => {
    if (validateLogin(email)) {
      handleToggleModal(); // close the modal
      setLoginStatus((prevState) => ({
        ...prevState,
        successMessage: `Successfully Logined in with ${email} `,
      }));
    } else {
      setLoginStatus((prevState) => ({
        ...prevState,
        errorMessage: "Error logging in! Try again!",
      }));
    }
  };

  const handleToggleModal = () => {
    setToggleModal((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <header className="text-center my-10">
        <h1 className="text-6xl font-bold">The Simple Language App</h1>
        <p className="sm:mx-20 mx-10 my-10 text-xl">
          Little small chunks of learning a day can help you succeed in building
          the lanuage skills needed to become a multilingual. You can achieve
          your goals of becoming fluent in another language with a small stack
          of language cards.
        </p>

        {!loginStatus.successMessage.length ? (
          <button
            className="rounded-full bg-teal-500 text-black p-3 w-36 shadow-md hover:shadow-2xl"
            onClick={handleToggleModal}
          >
            Demo Login
          </button>
        ) : null}
        {loginStatus.successMessage.length > 0 ? (
          <p style={{ color: "green" }}>{loginStatus.successMessage}</p>
        ) : null}
      </header>
      <div>
        {toggleModal && (
          <Modal onToggleModal={handleToggleModal}>
            <LoginForm onHandleLogin={handleLogin} loginStatus={loginStatus} />
          </Modal>
        )}
      </div>
    </>
  );
}
