// renders the cards
// import React, { useState } from "react";
import { Card as CardState } from "@/types/common";
import Card from "@/components/Card";

interface Props {
  cards: CardState[];
}

const CardDisplay = ({ cards }: Props) => {
  return (
    <div>
      {cards?.length > 0 ? (
        <>
          {cards.map((card, index) => (
            <Card key={index} front={card.front} back={card.back}></Card>
          ))}
        </>
      ) : null}
    </div>
  );
};

export default CardDisplay;
