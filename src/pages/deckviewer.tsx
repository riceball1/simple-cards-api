import CardDisplayContainer from "@/components/DeckViewer/CardDisplayContainer";
import Header from "@/components/Header";
import { useRouter } from "next/router";

export default function DeckViewer() {
  const router = useRouter();
  const { deckid, userid } = router.query;

  return (
    <>
      <Header />
      <header className="text-center my-10">
        <h1 className="text-6xl font-bold">Deck Viewer</h1>
      </header>

      {deckid && userid ? (
        <CardDisplayContainer deckid={deckid as string} userid={userid as string} />
      ) : null}
    </>
  );
}
