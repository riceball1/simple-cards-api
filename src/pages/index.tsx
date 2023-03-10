import React, { useState } from "react";
import Header from "@/components/Header";
import { Modal } from "@/components/Modal";
import { LoginForm } from "@/components/LoginForm";
import { validateLogin } from "@/helper/utils";
import { Intro } from "@/components/Home/Intro";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  const [toggleModal, setToggleModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (email: string) => {
    if (validateLogin(email)) {
      handleToggleModal(); // close the modal
      setLoggedIn(true);
      router.push("dashboard"); // Redirect to the dashboard page
    } else {
      setErrorMessage("Error logging in! Try again!");
    }
  };

  const handleToggleModal = () => {
    setToggleModal((prevState) => !prevState);
  };

  return (
    <>
      <Header />

      <Intro onHandleModal={handleToggleModal} />
      <div>
        {toggleModal && (
          <Modal onToggleModal={handleToggleModal}>
            <LoginForm
              onHandleLogin={handleLogin}
              errorMessage={errorMessage}
            />
          </Modal>
        )}
      </div>
    </>
  );
}
