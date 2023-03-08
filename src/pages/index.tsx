import React from "react";
import Header from '@/components/Header';

export default function Home() {
  const [showAboutSection, setShowAboutSection] = React.useState(false);
  const [showLearningSection, setShowLearningSection] = React.useState(false);

  const handleShowAboutSection = () => {
    setShowAboutSection((showAboutSection) => !showAboutSection);
    setShowLearningSection(false);
  };

  const handleShowLearningSection = () => {
    setShowAboutSection(false);
    setShowLearningSection((showLearningSection) => !showLearningSection);
  };

  return (
    <>
      <Header/>
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
          onClick={handleShowLearningSection}
        >
          Start Learning
        </button>{" "}
        <button
          className="rounded-full bg-black p-3 w-36 text-white shadow-md hover:shadow-2xl"
          onClick={handleShowAboutSection}
        >
          About
        </button>
      </header>
      <hr />
      {showAboutSection ? (
        <main className="m-20 ease-in duration-300" id="about-section">
          <h2 className="text-2xl font-bold">About The Simple Language App</h2>
          <div className="mt-5">
            <p>
              You might find it hard to focus on learning a language, but most
              often many people do too much at once and then give up for some
              time.
            </p>
            <p>
              Tiny habits or atomic habits taught us that small chunks of effort
              can go a long way. Consistency is what will pay off in the end.
            </p>
          </div>
        </main>
      ) : null}
      {showLearningSection ? (
        <main className="m-20 ease-in duration-300" id="about-section">
          <h2 className="text-2xl font-bold">Get Started Learning</h2>

          <div className="max-w-sm rounded overflow-hidden shadow-lg mt-6 h-40 w-40 p-6 flex content-center justify-center items-center bg-teal-500 hover:text-yellow-500 hover:bg-black cursor-pointer">
            <div className="font-bold text-4xl mb-2">Turkish</div>
          </div>
        </main>
      ) : null}
    </>
  );
}
