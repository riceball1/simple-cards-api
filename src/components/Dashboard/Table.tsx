import { Deck, DeckData } from "@/helper/types";
import React from "react";

interface Props {
  data: DeckData | null;
}

const Table = ({ data }: Props) => {

  if(!data) return null;

  return (
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="px-4 py-2 border border-gray-400">Language</th>
          <th className="px-4 py-2 border border-gray-400">Total Cards</th>
          <th className="px-4 py-2 border border-gray-400">Card Title</th>
        </tr>
      </thead>
      <tbody>
        {data.decks.map((item: Deck) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">{item.language}</td>
            <td className="border px-4 py-2">{item.cards.length || 0}</td>
            <td className="border px-4 py-2">{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
