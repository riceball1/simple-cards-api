import { Deck, DeckData } from "@/types/common";
import React, { useState } from "react";

interface Props {
  data: DeckData | null;
  onClickHandler: (value: any) => void;
}

type RowState = {
  showBorder: boolean;
};
const Table = ({ data, onClickHandler }: Props) => {
  const [rowState, setRowState] = useState<RowState[]>(
    Array(data?.decks.length).fill({
      showBorder: false,
    })
  );

  const handleUpdateRowState = (index: number) => {
    setRowState((prevState) => {
      const copyState = [...prevState];

      copyState[index] = {
        ...copyState[index],
        showBorder: !copyState[index].showBorder,
      };

      return copyState;
    });
  };

  if (!data) return null;

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
        {data.decks.map((item: Deck, index: number) => {
          const trStyle = {
            border: rowState[index].showBorder ? "2px solid lightblue" : "none",
            cursor: "pointer",
          };

          return (
            <tr
              style={trStyle}
              key={`key-${item.id}-${index}`}
              onClick={() => onClickHandler(item.id)}
              onMouseOver={() => handleUpdateRowState(index)}
              onMouseLeave={() => handleUpdateRowState(index)}
            >
              <td className="border px-4 py-2">{item.language}</td>
              <td className="border px-4 py-2">{item.cards.length || 0}</td>
              <td className="border px-4 py-2">{item.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
