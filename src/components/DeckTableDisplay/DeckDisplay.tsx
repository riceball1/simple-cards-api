import Table from "@/components/Dashboard/Table";
import { DeckData } from "@/types/common";
import { useRouter } from "next/router";

interface Props {
  deckData: DeckData | null;
  userid: string;
}

const DeckDisplay = ({ deckData, userid }: Props) => {
  const router = useRouter();
  const deckDisplayStyle = {
    display: "flex",
    wrap: "wrap",
    justifyContent: "space-evenly",
  };

  if (deckData === null) return null;

  const handleRowClick = (deckid: string) => {
    router.push({
      pathname: "/api/deckviewer",
      query: {
        deckid: encodeURIComponent(deckid),
        userid: encodeURIComponent(userid)
      },
    }); // Redirect to the deckview page
  };

  return (
    <div style={deckDisplayStyle}>
      <Table data={deckData} onClickHandler={handleRowClick} />
    </div>
  );
};

export default DeckDisplay;
