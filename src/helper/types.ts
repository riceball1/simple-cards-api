interface UserData {
  age?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  id?: string;
}


interface Deck {
  id: string;
  language: string;
  name: string;
  cards: Card[];
}

interface DeckData {
  id: string;
  decks: Deck[];
}

interface Card {
  id: string;
  language: string;
  front: string;
  back: string;
}

interface Error {
  name: string;
  message: string;
  stack?: string;
}



export type {
    UserData,
    DeckData,
    Error,
    Deck
}