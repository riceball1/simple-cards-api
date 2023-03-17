import React, { useState } from "react";

interface Props {
  front: string;
  back: string;
}

const Card = ({ front, back }: Props) => {
  const [showCardFront, setShowCardFront] = useState<boolean>(true);

  const cardStyle = {
    height: "250px",
    width: "250px",
    cursor: "pointer"
  }

  return (
    <button
      className="bg-white shadow rounded-lg text-2xl flex items-center justify-center" style={cardStyle}
      onClick={() => setShowCardFront((prevState) => !prevState)}
    >
      {showCardFront ? front : back}
    </button>
  );
};

export default Card;
