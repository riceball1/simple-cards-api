import { ReactNode } from "react";

type ReactChildren = ReactNode | ReactNode[];

type UserData = {
  age?: number;
  email?: string;
  firstName?: string;
  lastName?: string;
  id?: string;
};

type Deck = {
  id: string;
  language: string;
  name: string;
  cards: Card[];
};

type DeckData = {
  id: string;
  decks: Deck[];
};

type Card = {
  id: string;
  language: string;
  front: string;
  back: string;
};

type Error = {
  name: string;
  message: string;
  stack?: string;
};

export type { ReactChildren, UserData, DeckData, Error, Deck, Card };
