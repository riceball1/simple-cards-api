interface Props {
  onHandleModal: () => void;
}

const Intro = ({ onHandleModal }: Props) => {
  return (
    <header className="text-center my-10">
      <h1 className="text-6xl font-bold">Simple Cards</h1>
      <p className="sm:mx-20 mx-10 my-10 text-xl">
        Introducing Simple Cards - the app that makes learning a breeze! With
        just a few small chunks of learning every day, you can master a new
        subject in no time. Say goodbye to overwhelming study sessions and hello
        to simple, effective learning with Simple Cards. Try it now and see the
        difference for yourself!
      </p>

      <button
        className="rounded-full bg-teal-500 text-black p-3 w-36 shadow-md hover:shadow-2xl"
        onClick={onHandleModal}
      >
        Demo Login
      </button>
    </header>
  );
};

export { Intro };
