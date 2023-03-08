import React, { useState } from "react";
import Header from "@/components/Header";
import {Modal} from "@/components/Modal";
import { LoginForm } from "@/components/LoginForm";

export default function Home() {
  const [toggleModal, setToggleModal] = useState(false);

  const handleLogin = (email: string) => {
    handleToggleModal() // close the modal
    alert(`Successfully Logined in with ${email} `)
  };

  const handleToggleModal = () => {
    setToggleModal(prevState => !prevState)
  }

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

        <button
          className="rounded-full bg-teal-500 text-black p-3 w-36 shadow-md hover:shadow-2xl"
          onClick={handleToggleModal}
        >
          Demo Login
        </button>
      </header>
      <div>
        {toggleModal && <Modal onToggleModal={handleToggleModal}>
            <LoginForm onHandleLogin={handleLogin} />
          </Modal>}
      </div>
    </>
  );
}
