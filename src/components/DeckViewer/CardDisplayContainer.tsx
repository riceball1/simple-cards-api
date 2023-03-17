import { useEffect, useState } from "react";
import useFetch from "@/helper/useFetch";
import CardDisplay from "./CardDisplay";
import { Card } from "@/types/common";

// fetches the data for rendering the cards
interface Props {
  deckid: string;
  userid: string;
}

const CardDisplayContainer = ({ deckid, userid }: Props) => {
  const { data, error, loading } = useFetch(
    `api/deck/cards?deckid=${deckid}&userid=${userid}`
  );
  const [cardsData, setCardsData] = useState<Card[]>([]);

  useEffect(() => {
    if (!loading && data !== null) {
      console.log("card display container", data);
    //   setCardsData(data)
    }
  }, [data, error, loading]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <CardDisplay cards={cardsData} />
    </>
  );
};

export default CardDisplayContainer;
