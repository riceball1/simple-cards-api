import { DeckData } from "@/types/common";
import useFetch from "@/helper/useFetch";
import { useEffect, useState } from "react";
import DeckDisplay from "@/components/DeckTableDisplay/DeckDisplay";

interface Props {
  userid?: string;
}

const DeckDisplayContainer = ({ userid = "" }: Props) => {
  const [deckData, setDeckData] = useState<DeckData | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);
  const { data, loading, error } = useFetch(`api/deck/${userid}`);

  useEffect(() => {
    if (data) {
      setDeckData(data as DeckData);
    }

    if (error) {
      setHasError(true);
    }
  }, [data, loading, error]);

  if (loading) return null;
  if (hasError) return null;

  return <DeckDisplay deckData={deckData} userid={userid} />;
};

export default DeckDisplayContainer;
