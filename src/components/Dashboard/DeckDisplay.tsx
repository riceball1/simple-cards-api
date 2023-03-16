import { DeckData } from "@/helper/types";
import useFetch from "@/helper/useFetch";
import { useEffect, useState } from "react";
import Table from "@/components/Dashboard/Table";

interface Props {
  userId?: string;
}

const DeckDisplay = ({ userId = "" }: Props) => {
  console.log(userId);
  // check that there are decks to show
  // if(DataTransfer.) return <h2>Oh noes! You have no decks</h2>;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [deckData, setDeckData] = useState<DeckData | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const { data, loading, error } = useFetch(`api/deck/${userId}`);

  useEffect(() => {
    setIsLoading(true);

    if (data) {
      setDeckData(data as DeckData);
      setIsLoading(false);
    }

    if (error) {
      setHasError(true);
      setIsLoading(false);
    }
  }, [data, loading, error]);

  if (isLoading) return null;
  if (hasError) return null;


  const deckDisplayStyle = {
    display: "flex",
    wrap: "wrap",
    justifyContent: "space-evenly"
  }
  return (
    <div style={deckDisplayStyle}>
      <Table data={deckData} />
    </div>
  );
};

export default DeckDisplay;
